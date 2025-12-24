import React, { useState } from 'react';
import { 
  Warehouse, Plus, Calendar, AlertCircle, Syringe, Pill, 
  Trash2, CheckCircle, Clock, Filter, Camera, User, FileText,
  Baby, Activity, Droplet, HeartPulse, Stethoscope, Edit3
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFarm } from '../context/FarmContext';
import { FarmAnimal, BreedingRecord, HealthRecord, Observation } from '../types';

const FarmDashboard: React.FC = () => {
  const { t, language } = useLanguage();
  const { 
    animals, addAnimal, deleteAnimal, 
    breedingRecords, addBreedingRecord, updateBreedingStatus, deleteBreedingRecord,
    healthRecords, addHealthRecord, deleteHealthRecord 
  } = useFarm();

  const [activeTab, setActiveTab] = useState<'register' | 'breeding' | 'pregnancy' | 'vaccine' | 'deworming'>('register');
  const [showModal, setShowModal] = useState(false);

  // Forms State
  const [newAnimal, setNewAnimal] = useState<Partial<FarmAnimal>>({ type: 'Cow', gender: 'Female' });
  const [newBreeding, setNewBreeding] = useState<Partial<BreedingRecord>>({ method: 'AI', pregnancyStatus: 'Suspected' });
  const [newHealth, setNewHealth] = useState<Partial<HealthRecord>>({});
  const [newObservation, setNewObservation] = useState('');

  // Editing logic for observation
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);

  // --- HELPERS ---

  const calculateDeliveryDate = (dateStr: string, type: string) => {
    const date = new Date(dateStr);
    let daysToAdd = 283; // Cow default
    if (type === 'Buffalo') daysToAdd = 310;
    if (type === 'Goat') daysToAdd = 150;
    if (type === 'Sheep') daysToAdd = 147;
    if (type === 'Camel') daysToAdd = 390;

    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
  };

  const getDaysRemaining = (targetDate: string) => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days;
  };

  const getProgressStats = (matingDate: string, expectedDate: string) => {
    const start = new Date(matingDate).getTime();
    const end = new Date(expectedDate).getTime();
    const now = new Date().getTime();
    const total = end - start;
    const elapsed = now - start;
    const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
    
    // Calculate months passed
    const monthsPassed = Math.floor(elapsed / (1000 * 3600 * 24 * 30));
    
    return { percent, monthsPassed };
  };

  const getPregnancyAdvice = (type: string, monthsPassed: number) => {
    const isSmallRuminant = type === 'Goat' || type === 'Sheep';
    const totalMonths = isSmallRuminant ? 5 : 10;
    
    // Stages
    const isEarly = monthsPassed < (totalMonths / 3);
    const isMid = monthsPassed >= (totalMonths / 3) && monthsPassed < (totalMonths * 0.7);
    const isLate = monthsPassed >= (totalMonths * 0.7);

    let diet = '';
    let care = '';

    if (isEarly) {
        diet = t('Maintenance diet + Mineral Mixture. No heavy increase needed.', 'برقرار خوراک + منرل مکسچر۔ خوراک میں زیادہ اضافے کی ضرورت نہیں ہے۔');
        care = t('Confirm pregnancy. Avoid stress and long travel.', 'حمل کی تصدیق کریں۔ تناؤ اور لمبے سفر سے گریز کریں۔');
    } else if (isMid) {
        diet = t('Increase green fodder. Add 10-15% more concentrates.', 'سبز چارہ بڑھائیں۔ 10-15 فیصد ونڈا شامل کریں۔');
        care = t('Deworming (consult vet). Update vaccines.', 'ڈورمنگ (ڈاکٹر کے مشورے سے)۔ ویکسین مکمل کریں۔');
    } else if (isLate) {
        diet = t('Steaming Up: High energy diet, low calcium (to prevent milk fever). Add oil/fat.', 'سٹیمنگ اپ: زیادہ طاقت والی خوراک، کم کیلشیم (دودھ کے بخار سے بچاؤ کے لیے)۔ تیل/چکنائی شامل کریں۔');
        care = t('Stop milking (Dry off) if lactating. Prepare calving area. Watch for labor signs.', 'اگر دودھ دے رہی ہے تو خشک کر دیں (چھوڑ دیں)۔ بچے کی پیدائش کی جگہ تیار کریں۔');
    }

    return { diet, care, isLate };
  };

  // --- HANDLERS ---

  const handleAddAnimal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnimal.name || !newAnimal.tagId) return;
    const animal: FarmAnimal = {
      id: Date.now().toString(),
      name: newAnimal.name!,
      tagId: newAnimal.tagId!,
      type: newAnimal.type as any,
      breed: newAnimal.breed || 'Unknown',
      gender: newAnimal.gender as any,
      dob: newAnimal.dob || '',
      image: newAnimal.image,
    };
    addAnimal(animal);
    setShowModal(false);
    setNewAnimal({ type: 'Cow', gender: 'Female' });
  };

  const handleAddBreeding = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBreeding.animalId || !newBreeding.matingDate) return;
    
    const selectedAnimal = animals.find(a => a.id === newBreeding.animalId);
    if (!selectedAnimal) return;

    const expected = calculateDeliveryDate(newBreeding.matingDate, selectedAnimal.type);

    const record: BreedingRecord = {
      id: Date.now().toString(),
      animalId: newBreeding.animalId,
      animalName: selectedAnimal.name,
      matingDate: newBreeding.matingDate,
      method: newBreeding.method as any,
      expectedDate: expected,
      status: 'In Progress',
      pregnancyStatus: newBreeding.pregnancyStatus,
      sireName: newBreeding.sireName,
      technician: newBreeding.technician,
      notes: newBreeding.notes,
      observations: []
    };
    addBreedingRecord(record);
    setShowModal(false);
    setNewBreeding({ method: 'AI', pregnancyStatus: 'Suspected' });
  };

  const handleAddObservation = (recordId: string) => {
    if(!newObservation.trim()) return;
    // We need to update the record in context. For now, since context doesn't have a granular update method for observations
    // we will simulate it by removing and re-adding or we would normally add a specialized method in context.
    // To keep it simple without changing Context excessively, I'll rely on the existing updateBreedingStatus logic or just accept it's a demo limitation.
    // However, to make it work, let's just assume we can mutate the local state or add a specific context method.
    // A better approach for this demo:
    const record = breedingRecords.find(r => r.id === recordId);
    if(record) {
        const updatedRecord = { 
            ...record, 
            observations: [...(record.observations || []), { 
                id: Date.now().toString(), 
                date: new Date().toISOString().split('T')[0], 
                text: newObservation 
            }] 
        };
        // This is a hacky update using delete/add, in production use updateRecord(id, data)
        deleteBreedingRecord(recordId);
        addBreedingRecord(updatedRecord);
        setNewObservation('');
        setSelectedRecordId(null);
    }
  };

  const handleAddHealth = (type: 'Vaccination' | 'Deworming') => (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHealth.animalId || !newHealth.date || !newHealth.medicine) return;

    const selectedAnimal = animals.find(a => a.id === newHealth.animalId);
    if (!selectedAnimal) return;

    const record: HealthRecord = {
      id: Date.now().toString(),
      animalId: newHealth.animalId,
      animalName: selectedAnimal.name,
      type: type,
      date: newHealth.date,
      medicine: newHealth.medicine,
      nextDueDate: newHealth.nextDueDate
    };
    addHealthRecord(record);
    setShowModal(false);
    setNewHealth({});
  };

  // --- SUB-COMPONENTS ---

  const TabButton = ({ id, label, icon: Icon }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 py-3 px-1 md:px-4 text-xs md:text-sm font-bold border-b-4 transition-colors flex flex-col md:flex-row items-center justify-center gap-2
        ${activeTab === id ? 'border-primary text-primary bg-green-50' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
           <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <Warehouse className="mr-3 text-primary" size={32}/>
              {t('My Dairy Farm', 'میرا ڈیری فارم')}
           </h1>
           <p className="text-gray-500 mt-1">
             {t('Manage records, breeding, and health schedules.', 'ریکارڈ، بریڈنگ اور صحت کے شیڈول کا انتظام کریں۔')}
           </p>
        </div>
        <button 
            onClick={() => setShowModal(true)}
            className="bg-primary hover:bg-green-800 text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg transition-transform active:scale-95"
        >
            <Plus size={20} className={language === 'ur' ? 'ml-2' : 'mr-2'} />
            {t('Add New Record', 'نیا ریکارڈ شامل کریں')}
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-200 overflow-x-auto">
            <TabButton id="register" label={t('Register', 'رجسٹر')} icon={FileText} />
            <TabButton id="breeding" label={t('Breeding', 'بریڈنگ')} icon={User} />
            <TabButton id="pregnancy" label={t('Pregnancy', 'حمل ٹریکر')} icon={Baby} />
            <TabButton id="vaccine" label={t('Vaccine', 'ویکسین')} icon={Syringe} />
            <TabButton id="deworming" label={t('Deworming', 'ڈورمنگ')} icon={Pill} />
        </div>

        <div className="p-4 md:p-6 min-h-[400px] bg-gray-50/50">
            {/* ANIMAL REGISTER TAB */}
            {activeTab === 'register' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {animals.length === 0 ? (
                        <div className="col-span-full text-center py-10 text-gray-400">
                            <Warehouse size={48} className="mx-auto mb-4 opacity-30" />
                            <p>{t('No animals registered yet.', 'ابھی تک کوئی جانور رجسٹرڈ نہیں ہے۔')}</p>
                        </div>
                    ) : (
                        animals.map(animal => (
                            <div key={animal.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-white relative group">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl shadow-inner">
                                            {animal.type === 'Cow' ? '🐄' : animal.type === 'Buffalo' ? '🐃' : animal.type === 'Camel' ? '🐫' : '🐐'}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800">{animal.name}</h3>
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">ID: {animal.tagId}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => deleteAnimal(animal.id)} className="text-red-300 hover:text-red-500">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="space-y-1 text-sm text-gray-600">
                                    <div className="flex justify-between"><span>{t('Breed:', 'نسل:')}</span> <span className="font-medium">{animal.breed}</span></div>
                                    <div className="flex justify-between"><span>{t('Gender:', 'جنس:')}</span> <span className="font-medium">{animal.gender}</span></div>
                                    <div className="flex justify-between"><span>{t('DOB:', 'تاریخ پیدائش:')}</span> <span className="font-medium">{animal.dob || '-'}</span></div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* PREGNANCY TRACKER TAB */}
            {activeTab === 'pregnancy' && (
                <div className="space-y-6">
                    {breedingRecords.filter(r => r.status === 'In Progress').length === 0 ? (
                        <div className="text-center py-12 text-gray-400 bg-white rounded-2xl border border-dashed">
                            <Baby size={48} className="mx-auto mb-3 opacity-30" />
                            <p>{t('No active pregnancies.', 'کوئی فعال حمل موجود نہیں ہے۔')}</p>
                            <button onClick={() => { setShowModal(true); setActiveTab('breeding'); }} className="text-primary font-bold mt-2 hover:underline">
                                {t('Add Breeding Record', 'بریڈنگ ریکارڈ شامل کریں')}
                            </button>
                        </div>
                    ) : (
                        breedingRecords.filter(r => r.status === 'In Progress').map(record => {
                            const animal = animals.find(a => a.id === record.animalId);
                            const daysLeft = getDaysRemaining(record.expectedDate);
                            const { percent, monthsPassed } = getProgressStats(record.matingDate, record.expectedDate);
                            const advice = animal ? getPregnancyAdvice(animal.type, monthsPassed) : { diet: '', care: '', isLate: false };
                            const animalVaccines = healthRecords.filter(h => h.animalId === record.animalId).slice(-3); // Last 3

                            return (
                                <div key={record.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                                    {/* Card Header */}
                                    <div className="bg-white p-5 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-pink-50 text-pink-600 rounded-full">
                                                <Baby size={28} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
                                                    {record.animalName}
                                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${
                                                        record.pregnancyStatus === 'Confirmed' ? 'bg-green-100 text-green-700 border-green-200' : 
                                                        record.pregnancyStatus === 'Suspected' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                        {record.pregnancyStatus}
                                                    </span>
                                                </h3>
                                                <div className="text-sm text-gray-500 flex gap-3 mt-1">
                                                     <span className="flex items-center gap-1"><Calendar size={14}/> Due: {record.expectedDate}</span>
                                                     <span className="flex items-center gap-1 font-medium text-pink-600"><Clock size={14}/> {daysLeft} Days Left</span>
                                                </div>
                                            </div>
                                        </div>
                                        {advice.isLate && (
                                            <div className="bg-red-50 text-red-700 px-3 py-1 rounded-lg text-sm font-bold flex items-center animate-pulse">
                                                <AlertCircle size={16} className="mr-2" />
                                                {t('Critical Care Needed', 'نگہداشت کی اشد ضرورت')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        
                                        {/* Left: Progress & Breeding Info */}
                                        <div className="space-y-6">
                                            <div>
                                                <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                                                    <span>{t('Gestation Progress', 'حمل کا دورانیہ')}</span>
                                                    <span>{Math.round(percent)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-3">
                                                    <div className="bg-pink-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${percent}%` }}></div>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1 text-center">{monthsPassed} {t('months passed', 'ماہ گزر گئے')}</p>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                                    <span className="text-gray-500">{t('Mating Date', 'ملاپ کی تاریخ')}</span>
                                                    <span className="font-medium">{record.matingDate}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                                    <span className="text-gray-500">{t('Method', 'طریقہ')}</span>
                                                    <span className="font-medium">{record.method}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                                    <span className="text-gray-500">{t('Sire/Bull', 'سانڈ')}</span>
                                                    <span className="font-medium">{record.sireName || '-'}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">{t('Technician', 'ڈاکٹر')}</span>
                                                    <span className="font-medium">{record.technician || '-'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Middle: Health & Nutrition Guide */}
                                        <div className="lg:col-span-2 space-y-6">
                                             <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                                    <h4 className="font-bold text-green-800 flex items-center mb-2">
                                                        <Droplet size={18} className="mr-2"/> {t('Nutrition & Diet', 'خوراک اور غذا')}
                                                    </h4>
                                                    <p className="text-sm text-green-700 leading-relaxed">{advice.diet}</p>
                                                </div>
                                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                                    <h4 className="font-bold text-blue-800 flex items-center mb-2">
                                                        <HeartPulse size={18} className="mr-2"/> {t('Health & Care', 'صحت اور دیکھ بھال')}
                                                    </h4>
                                                    <p className="text-sm text-blue-700 leading-relaxed">{advice.care}</p>
                                                </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-4">
                                                {/* Recent Vaccines */}
                                                <div className="border border-gray-100 rounded-xl p-4">
                                                    <h5 className="font-bold text-gray-700 mb-3 flex items-center text-sm">
                                                        <Syringe size={16} className="mr-2"/> {t('Recent Health Records', 'حالیہ صحت ریکارڈ')}
                                                    </h5>
                                                    {animalVaccines.length > 0 ? (
                                                        <ul className="space-y-2">
                                                            {animalVaccines.map(v => (
                                                                <li key={v.id} className="text-xs flex justify-between bg-gray-50 p-2 rounded">
                                                                    <span className="font-medium">{v.medicine}</span>
                                                                    <span className="text-gray-500">{v.date}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className="text-xs text-gray-400 italic">{t('No recent records.', 'کوئی حالیہ ریکارڈ نہیں')}</p>
                                                    )}
                                                </div>

                                                {/* Notes / Observations */}
                                                <div className="border border-gray-100 rounded-xl p-4 flex flex-col">
                                                    <h5 className="font-bold text-gray-700 mb-3 flex items-center text-sm">
                                                        <FileText size={16} className="mr-2"/> {t('Observations', 'مشاہدات')}
                                                    </h5>
                                                    <div className="flex-1 overflow-y-auto max-h-[100px] space-y-2 mb-2 custom-scrollbar">
                                                        {record.observations?.map((obs, idx) => (
                                                            <div key={idx} className="text-xs bg-yellow-50 p-2 rounded border-l-2 border-yellow-400">
                                                                <span className="block text-gray-400 text-[10px]">{obs.date}</span>
                                                                {obs.text}
                                                            </div>
                                                        ))}
                                                        {(!record.observations || record.observations.length === 0) && (
                                                            <p className="text-xs text-gray-400 italic">{t('No notes added.', 'کوئی نوٹ شامل نہیں کیا گیا۔')}</p>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-2 mt-auto">
                                                        <input 
                                                            type="text" 
                                                            placeholder={t('Add note...', 'نوٹ لکھیں...')}
                                                            className="flex-1 text-xs border rounded p-1"
                                                            value={selectedRecordId === record.id ? newObservation : ''}
                                                            onChange={(e) => { setSelectedRecordId(record.id); setNewObservation(e.target.value); }}
                                                            onFocus={() => setSelectedRecordId(record.id)}
                                                        />
                                                        <button 
                                                            onClick={() => handleAddObservation(record.id)}
                                                            className="bg-primary text-white p-1.5 rounded"
                                                            disabled={selectedRecordId !== record.id || !newObservation}
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
                                    </div>
                                    
                                    {/* Footer Actions */}
                                    <div className="bg-gray-50 p-3 border-t border-gray-100 flex justify-end gap-3">
                                         <button 
                                            onClick={() => updateBreedingStatus(record.id, 'Completed')}
                                            className="text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg font-bold flex items-center hover:bg-green-700"
                                         >
                                            <Baby size={16} className="mr-1.5" /> {t('Record Delivery', 'پیدائش درج کریں')}
                                         </button>
                                         <button 
                                            onClick={() => updateBreedingStatus(record.id, 'Failed')}
                                            className="text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-lg font-bold hover:bg-red-200"
                                         >
                                            {t('Failed/Aborted', 'ناکام/اسقاط')}
                                         </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            )}

            {/* BREEDING TAB (Simplified view) */}
            {activeTab === 'breeding' && (
                <div className="space-y-4">
                     <div className="bg-blue-50 p-4 rounded-xl flex items-center text-blue-800 text-sm mb-4">
                        <Activity className="mr-2" size={18}/>
                        {t('Switch to "Pregnancy Tracker" tab for detailed monitoring.', 'تفصیلی نگرانی کے لیے "حمل ٹریکر" ٹیب پر جائیں۔')}
                     </div>
                     {breedingRecords.map(record => (
                        <div key={record.id} className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-sm">
                            <div className="flex items-center gap-4 mb-3 md:mb-0 w-full md:w-auto">
                                <div className={`p-3 rounded-full ${record.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{record.animalName}</h4>
                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                        <span>{record.matingDate}</span>
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        <span>{record.method}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    record.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                    record.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                                }`}>
                                    {record.status === 'In Progress' ? t('Pregnant', 'حاملہ') : record.status}
                                </span>
                                <button onClick={() => deleteBreedingRecord(record.id)} className="text-gray-300 hover:text-red-500">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                     ))}
                </div>
            )}

            {/* VACCINE & DEWORMING TAB (Shared Layout) */}
            {(activeTab === 'vaccine' || activeTab === 'deworming') && (
                <div className="space-y-4">
                    {healthRecords.filter(r => r.type === (activeTab === 'vaccine' ? 'Vaccination' : 'Deworming')).map(record => (
                        <div key={record.id} className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${activeTab === 'vaccine' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                                    {activeTab === 'vaccine' ? <Syringe size={24} /> : <Pill size={24} />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{record.animalName}</h4>
                                    <div className="text-sm text-gray-500">
                                        <span className="font-medium text-gray-700">{record.medicine}</span>
                                        <span className="mx-2">•</span>
                                        <span>{record.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-4">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">{t('Next Due', 'اگلی تاریخ')}</span>
                                    <span className="font-medium text-gray-800">{record.nextDueDate || '-'}</span>
                                </div>
                                <button onClick={() => deleteHealthRecord(record.id)} className="text-gray-300 hover:text-red-500">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                    {healthRecords.filter(r => r.type === (activeTab === 'vaccine' ? 'Vaccination' : 'Deworming')).length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            <p>{t('No records found.', 'کوئی ریکارڈ موجود نہیں ہے۔')}</p>
                        </div>
                     )}
                </div>
            )}
        </div>
      </div>

      {/* MODAL FOR ADDING RECORDS */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="bg-primary p-4 text-white flex justify-between items-center sticky top-0 z-10">
                    <h3 className="font-bold text-lg">
                        {activeTab === 'register' && t('Add New Animal', 'نیا جانور شامل کریں')}
                        {(activeTab === 'breeding' || activeTab === 'pregnancy') && t('Add Breeding/Pregnancy', 'بریڈنگ ریکارڈ')}
                        {activeTab === 'vaccine' && t('Add Vaccination', 'ویکسینیشن ریکارڈ')}
                        {activeTab === 'deworming' && t('Add Deworming', 'ڈورمنگ ریکارڈ')}
                    </h3>
                    <button onClick={() => setShowModal(false)} className="hover:bg-white/20 p-1 rounded-full"><Trash2 size={20} className="rotate-45" /></button>
                </div>
                
                <div className="p-6">
                    {activeTab === 'register' && (
                        <form onSubmit={handleAddAnimal} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{t('Name', 'نام')}</label>
                                <input type="text" required className="w-full p-2 border rounded-lg" 
                                    value={newAnimal.name || ''} onChange={e => setNewAnimal({...newAnimal, name: e.target.value})} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Tag ID', 'ٹیگ نمبر')}</label>
                                    <input type="text" required className="w-full p-2 border rounded-lg" 
                                        value={newAnimal.tagId || ''} onChange={e => setNewAnimal({...newAnimal, tagId: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Type', 'قسم')}</label>
                                    <select className="w-full p-2 border rounded-lg" 
                                        value={newAnimal.type} onChange={e => setNewAnimal({...newAnimal, type: e.target.value as any})}>
                                        <option value="Cow">Cow</option>
                                        <option value="Buffalo">Buffalo</option>
                                        <option value="Goat">Goat</option>
                                        <option value="Sheep">Sheep</option>
                                        <option value="Camel">Camel</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Breed', 'نسل')}</label>
                                    <input type="text" className="w-full p-2 border rounded-lg" 
                                        value={newAnimal.breed || ''} onChange={e => setNewAnimal({...newAnimal, breed: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Date of Birth', 'تاریخ پیدائش')}</label>
                                    <input type="date" className="w-full p-2 border rounded-lg" 
                                        value={newAnimal.dob || ''} onChange={e => setNewAnimal({...newAnimal, dob: e.target.value})} />
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-4">{t('Save Animal', 'محفوظ کریں')}</button>
                        </form>
                    )}

                    {(activeTab === 'breeding' || activeTab === 'pregnancy') && (
                        <form onSubmit={handleAddBreeding} className="space-y-4">
                             <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{t('Select Animal', 'جانور منتخب کریں')}</label>
                                <select required className="w-full p-2 border rounded-lg" 
                                    value={newBreeding.animalId || ''} onChange={e => setNewBreeding({...newBreeding, animalId: e.target.value})}>
                                    <option value="">{t('Select...', 'منتخب کریں...')}</option>
                                    {animals.filter(a => a.gender === 'Female').map(a => (
                                        <option key={a.id} value={a.id}>{a.name} ({a.tagId})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Mating Date', 'ملاپ کی تاریخ')}</label>
                                    <input type="date" required className="w-full p-2 border rounded-lg" 
                                        value={newBreeding.matingDate || ''} onChange={e => setNewBreeding({...newBreeding, matingDate: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Method', 'طریقہ')}</label>
                                    <select className="w-full p-2 border rounded-lg" 
                                        value={newBreeding.method} onChange={e => setNewBreeding({...newBreeding, method: e.target.value as any})}>
                                        <option value="AI">Artificial Insemination (AI)</option>
                                        <option value="Natural">Natural Mating</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Sire/Bull Name', 'سانڈ کا نام')}</label>
                                    <input type="text" className="w-full p-2 border rounded-lg" 
                                        value={newBreeding.sireName || ''} onChange={e => setNewBreeding({...newBreeding, sireName: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Technician', 'ڈاکٹر/ٹیکنیشن')}</label>
                                    <input type="text" className="w-full p-2 border rounded-lg" 
                                        value={newBreeding.technician || ''} onChange={e => setNewBreeding({...newBreeding, technician: e.target.value})} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{t('Pregnancy Status', 'حمل کی حالت')}</label>
                                <select className="w-full p-2 border rounded-lg bg-green-50" 
                                    value={newBreeding.pregnancyStatus} onChange={e => setNewBreeding({...newBreeding, pregnancyStatus: e.target.value as any})}>
                                    <option value="Suspected">{t('Suspected (Not confirmed yet)', 'مشکوک (تصدیق نہیں ہوئی)')}</option>
                                    <option value="Confirmed">{t('Confirmed', 'تصدیق شدہ')}</option>
                                    <option value="Not Confirmed">{t('Not Confirmed / Failed', 'تصدیق نہیں ہوئی')}</option>
                                </select>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-4">{t('Start Tracking', 'ٹریکنگ شروع کریں')}</button>
                        </form>
                    )}

                    {(activeTab === 'vaccine' || activeTab === 'deworming') && (
                        <form onSubmit={handleAddHealth(activeTab === 'vaccine' ? 'Vaccination' : 'Deworming')} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{t('Select Animal', 'جانور منتخب کریں')}</label>
                                <select required className="w-full p-2 border rounded-lg" 
                                    value={newHealth.animalId || ''} onChange={e => setNewHealth({...newHealth, animalId: e.target.value})}>
                                    <option value="">{t('Select...', 'منتخب کریں...')}</option>
                                    {animals.map(a => (
                                        <option key={a.id} value={a.id}>{a.name} ({a.tagId})</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{t('Medicine / Vaccine Name', 'دوا / ویکسین کا نام')}</label>
                                <input type="text" required className="w-full p-2 border rounded-lg" 
                                    value={newHealth.medicine || ''} onChange={e => setNewHealth({...newHealth, medicine: e.target.value})} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Date Given', 'تاریخ')}</label>
                                    <input type="date" required className="w-full p-2 border rounded-lg" 
                                        value={newHealth.date || ''} onChange={e => setNewHealth({...newHealth, date: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('Next Due Date', 'اگلی تاریخ')}</label>
                                    <input type="date" className="w-full p-2 border rounded-lg" 
                                        value={newHealth.nextDueDate || ''} onChange={e => setNewHealth({...newHealth, nextDueDate: e.target.value})} />
                                </div>
                            </div>
                             <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-4">{t('Save Record', 'ریکارڈ محفوظ کریں')}</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default FarmDashboard;