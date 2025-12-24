import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    ClipboardList, Stethoscope, Utensils, BookOpen, Activity, Sprout, 
    Calendar, Clock, CloudSun, Warehouse, CalendarCheck, Pill 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFarm } from '../context/FarmContext';
import { getBikramiDate } from '../utils/dateUtils';

const Home: React.FC = () => {
  const { t, role, language } = useLanguage();
  const { calendarSettings, location } = useFarm();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temperature, setTemperature] = useState<number | null>(null);
  const [dateMode, setDateMode] = useState<'all' | 'gregorian' | 'desi'>('all');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location) {
        const fetchWeather = async () => {
             try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current_weather=true`
                );
                const data = await response.json();
                if (data.current_weather) {
                    setTemperature(data.current_weather.temperature);
                }
             } catch (error) {
                 console.error("Weather fetch failed:", error);
             }
        }
        fetchWeather();
    }
  }, [location]);

  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'long' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  
  const locale = language === 'ur' ? 'ur-PK' : 'en-US';
  const formattedDate = new Intl.DateTimeFormat(locale, dateOptions).format(currentTime);
  const formattedTime = new Intl.DateTimeFormat(locale, timeOptions).format(currentTime);

  const bikrami = getBikramiDate(currentTime, calendarSettings.desiOffset);
  const bikramiString = language === 'ur' 
    ? `${bikrami.day} ${bikrami.monthUr}، ${bikrami.year} ب`
    : `${bikrami.day} ${bikrami.monthEn}, ${bikrami.year} BK`;

  const toggleDateMode = () => {
    if (dateMode === 'all') setDateMode('gregorian');
    else if (dateMode === 'gregorian') setDateMode('desi');
    else setDateMode('all');
  };

  const features = [
    {
      to: '/farm',
      icon: Warehouse,
      titleEn: 'My Dairy Farm',
      titleUr: 'میرا ڈیری فارم',
      descEn: 'Manage livestock records and breeding.',
      descUr: 'لائیو اسٹاک ریکارڈ اور بریڈنگ کا انتظام کریں۔',
      color: 'bg-indigo-100 text-indigo-700',
    },
    {
      to: '/calendar',
      icon: CalendarCheck,
      titleEn: 'Farm Calendar',
      titleUr: 'فارم کیلنڈر',
      descEn: 'Track vaccinations and farm tasks.',
      descUr: 'ویکسینیشن اور فارم کے کاموں کا ریکارڈ رکھیں۔',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      to: '/health',
      icon: Stethoscope,
      titleEn: 'Disease Diagnosis',
      titleUr: 'بیماری کی تشخیص',
      descEn: 'Browse diseases or check symptoms.',
      descUr: 'بیماریاں دیکھیں یا علامات چیک کریں۔',
      color: 'bg-red-100 text-red-700',
    },
    {
      to: '/medicines',
      icon: Pill,
      titleEn: 'Veterinary Medicines',
      titleUr: 'ویٹرنری ادویات',
      descEn: 'Salts, usage and medicine library.',
      descUr: 'ادویات کے سالٹس، استعمال اور لائبریری۔',
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      to: '/feed',
      icon: Utensils,
      titleEn: 'Feed Calculator',
      titleUr: 'فیڈ کیلکولیٹر',
      descEn: 'Plan optimal diet for your animals.',
      descUr: 'جانوروں کے لیے بہترین خوراک کا منصوبہ بنائیں۔',
      color: 'bg-green-100 text-green-700',
    },
    {
      to: '/fodder',
      icon: Sprout,
      titleEn: 'Fodder Library',
      titleUr: 'چارہ لائبریری',
      descEn: 'Feeds, nutrition, and usage guides.',
      descUr: 'مویشیوں کی خوراک اور غذائیت کی تفصیل۔',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      to: '/breeds',
      icon: ClipboardList,
      titleEn: 'Breeds Database',
      titleUr: 'نسلوں کا ڈیٹا بیس',
      descEn: 'Identify and learn about breeds.',
      descUr: 'جانوروں کی نسلیں اور ان کی تفصیلات تلاش کریں۔',
      color: 'bg-amber-100 text-amber-700',
    },
    {
      to: '/guides',
      icon: BookOpen,
      titleEn: 'Farming Guides',
      titleUr: 'فارمنگ گائیڈز',
      descEn: 'Schedules and farming practices.',
      descUr: 'ویکسینیشن شیڈول اور فارمنگ کے بہترین طریقے۔',
      color: 'bg-sky-100 text-sky-700',
    },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl shadow-sm p-4 md:p-10 border border-gray-100 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
            <div className="z-10 w-full md:w-auto">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
                {t('PashuCare AI Assistant', 'پشو کیئر AI اسسٹنٹ')}
                </h1>
                <p className="text-primary text-sm md:text-base font-semibold mb-2 md:mb-4 capitalize">
                    {t(`Mode: ${role}`, `موڈ: ${role === 'farmer' ? 'کسان' : role === 'vet' ? 'ڈاکٹر' : 'ورکر'}`)}
                </p>
                <p className="text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                  {t(
                    'Your comprehensive veterinary reference. Diagnose diseases, understand medicines, and manage your dairy farm with precision.',
                    'آپ کا جامع ویٹرنری حوالہ۔ بیماریوں کی تشخیص کریں، ادویات کو سمجھیں اور فارم کا ریکارڈ درست رکھیں۔'
                  )}
                </p>
            </div>
            <div className="shrink-0 flex items-center gap-3 bg-white/50 backdrop-blur-sm p-2.5 md:p-3 rounded-2xl border border-gray-100 shadow-sm w-full md:w-auto justify-between md:justify-start">
               <div 
                  className="flex flex-col items-end pr-4 border-r border-gray-200 cursor-pointer select-none"
                  onClick={toggleDateMode}
               >
                  {(dateMode === 'all' || dateMode === 'gregorian') && (
                    <div className="flex items-center gap-2 text-gray-800 font-bold text-[13px] md:text-sm">
                      <Calendar size={15} className="text-primary"/>
                      {formattedDate}
                    </div>
                  )}
                  {(dateMode === 'all' || dateMode === 'desi') && (
                    <div className="flex items-center gap-2 text-gray-500 font-semibold text-[11px] md:text-xs mt-1">
                      <Activity size={13} className="text-secondary"/>
                      {bikramiString}
                    </div>
                  )}
               </div>
               <div className="flex flex-col items-start pl-1">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-[13px] md:text-sm">
                    <Clock size={15} className="text-primary"/>
                    {formattedTime}
                  </div>
                  {temperature !== null && (
                    <div className="flex items-center gap-2 text-primary font-extrabold text-[11px] md:text-xs mt-1">
                        <CloudSun size={15} />
                        {temperature}°C
                    </div>
                  )}
               </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -mr-32 -mt-32 z-0 opacity-50"></div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.to}
            className="group bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start min-h-[140px] md:h-48"
          >
            <div className={`p-2.5 md:p-3 rounded-xl ${feature.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon size={22} className="md:w-7 md:h-7" />
            </div>
            <h2 className="text-sm md:text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-1 line-clamp-2 leading-tight">
              {language === 'en' ? feature.titleEn : feature.titleUr}
            </h2>
            <p className="text-[10px] md:text-sm text-gray-500 line-clamp-2 leading-snug">
              {language === 'en' ? feature.descEn : feature.descUr}
            </p>
          </Link>
        ))}
      </div>

      <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="relative z-10 md:max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-4 border border-white/20">
            <Activity size={12} className="text-accent" />
            <span className="tracking-wider uppercase">{t('New Update', 'نئی اپ ڈیٹ')}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{t('Professional Veterinary Help', 'پروفیشنل ویٹرنری مدد')}</h2>
          <p className="mb-8 text-indigo-50 text-sm md:text-base leading-relaxed opacity-90">
            {t(
              'Our new Veterinary Medicines library includes detailed salt information and usage guidance for over 50 common livestock conditions. Access professional data instantly.',
              'ہماری نئی ویٹرنری ادویات کی لائبریری میں 50 سے زائد بیماریوں کے لیے سالٹ کی معلومات اور استعمال کی تفصیلات موجود ہیں۔ پروفیشنل ڈیٹا تک فوری رسائی حاصل کریں۔'
            )}
          </p>
          <div className="flex flex-wrap gap-4">
             <Link to="/medicines" className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                <BookOpen size={18} /> {t('Open Library', 'لائبریری دیکھیں')}
             </Link>
             <Link to="/health" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <Stethoscope size={18} /> {t('Diagnose', 'تشخیص کریں')}
             </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 p-4 md:p-10 opacity-10 pointer-events-none">
            <Pill size={280} className="rotate-12 translate-x-20 translate-y-20" />
        </div>
      </section>
    </div>
  );
};

export default Home;