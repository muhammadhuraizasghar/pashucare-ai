
import React, { useState, useMemo } from 'react';
import { 
  Search, Pill, ChevronRight, X, Info, ShieldCheck, 
  Stethoscope, Syringe, AlertTriangle, Filter, Book, Baby, Activity, Shield, Clock, Droplets
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Medicine, MedicineCategory } from '../types';
import { medicines } from '../data/medicines';

const categoryLabels: Record<MedicineCategory, { en: string; ur: string; icon: any; color: string }> = {
  Antibiotics: { en: 'Antibiotics', ur: 'اینٹی بائیوٹکس', icon: Syringe, color: 'bg-blue-100 text-blue-700' },
  Antiparasitic: { en: 'Anti-Parasitic & Dewormers', ur: 'کیڑے مار ادویات', icon: Filter, color: 'bg-green-100 text-green-700' },
  NSAID: { en: 'Fever, Pain & Anti-Inflammatory', ur: 'درد اور بخار', icon: Stethoscope, color: 'bg-red-100 text-red-700' },
  Digestive: { en: 'Digestive & Rumen Medicines', ur: 'ہاضمے کی دوائیں', icon: Activity, color: 'bg-emerald-100 text-emerald-700' },
  VitaminsMinerals: { en: 'Vitamins & Minerals', ur: 'وٹامنز اور منرلز', icon: Book, color: 'bg-amber-100 text-amber-700' },
  Reproductive: { en: 'Reproductive & Uterine', ur: 'تولیدی ادویات', icon: Baby, color: 'bg-pink-100 text-pink-700' },
  Supportive: { en: 'Allergy & Poisoning (Supportive)', ur: 'الرجی اور ہنگامی مدد', icon: Shield, color: 'bg-rose-100 text-rose-700' },
};

const Medicines: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MedicineCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMed, setSelectedMed] = useState<Medicine | null>(null);

  const filteredMeds = useMemo(() => {
    return medicines.filter(med => {
      const matchesCategory = activeCategory === 'All' || med.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = med.nameEn.toLowerCase().includes(q) || med.nameUr.includes(q) || 
                          med.saltEn.toLowerCase().includes(q) || 
                          med.usedForEn.some(d => d.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto pb-20 space-y-8">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center mb-2">
            <Pill className="mr-3 text-primary" size={32}/>
            {t('Veterinary Medicines Library', 'ویٹرنری ادویات کی لائبریری')}
        </h1>
        <p className="text-gray-500">{t('A complete text-only guide for livestock salts and their general usage.', 'مویشیوں کے سالٹس اور ان کے عمومی استعمال کے لیے مکمل ٹیکسٹ گائیڈ۔')}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-4">
              <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="text"
                    placeholder={t('Search meds/disease...', 'دوا یا بیماری تلاش کریں...')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary shadow-sm"
                  />
              </div>

              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="p-3 bg-gray-50 border-b font-bold text-xs uppercase tracking-wider text-gray-500">{t('Categories', 'اقسام')}</div>
                  <div className="flex flex-col">
                      <button 
                        onClick={() => setActiveCategory('All')}
                        className={`px-4 py-3 text-left text-sm font-medium border-b last:border-0 transition ${activeCategory === 'All' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
                      >
                          {t('All Categories', 'تمام اقسام')}
                      </button>
                      {(Object.keys(categoryLabels) as MedicineCategory[]).map(cat => (
                          <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-3 text-left text-sm font-medium border-b last:border-0 transition flex items-center gap-3 ${activeCategory === cat ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
                          >
                              {React.createElement(categoryLabels[cat].icon, { size: 16 })}
                              {language === 'en' ? categoryLabels[cat].en : categoryLabels[cat].ur}
                          </button>
                      ))}
                  </div>
              </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMeds.map(med => (
                  <div 
                    key={med.id}
                    onClick={() => setSelectedMed(med)}
                    className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md cursor-pointer transition flex flex-col justify-between"
                  >
                      <div>
                          <div className="flex justify-between items-start mb-3">
                              <h3 className="font-bold text-lg text-gray-800">{language === 'en' ? med.nameEn : med.nameUr}</h3>
                              <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${categoryLabels[med.category].color}`}>
                                  {language === 'en' ? categoryLabels[med.category].en.split(' ')[0] : categoryLabels[med.category].ur.split(' ')[0]}
                              </span>
                          </div>
                          <p className="text-xs text-gray-400 mb-3 font-mono">{t('Salt:', 'سالٹ:')} {language === 'en' ? med.saltEn : med.saltUr}</p>
                          <div className="flex flex-wrap gap-1">
                              {(language === 'en' ? med.usedForEn : med.usedForUr).slice(0, 2).map((d, i) => (
                                  <span key={i} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded font-medium">{d}</span>
                              ))}
                          </div>
                      </div>
                      <div className="mt-4 pt-3 border-t flex justify-between items-center text-primary text-xs font-bold">
                          {t('View Details & Dosage', 'تفصیلات اور مقدار دیکھیں')}
                          <ChevronRight size={16} />
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {selectedMed && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedMed(null)}>
              <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                  <div className={`p-8 text-white ${categoryLabels[selectedMed.category].color.split(' ')[0].replace('bg-', 'bg-')}`}>
                      <h2 className="text-3xl font-bold mb-1">{language === 'en' ? selectedMed.nameEn : selectedMed.nameUr}</h2>
                      <p className="text-sm opacity-90 font-mono">{language === 'en' ? selectedMed.saltEn : selectedMed.saltUr}</p>
                  </div>
                  
                  <div className="p-8 space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         <div className="bg-blue-50 p-4 rounded-xl">
                            <span className="text-[10px] font-bold text-blue-600 uppercase block mb-1">{t('Route', 'طریقہ استعمال')}</span>
                            <span className="font-bold text-blue-900 flex items-center gap-2"><Droplets size={16}/> {selectedMed.route || 'N/A'}</span>
                         </div>
                         <div className="bg-amber-50 p-4 rounded-xl">
                            <span className="text-[10px] font-bold text-amber-600 uppercase block mb-1">{t('Withdrawal', 'وقفہ')}</span>
                            <span className="font-bold text-amber-900 flex items-center gap-2"><Clock size={16}/> {selectedMed.withdrawalPeriod || 'None'}</span>
                         </div>
                         <div className="bg-green-50 p-4 rounded-xl col-span-2 md:col-span-1">
                            <span className="text-[10px] font-bold text-green-600 uppercase block mb-1">{t('Dosage Info', 'خوراک')}</span>
                            <p className="text-xs font-bold text-green-900 leading-tight">{selectedMed.dosageSpeciesWise || 'Consult Vet'}</p>
                         </div>
                      </div>

                      <section>
                          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                              <ShieldCheck className="text-primary" size={20} />
                              {t('Main Uses', 'اہم استعمال')}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                              {(language === 'en' ? selectedMed.usedForEn : selectedMed.usedForUr).map((d, i) => (
                                  <span key={i} className="bg-primary/5 text-primary px-3 py-1.5 rounded-lg text-xs font-bold border border-primary/10">{d}</span>
                              ))}
                          </div>
                      </section>

                      <section>
                          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                              <Info className="text-primary" size={20} />
                              {t('Usage Guidance', 'رہنمائی')}
                          </h3>
                          <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border">
                               {language === 'en' ? selectedMed.guidanceEn : selectedMed.guidanceUr}
                          </p>
                      </section>

                      <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-4">
                          <AlertTriangle className="text-red-500 shrink-0 mt-1" size={24}/>
                          <p className="text-xs text-red-700 font-medium">
                              {t('This information is for education. Incorrect dosage can be fatal. Always consult a veterinarian.', 'یہ معلومات صرف تعلیمی مقصد کے لیے ہیں۔ غلط مقدار جان لیوا ہو سکتی ہے۔ ڈاکٹر سے رجوع کریں۔')}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Medicines;
