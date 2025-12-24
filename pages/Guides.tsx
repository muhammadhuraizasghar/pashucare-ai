
import React, { useState } from 'react';
import { 
  BookOpen, Search, Syringe, Calendar, ChevronRight, 
  ArrowLeft, Clock, Sun, HeartPulse, Activity, Droplets, Brush,
  Layout, Warehouse, X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getGeneralAdvice } from '../services/gemini';
import { useFarm } from '../context/FarmContext';
import { getBikramiDate } from '../utils/dateUtils';
import ReactMarkdown from 'react-markdown';
import { bodySystems } from '../data/anatomy';
import { BodySystem } from '../types';

const Guides: React.FC = () => {
  const { t, language, role } = useLanguage();
  const { calendarSettings } = useFarm();
  const [view, setView] = useState<'menu' | 'anatomy'>('menu');
  const [selectedSystem, setSelectedSystem] = useState<BodySystem | null>(null);

  const [query, setQuery] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [dateMode, setDateMode] = useState<'gregorian' | 'desi'>('gregorian');

  const bikrami = getBikramiDate(new Date(), calendarSettings.desiOffset);
  const formattedDate = new Intl.DateTimeFormat(language === 'ur' ? 'ur-PK' : 'en-US', { day: 'numeric', month: 'short' }).format(new Date());
  const bikramiString = language === 'ur' ? `${bikrami.day} ${bikrami.monthUr}` : `${bikrami.day} ${bikrami.monthEn}`;

  const fetchGuide = async (prompt: string) => {
    setLoading(true);
    setContent('');
    try {
        const text = await getGeneralAdvice(prompt, language, role);
        setContent(text);
    } catch (e) { setContent("Error loading guide."); }
    finally { setLoading(false); }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if(query.trim()) fetchGuide(query);
  }

  const menuItems = [
      { id: 'anatomy', icon: Layout, labelEn: 'Animal Body Systems', labelUr: 'جانوروں کا جسمانی نظام', color: 'bg-indigo-100 text-indigo-700', descEn: 'Organs & Functions', descUr: 'اعضاء اور افعال' },
      { id: 'vaccination', icon: Syringe, labelEn: 'Vaccination Schedule', labelUr: 'ویکسینیشن کا شیڈول', color: 'bg-green-100 text-green-700', descEn: 'Timetable & Doses', descUr: 'وقت اور خوراک' },
      { id: 'seasonal', icon: Sun, labelEn: 'Seasonal Care', labelUr: 'موسمی دیکھ بھال', color: 'bg-orange-100 text-orange-700', descEn: 'Winter & Summer tips', descUr: 'سردی اور گرمی' },
      { id: 'emergency', icon: HeartPulse, labelEn: 'Emergency / First Aid', labelUr: 'ہنگامی امداد', color: 'bg-red-100 text-red-700', descEn: 'Quick actions', descUr: 'فوری اقدامات' },
      { id: 'breeding', icon: Activity, labelEn: 'Breeding Guide', labelUr: 'بریڈنگ گائیڈ', color: 'bg-pink-100 text-pink-700', descEn: 'Heat signs & Mating', descUr: 'ہیٹ اور ملاپ' },
      { id: 'milk', icon: Droplets, labelEn: 'Milk Production', labelUr: 'دودھ کی پیداوار', color: 'bg-blue-100 text-blue-700', descEn: 'Nutrition & Hygiene', descUr: 'خوراک اور صفائی' },
      { id: 'cleaning', icon: Brush, labelEn: 'Shed Cleaning', labelUr: 'شیڈ کی صفائی', color: 'bg-teal-100 text-teal-700', descEn: 'Hygiene Practices', descUr: 'صفائی کے طریقے' },
      { id: 'management', icon: Warehouse, labelEn: 'Shed Management', labelUr: 'شیڈ کا انتظام', color: 'bg-stone-100 text-stone-700', descEn: 'Ventilation & Flooring', descUr: 'ہواداری اور فرش' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
           <h2 className="text-3xl font-bold text-gray-800">{t('Farming Guides', 'فارمنگ گائیڈز')}</h2>
           <p className="text-gray-500 mt-1">{t('Expert advice and biological references.', 'ماہرانہ مشورے اور حیاتیاتی حوالہ جات۔')}</p>
        </div>
        <div 
            className="flex items-center gap-4 bg-gray-50 px-5 py-2.5 rounded-2xl border border-gray-200 cursor-pointer hover:bg-gray-100 transition shadow-sm"
            onClick={() => setDateMode(dateMode === 'gregorian' ? 'desi' : 'gregorian')}
        >
            <Calendar size={20} className="text-primary"/>
            <div className="flex flex-col items-end">
                <span className="font-bold text-gray-800 text-sm">{dateMode === 'desi' ? bikramiString : formattedDate}</span>
                <span className="text-[10px] text-gray-400">{dateMode === 'desi' ? formattedDate : bikramiString}</span>
            </div>
        </div>
      </div>

      {view === 'menu' && (
        <form onSubmit={handleSearch} className="relative">
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('Ask AI something...', 'AI سے کچھ پوچھیں...')}
                className="w-full p-5 pl-14 rounded-3xl border border-gray-200 focus:ring-2 focus:ring-primary shadow-xl outline-none"
            />
            <Search className="absolute left-5 top-5 text-gray-400" size={24} />
            {query && <button type="submit" className="absolute right-5 top-4 bg-primary text-white px-6 py-2 rounded-2xl font-bold shadow-md hover:bg-green-800 transition">{t('Ask', 'پوچھیں')}</button>}
        </form>
      )}

      {view !== 'menu' && !selectedSystem && (
         <button onClick={() => { setView('menu'); setContent(''); }} className="flex items-center text-gray-500 hover:text-primary font-bold transition">
             <ArrowLeft size={20} className={language === 'ur' ? 'ml-2' : 'mr-2'} />
             {t('Back to Topics', 'واپس جائیں')}
         </button>
      )}

      {content ? (
         <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 min-h-[400px] animate-fadeIn">
            {loading ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-6">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-400 font-medium">{t('Generating...', 'تیار کیا جا رہا ہے...')}</p>
                </div>
            ) : (
                <article className="prose prose-green max-w-none">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">{query}</h3>
                    <ReactMarkdown className="text-gray-700 leading-relaxed">{content}</ReactMarkdown>
                </article>
            )}
         </div>
      ) : (
          <>
            {view === 'menu' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
                    {menuItems.map((item) => (
                        <button 
                            key={item.id} 
                            onClick={() => {
                                if (item.id === 'anatomy') setView('anatomy');
                                else {
                                  const prompt = language === 'en' ? `Explain ${item.labelEn} in detail with practical tips.` : `${item.labelUr} کے بارے میں تفصیل سے بتائیں۔`;
                                  setQuery(language === 'en' ? item.labelEn : item.labelUr);
                                  fetchGuide(prompt);
                                }
                            }}
                            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-between h-44 group"
                        >
                            <div className={`p-4 rounded-2xl w-fit ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                <item.icon size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">{language === 'en' ? item.labelEn : item.labelUr}</h3>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{language === 'en' ? item.descEn : item.descUr}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
            
            {view === 'anatomy' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                    {bodySystems.map(system => (
                         <div 
                            key={system.id} 
                            onClick={() => setSelectedSystem(system)}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all"
                         >
                            <h3 className="font-bold text-xl text-gray-800">{language === 'en' ? system.titleEn : system.titleUr}</h3>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{language === 'en' ? system.en.overview : system.ur.overview}</p>
                            <div className="mt-4 flex justify-end text-primary font-bold text-sm items-center gap-1">
                                {t('Learn More', 'مزید جانیں')} <ChevronRight size={16}/>
                            </div>
                         </div>
                    ))}
                </div>
            )}
          </>
      )}
      
      {selectedSystem && (
         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedSystem(null)}>
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="bg-primary p-6 text-white flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{language === 'en' ? selectedSystem.titleEn : selectedSystem.titleUr}</h3>
                    <button onClick={() => setSelectedSystem(null)} className="p-2 hover:bg-white/10 rounded-full"><X size={24}/></button>
                </div>
                <div className="p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed">{language === 'en' ? selectedSystem.en.overview : selectedSystem.ur.overview}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <section>
                            <h4 className="font-bold text-gray-800 border-b pb-1 mb-2">{t('Main Organs', 'اہم اعضاء')}</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                {(language === 'en' ? selectedSystem.en.organs : selectedSystem.ur.organs).map((o, i) => <li key={i}>{o}</li>)}
                            </ul>
                        </section>
                        <section>
                            <h4 className="font-bold text-gray-800 border-b pb-1 mb-2">{t('Functions', 'افعال')}</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                {(language === 'en' ? selectedSystem.en.functions : selectedSystem.ur.functions).map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </section>
                    </div>
                    <button onClick={() => setSelectedSystem(null)} className="w-full bg-gray-100 py-3 rounded-xl font-bold">{t('Close', 'بند کریں')}</button>
                </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default Guides;
