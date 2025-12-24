import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, 
  Trash2, CheckCircle, Clock, Syringe, Baby, 
  Warehouse, Utensils, X, Settings, Sliders
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFarm } from '../context/FarmContext';
import { Reminder } from '../types';
import { getBikramiDate, getFullDateInfo } from '../utils/dateUtils';

const CalendarPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { 
    reminders, addReminder, deleteReminder, toggleReminderComplete,
    breedingRecords, healthRecords, calendarSettings, updateCalendarSettings
  } = useFarm();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Form State
  const [newEvent, setNewEvent] = useState<Partial<Reminder>>({
    category: 'General',
    date: new Date().toISOString().split('T')[0],
    time: '08:00'
  });

  // Ensure "Today" reflects the real-time moment
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  // --- NAVIGATION ---
  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  // --- HEADER LABEL ---
  const getHeaderLabel = () => {
    const greg = currentDate.toLocaleDateString(language === 'ur' ? 'ur-PK' : 'en-US', { month: 'long', year: 'numeric' });
    const desiInfo = getBikramiDate(currentDate, calendarSettings.desiOffset);

    if (calendarSettings.primaryCalendar === 'desi') {
        return `${language === 'ur' ? desiInfo.monthUr : desiInfo.monthEn} ${desiInfo.year}`;
    }
    return greg;
  };

  // --- MERGE EVENTS ---
  const eventsForDay = useMemo(() => {
    const dateStr = selectedDate.toISOString().split('T')[0];
    
    const manual = reminders.filter(r => r.date === dateStr).map(r => ({ ...r, type: 'manual' }));
    
    const breeding = breedingRecords
        .filter(r => r.expectedDate === dateStr && r.status === 'In Progress')
        .map(r => ({
            id: `breed-${r.id}`,
            title: language === 'en' ? `Expected Calving: ${r.animalName}` : `بچے کی پیدائش: ${r.animalName}`,
            date: r.expectedDate,
            time: '06:00',
            category: 'Breeding',
            notes: language === 'en' ? 'Prepare calving area.' : 'جگہ تیار کریں۔',
            type: 'auto',
            isCompleted: false
        }));
    
    const health = healthRecords
        .filter(r => r.nextDueDate === dateStr)
        .map(r => ({
            id: `health-${r.id}`,
            title: language === 'en' ? `Due: ${r.type} for ${r.animalName}` : `اگلی خوراک: ${r.type} برائے ${r.animalName}`,
            date: r.nextDueDate!,
            time: '08:00',
            category: 'Health',
            notes: r.medicine,
            type: 'auto',
            isCompleted: false
        }));

    return [...manual, ...breeding, ...health] as any[];
  }, [selectedDate, reminders, breedingRecords, healthRecords, language]);

  const getEventDots = (day: number) => {
      const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const str = checkDate.toISOString().split('T')[0];
      
      const dots = [];
      if (healthRecords.some(r => r.nextDueDate === str)) dots.push('bg-red-500');
      if (breedingRecords.some(r => r.expectedDate === str && r.status === 'In Progress')) dots.push('bg-blue-500');
      if (reminders.some(r => r.date === str && r.category === 'Feeding')) dots.push('bg-green-500');
      if (reminders.some(r => r.date === str && r.category === 'Shed')) dots.push('bg-orange-500');
      
      if (dots.length === 0 && reminders.some(r => r.date === str)) dots.push('bg-gray-400');
      
      return dots.slice(0, 3); // Max 3 dots
  };

  const handleAddSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if(!newEvent.title || !newEvent.date) return;
      addReminder({
          id: Date.now().toString(),
          title: newEvent.title!,
          date: newEvent.date!,
          time: newEvent.time || '08:00',
          category: newEvent.category as any,
          notes: newEvent.notes,
          isCompleted: false
      });
      setShowModal(false);
      setNewEvent({ category: 'General', date: selectedDate.toISOString().split('T')[0], time: '08:00' });
  };

  const getCategoryColor = (cat: string) => {
      switch(cat) {
          case 'Health': return 'bg-red-50 text-red-700 border-red-200';
          case 'Feeding': return 'bg-green-50 text-green-700 border-green-200';
          case 'Breeding': return 'bg-blue-50 text-blue-700 border-blue-200';
          case 'Shed': return 'bg-orange-50 text-orange-700 border-orange-200';
          default: return 'bg-gray-50 text-gray-700 border-gray-200';
      }
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
        case 'Health': return <Syringe size={18} />;
        case 'Feeding': return <Utensils size={18} />;
        case 'Breeding': return <Baby size={18} />;
        case 'Shed': return <Warehouse size={18} />;
        default: return <Clock size={18} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                <CalendarIcon className="mr-3 text-primary" size={32}/>
                {t('Farm Calendar', 'فارم کیلنڈر')}
            </h1>
            <p className="text-gray-500 mt-1">{t('Dynamic dates with regional adjustments.', 'علاقائی ترتیبات کے ساتھ متحرک تاریخیں۔')}</p>
         </div>

         <div className="flex items-center gap-3 w-full lg:w-auto">
             <div className="bg-gray-100 p-1 rounded-lg flex flex-1 lg:flex-none">
                 <button onClick={() => updateCalendarSettings({...calendarSettings, primaryCalendar: 'gregorian'})} className={`flex-1 px-3 py-2 rounded-md text-sm font-bold transition-all ${calendarSettings.primaryCalendar === 'gregorian' ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`}>{t('AD', 'عیسوی')}</button>
                 <button onClick={() => updateCalendarSettings({...calendarSettings, primaryCalendar: 'desi'})} className={`flex-1 px-3 py-2 rounded-md text-sm font-bold transition-all ${calendarSettings.primaryCalendar === 'desi' ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`}>{t('Desi', 'دیسی')}</button>
             </div>
             
             <button onClick={() => setShowSettings(true)} className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
                <Settings size={20} />
             </button>

             <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-green-800 text-white px-4 py-2 rounded-lg font-bold flex items-center shadow-sm">
                 <Plus size={20} className="md:mr-2"/> <span className="hidden md:inline">{t('Add', 'شامل کریں')}</span>
             </button>
         </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
          
          {/* CALENDAR GRID */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="bg-gray-50 p-4 flex justify-between items-center border-b border-gray-200">
                 <button onClick={prevMonth} className="p-2 hover:bg-gray-200 rounded-full"><ChevronLeft size={24} className="text-gray-600"/></button>
                 <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-800">{getHeaderLabel()}</h2>
                    <span className="text-sm text-gray-500">
                        {(() => {
                            if (calendarSettings.primaryCalendar === 'desi') {
                                return currentDate.toLocaleDateString(language === 'ur' ? 'ur-PK' : 'en-US', { month: 'long', year: 'numeric' });
                            } else {
                                const info = getBikramiDate(currentDate, calendarSettings.desiOffset);
                                return `${language === 'ur' ? info.monthUr : info.monthEn} ${info.year}`;
                            }
                        })()}
                    </span>
                 </div>
                 <button onClick={nextMonth} className="p-2 hover:bg-gray-200 rounded-full"><ChevronRight size={24} className="text-gray-600"/></button>
             </div>
             
             <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                     <div key={i} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">{d}</div>
                 ))}
             </div>

             <div className="grid grid-cols-7">
                 {Array(firstDayOfMonth(currentDate)).fill(null).map((_, i) => <div key={`blank-${i}`} className="min-h-[100px] border-b border-r border-gray-100 bg-gray-50/30"></div>)}
                 
                 {Array.from({ length: daysInMonth(currentDate) }, (_, i) => i + 1).map(day => {
                     const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                     const info = getFullDateInfo(date, calendarSettings);
                     const isToday = date.toDateString() === new Date().toDateString();
                     const isSelected = date.toDateString() === selectedDate.toDateString();
                     const dots = getEventDots(day);

                     let mainDate: string | number = info.gregorian.day;
                     let subDate = `${language === 'ur' ? info.bikrami.monthUr : info.bikrami.month} ${info.bikrami.day}`;
                     
                     if (calendarSettings.primaryCalendar === 'desi') {
                         mainDate = info.bikrami.day;
                         subDate = `${info.gregorian.day} ${info.gregorian.month}`;
                     }

                     return (
                         <div 
                            key={day} 
                            onClick={() => setSelectedDate(date)}
                            className={`min-h-[100px] border-b border-r border-gray-100 p-2 cursor-pointer transition-colors relative flex flex-col justify-between
                                ${isSelected ? 'bg-green-50 ring-inset ring-2 ring-primary' : 'hover:bg-gray-50'}
                            `}
                         >
                             <div className="flex justify-between items-start">
                                <span className={`text-lg font-bold leading-none ${isToday ? 'text-primary' : 'text-gray-800'}`}>{mainDate}</span>
                                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{subDate}</span>
                             </div>

                             <div className="flex gap-1 mt-2 justify-center flex-wrap">
                                 {dots.map((color, idx) => (
                                     <div key={idx} className={`w-2 h-2 rounded-full ${color}`}></div>
                                 ))}
                             </div>
                         </div>
                     );
                 })}
             </div>
          </div>

          {/* SIDEBAR EVENTS */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                  <div>
                      <h3 className="text-xl font-bold text-gray-800">{t('Day Overview', 'دن کا جائزہ')}</h3>
                      <p className="text-sm text-gray-500">
                          {selectedDate.toLocaleDateString(language === 'ur' ? 'ur-PK' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </p>
                  </div>
                  <button onClick={goToToday} className="text-xs font-bold text-primary bg-green-50 px-3 py-1 rounded-full">{t('Today', 'آج')}</button>
              </div>

              <div className="bg-gradient-to-r from-primary to-green-700 rounded-xl p-4 text-white mb-6 shadow-md">
                   <div className="flex justify-between items-end">
                       <div>
                           <span className="block text-xs opacity-80 uppercase tracking-wider">{t('Bikrami / Desi', 'بکرمی / دیسی')}</span>
                           <span className="text-lg font-bold">
                               {getBikramiDate(selectedDate, calendarSettings.desiOffset).day} {language === 'ur' ? getBikramiDate(selectedDate, calendarSettings.desiOffset).monthUr : getBikramiDate(selectedDate, calendarSettings.desiOffset).monthEn}
                           </span>
                       </div>
                       <span className="text-sm opacity-80">{getBikramiDate(selectedDate, calendarSettings.desiOffset).year}</span>
                   </div>
              </div>

              <h4 className="font-bold text-gray-700 mb-3 text-sm uppercase">{t('Scheduled Events', 'شیڈول تقریبات')}</h4>
              <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar">
                  {eventsForDay.length > 0 ? (
                      eventsForDay.map((event, idx) => (
                          <div key={idx} className={`p-3 rounded-lg border flex items-start gap-3 group transition-all ${getCategoryColor(event.category)} ${event.isCompleted ? 'opacity-60 grayscale' : ''}`}>
                              <div className="mt-1">{getCategoryIcon(event.category)}</div>
                              <div className="flex-1">
                                  <h4 className={`font-bold text-sm ${event.isCompleted ? 'line-through' : ''}`}>{event.title}</h4>
                                  <div className="flex items-center gap-2 mt-1 text-xs opacity-80">
                                      <Clock size={12}/> {event.time}
                                  </div>
                              </div>
                              {event.type === 'manual' && (
                                  <button onClick={() => toggleReminderComplete(event.id)} className="text-green-600 hover:text-green-800 self-center">
                                      {event.isCompleted ? <CheckCircle size={20} className="fill-green-200"/> : <div className="w-5 h-5 rounded-full border-2 border-green-600"></div>}
                                  </button>
                              )}
                          </div>
                      ))
                  ) : (
                      <div className="text-center py-8 text-gray-400 border border-dashed rounded-xl bg-gray-50">
                          <p className="text-sm">{t('No events.', 'کوئی تقریب نہیں۔')}</p>
                      </div>
                  )}
              </div>
          </div>
      </div>

      {/* SETTINGS MODAL */}
      {showSettings && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gray-100 p-4 flex justify-between items-center">
                      <h3 className="font-bold text-gray-800 flex items-center"><Sliders size={18} className="mr-2"/> {t('Calendar Settings', 'کیلنڈر کی ترتیبات')}</h3>
                      <button onClick={() => setShowSettings(false)}><X size={20} className="text-gray-500"/></button>
                  </div>
                  <div className="p-6 space-y-6">
                      
                      {/* Region */}
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">{t('Desi Region', 'دیسی علاقہ')}</label>
                          <div className="grid grid-cols-2 gap-2">
                              {['Punjab', 'Sindh'].map(r => (
                                  <button 
                                    key={r}
                                    onClick={() => updateCalendarSettings({...calendarSettings, region: r as any})}
                                    className={`py-2 px-3 rounded-lg text-sm font-medium border ${calendarSettings.region === r ? 'bg-green-50 border-primary text-primary' : 'bg-white border-gray-200 text-gray-600'}`}
                                  >
                                      {t(r, r === 'Punjab' ? 'پنجاب' : 'سندھ')}
                                  </button>
                              ))}
                          </div>
                      </div>

                      {/* Desi Correction */}
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">{t('Desi Adjustment', 'دیسی تاریخ کی ترتیب')}</label>
                          <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
                              <button 
                                onClick={() => updateCalendarSettings({...calendarSettings, desiOffset: calendarSettings.desiOffset - 1})}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border text-gray-600 hover:text-primary"
                              >-</button>
                              <span className="font-mono font-bold text-lg flex-1 text-center">
                                  {calendarSettings.desiOffset > 0 ? `+${calendarSettings.desiOffset}` : calendarSettings.desiOffset} {t('Days', 'دن')}
                              </span>
                              <button 
                                onClick={() => updateCalendarSettings({...calendarSettings, desiOffset: calendarSettings.desiOffset + 1})}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border text-gray-600 hover:text-primary"
                              >+</button>
                          </div>
                      </div>

                      <button onClick={() => setShowSettings(false)} className="w-full bg-primary text-white font-bold py-3 rounded-xl">
                          {t('Save Settings', 'محفوظ کریں')}
                      </button>
                  </div>
              </div>
          </div>
      )}

      {/* ADD EVENT MODAL (Unchanged) */}
      {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">{t('Add Reminder', 'ریماہنڈر شامل کریں')}</h3>
                      <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><X size={24}/></button>
                  </div>
                  
                  <form onSubmit={handleAddSubmit} className="space-y-4">
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">{t('Title / Task', 'عنوان / کام')}</label>
                          <input 
                            type="text" 
                            required 
                            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none" 
                            placeholder="e.g. Buy Feed, Vaccination"
                            value={newEvent.title || ''}
                            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                          />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="block text-sm font-bold text-gray-700 mb-1">{t('Date', 'تاریخ')}</label>
                              <input 
                                type="date" 
                                required 
                                className="w-full p-3 border rounded-xl" 
                                value={newEvent.date}
                                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-bold text-gray-700 mb-1">{t('Time', 'وقت')}</label>
                              <input 
                                type="time" 
                                className="w-full p-3 border rounded-xl" 
                                value={newEvent.time}
                                onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                              />
                          </div>
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">{t('Category', 'زمرہ')}</label>
                          <select 
                            className="w-full p-3 border rounded-xl"
                            value={newEvent.category}
                            onChange={(e) => setNewEvent({...newEvent, category: e.target.value as any})}
                          >
                              <option value="General">General</option>
                              <option value="Health">Health / Vaccination</option>
                              <option value="Feeding">Feeding</option>
                              <option value="Breeding">Breeding</option>
                              <option value="Shed">Shed Maintenance</option>
                          </select>
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">{t('Notes (Optional)', 'نوٹس (اختیاری)')}</label>
                          <textarea 
                            className="w-full p-3 border rounded-xl h-24 resize-none" 
                            value={newEvent.notes || ''}
                            onChange={(e) => setNewEvent({...newEvent, notes: e.target.value})}
                          ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-green-800 transition">
                          {t('Save Reminder', 'محفوظ کریں')}
                      </button>
                  </form>
              </div>
          </div>
      )}
    </div>
  );
};

export default CalendarPage;