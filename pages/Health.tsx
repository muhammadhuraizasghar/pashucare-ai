
import React, { useState, useMemo } from 'react';
import { 
  Send, AlertTriangle, ShieldCheck, Activity, Search, 
  AlertCircle, HelpCircle, Stethoscope, ChevronRight, X, CheckCircle, 
  Filter, HeartPulse, Pill, Baby, Syringe, Clipboard, Info, ArrowRight, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { diagnoseSymptoms } from '../services/gemini';
import { DiseaseAnalysis, Disease } from '../types';
import { diseases } from '../data/diseases';

const Health: React.FC = () => {
  const { t, language, role } = useLanguage();
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiseaseAnalysis | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [listSearch, setListSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    setResult(null);
    try {
      const analysis = await diagnoseSymptoms(symptoms, language, role);
      setResult(analysis);
    } catch (error) {
      console.error(error);
      alert(t('Error analyzing symptoms. Please try again.', 'علامات کا تجزیہ کرنے میں خرابی۔ براہ کرم دوبارہ کوشش کریں۔'));
    } finally {
      setLoading(false);
    }
  };

  const getDiseaseInfo = (d: Disease) => language === 'en' ? d.en : d.ur;

  const filteredDiseases = useMemo(() => {
    return diseases.filter(d => {
      const q = listSearch.toLowerCase();
      const matchesSearch = d.nameEn.toLowerCase().includes(q) || d.nameUr.includes(q);
      const matchesCategory = activeCategory === 'All' || d.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [listSearch, activeCategory]);

  const categories = [
    { id: 'All', labelEn: 'All', labelUr: 'تمام', icon: Clipboard },
    { id: 'Infectious', labelEn: 'Infectious', labelUr: 'متعدی', icon: HeartPulse },
    { id: 'Parasitic', labelEn: 'Parasitic', labelUr: 'کرمی/طفیلی', icon: Filter },
    { id: 'DigestiveMetabolic', labelEn: 'Digestive', labelUr: 'معدے/میٹابولک', icon: Pill },
    { id: 'Deficiency', labelEn: 'Deficiency', labelUr: 'غذائی کمی', icon: Syringe },
    { id: 'Reproductive', labelEn: 'Reproductive', labelUr: 'تولیدی', icon: Baby },
    { id: 'Injury', labelEn: 'Injury/Misc', labelUr: 'چوٹیں/متفرق', icon: AlertCircle },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 print:hidden">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <Activity className="mr-2 text-red-500" />
                {t('AI Symptom Checker', 'AI علامات چیکر')}
            </h2>
            <p className="text-gray-500 text-sm">
            {t(
                'Describe symptoms for instant expert AI advice.',
                'فوری ماہرانہ مشورے کے لیے علامات بیان کریں۔'
            )}
            </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px] shadow-inner"
            placeholder={t('Type symptoms here...', 'یہاں علامات لکھیں...')}
          />
          <button
            type="submit"
            disabled={loading || !symptoms.trim()}
            className="w-full bg-primary hover:bg-green-800 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg flex justify-center items-center disabled:opacity-50 active:scale-95"
          >
            {loading ? (
              <span className="animate-pulse">{t('Analyzing...', 'تجزیہ کیا جا رہا ہے...')}</span>
            ) : (
              <>
                <Send size={20} className={language === 'ur' ? 'ml-2' : 'mr-2'} />
                {t('Diagnose with AI', 'AI سے تشخیص کریں')}
              </>
            )}
          </button>
        </form>
      </div>

      {result && (
        <div className="space-y-6 animate-fadeIn bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200">
           <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{t('Potential Diagnoses', 'ممکنہ تشخیص')}</h3>
              <div className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-bold">{t('AI Generated', 'AI کی تیار کردہ')}</div>
           </div>
           <div className="grid gap-4">
              {result.possibleConditions.map((cond, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-primary">{cond.name}</h4>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">{cond.probability}</span>
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed">{cond.description}</p>
                </div>
              ))}
           </div>
        </div>
      )}

      <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-lg"><BookOpen size={24}/></div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{t('Important Diseases', 'اہم بیماریاں')}</h2>
                  <p className="text-gray-500 text-sm">{t('Manual veterinary guide for livestock reference.', 'مویشیوں کے لیے ویٹرنری دستی حوالہ۔')}</p>
                </div>
              </div>
              <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="text"
                    value={listSearch}
                    onChange={(e) => setListSearch(e.target.value)}
                    placeholder={t('Search names...', 'تلاش کریں...')}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary w-full md:w-64 shadow-sm"
                  />
              </div>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
              {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all whitespace-nowrap font-bold text-sm shadow-sm
                        ${activeCategory === cat.id 
                            ? 'bg-primary border-primary text-white' 
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}
                    `}
                  >
                      <cat.icon size={16} />
                      {language === 'en' ? cat.labelEn : cat.labelUr}
                  </button>
              ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDiseases.map((disease) => (
                  <div 
                    key={disease.id}
                    onClick={() => setSelectedDisease(disease)}
                    className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md cursor-pointer transition-all group flex justify-between items-center shadow-sm"
                  >
                      <div className="flex items-center gap-4">
                          <div className={`w-2 h-12 rounded-full ${
                              disease.category === 'Infectious' ? 'bg-red-500' :
                              disease.category === 'Parasitic' ? 'bg-purple-500' :
                              disease.category === 'Deficiency' ? 'bg-green-500' :
                              disease.category === 'Reproductive' ? 'bg-pink-500' :
                              disease.category === 'DigestiveMetabolic' ? 'bg-amber-500' :
                              'bg-blue-500'
                          }`}></div>
                          <div>
                              <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors text-base">
                                  {language === 'en' ? disease.nameEn : disease.nameUr}
                              </h3>
                              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                                  {t(disease.category, disease.category)}
                              </p>
                          </div>
                      </div>
                      <ChevronRight className="text-gray-300 group-hover:text-primary" size={24} />
                  </div>
              ))}
          </div>
      </div>

      {selectedDisease && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedDisease(null)}>
              <div className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                  <div className="bg-primary p-8 text-white sticky top-0 z-10 flex justify-between items-start">
                      <div>
                          <h2 className="text-3xl font-bold mb-1">{language === 'en' ? selectedDisease.nameEn : selectedDisease.nameUr}</h2>
                          <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            {t(selectedDisease.category, selectedDisease.category)}
                          </span>
                      </div>
                      <button onClick={() => setSelectedDisease(null)} className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition">
                          <X size={28} />
                      </button>
                  </div>

                  <div className="p-8 space-y-10">
                      <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <h3 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                              <Info size={22} className="mr-2 text-primary" />
                              {t('Introduction', 'تعارف')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                              {getDiseaseInfo(selectedDisease).introduction}
                          </p>
                      </section>

                      <div className="grid md:grid-cols-2 gap-10">
                          <div>
                              <h3 className="flex items-center font-bold text-amber-600 mb-4 text-xl border-b border-amber-100 pb-2">
                                  <HelpCircle className="mr-2" size={24}/> {t('Causes', 'اسباب')}
                              </h3>
                              <ul className="space-y-3">
                                  {getDiseaseInfo(selectedDisease).causes.map((c, i) => (
                                      <li key={i} className="flex items-start text-gray-700">
                                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 shrink-0"></div>
                                          {c}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                          <div>
                              <h3 className="flex items-center font-bold text-red-600 mb-4 text-xl border-b border-red-100 pb-2">
                                  <AlertCircle className="mr-2" size={24}/> {t('Symptoms', 'علامات')}
                              </h3>
                              <ul className="space-y-3">
                                  {getDiseaseInfo(selectedDisease).symptoms.map((s, i) => (
                                      <li key={i} className="flex items-start text-gray-700">
                                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shrink-0"></div>
                                          {s}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                      <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                          <h3 className="flex items-center font-bold text-blue-700 mb-5 text-xl">
                              <Activity className="mr-2" size={24}/> {t('Immediate Actions', 'فوری اقدامات')}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                              {getDiseaseInfo(selectedDisease).immediateActions.map((action, i) => (
                                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-blue-50 flex items-center gap-3">
                                      <CheckCircle className="text-blue-500 shrink-0" size={20} />
                                      <span className="text-sm font-medium text-gray-700">{action}</span>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <h3 className="flex items-center font-bold text-indigo-700 mb-4 text-xl">
                              <Stethoscope className="mr-2" size={24}/> {t('General Treatment', 'عمومی علاج')}
                          </h3>
                          <ul className="space-y-3 mb-6">
                              {getDiseaseInfo(selectedDisease).generalTreatment.map((tr, i) => (
                                  <li key={i} className="text-gray-700 flex items-start gap-3">
                                      <span className="font-bold text-indigo-500">#{i+1}</span>
                                      {tr}
                                  </li>
                              ))}
                          </ul>
                          <Link 
                            to="/medicines" 
                            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-800 transition shadow-lg"
                          >
                             {t('Explore Medicines', 'ادویات دیکھیں')}
                             <ArrowRight size={18} />
                          </Link>
                      </div>

                      <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                          <h3 className="flex items-center font-bold text-green-700 mb-4 text-xl">
                              <ShieldCheck className="mr-2" size={24}/> {t('Prevention', 'احتیاط')}
                          </h3>
                          <ul className="grid md:grid-cols-2 gap-4">
                              {getDiseaseInfo(selectedDisease).prevention.map((p, i) => (
                                  <li key={i} className="flex items-center text-gray-700 text-sm">
                                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                      {p}
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <div className="bg-red-600 p-8 rounded-2xl text-white shadow-xl">
                           <h3 className="font-bold text-2xl mb-4 flex items-center">
                              <AlertTriangle className="mr-3" size={32} />
                              {t('When to Call a Vet', 'ڈاکٹر کو کب بلائیں')}
                           </h3>
                           <p className="text-lg font-medium leading-relaxed opacity-95">
                               {getDiseaseInfo(selectedDisease).whenToCallVet}
                           </p>
                      </div>
                      <button onClick={() => setSelectedDisease(null)} className="w-full bg-gray-100 py-4 rounded-2xl font-bold">{t('Close', 'بند کریں')}</button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Health;
