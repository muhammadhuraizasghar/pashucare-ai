import React, { useState, useMemo } from 'react';
import { Search, Sprout, Wheat, Droplet, Layers, Beaker, ChevronRight, X, Info, Leaf, Sun, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fodderData } from '../data/fodder';
import { FodderItem, FodderCategory } from '../types';

const categories: { id: FodderCategory; labelEn: string; labelUr: string; icon: any; color: string }[] = [
  { id: 'Green Fodder', labelEn: 'Green Fodder', labelUr: 'سبز چارہ', icon: Sprout, color: 'bg-green-100 text-green-700' },
  { id: 'Dry Fodder', labelEn: 'Dry Fodder', labelUr: 'خشک چارہ', icon: Wheat, color: 'bg-amber-100 text-amber-700' },
  { id: 'Concentrate', labelEn: 'Concentrates', labelUr: 'ونڈا / دلیہ', icon: Layers, color: 'bg-blue-100 text-blue-700' },
  { id: 'Mineral', labelEn: 'Minerals', labelUr: 'نمکیات', icon: Beaker, color: 'bg-purple-100 text-purple-700' },
];

const FodderLibrary: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FodderCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<FodderItem | null>(null);

  const filteredItems = useMemo(() => {
    return fodderData.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = item.nameEn.toLowerCase().includes(q) || item.nameUr.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getData = (item: FodderItem) => language === 'en' ? item.en : item.ur;

  return (
    <div className="max-w-6xl mx-auto pb-20 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <Sprout className="mr-3 text-primary" size={32}/>
              {t('Fodder & Feed Information', 'چارہ اور خوراک کی معلومات')}
           </h1>
           <p className="text-gray-500 mt-1">
             {t('Complete library of livestock feeds, nutrition, and usage guides.', 'مویشیوں کی خوراک، غذائیت اور استعمال کے طریقوں کی مکمل لائبریری۔')}
           </p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
            <input 
                type="text" 
                placeholder={t('Search fodder name...', 'چارے کا نام تلاش کریں...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
            onClick={() => setActiveCategory('All')}
            className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center gap-2
                ${activeCategory === 'All' ? 'bg-gray-800 text-white border-gray-800 shadow-md' : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-600'}
            `}
        >
            <span className="font-bold">{t('All Items', 'تمام اشیاء')}</span>
        </button>
        {categories.map(cat => (
            <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center gap-2
                    ${activeCategory === cat.id ? 'ring-2 ring-offset-1 ring-primary border-transparent shadow-md bg-white' : 'bg-white border-gray-200 hover:bg-gray-50'}
                `}
            >
                <div className={`p-2 rounded-full ${cat.color}`}>
                    <cat.icon size={24} />
                </div>
                <span className={`font-bold ${activeCategory === cat.id ? 'text-primary' : 'text-gray-600'}`}>
                    {language === 'en' ? cat.labelEn : cat.labelUr}
                </span>
            </button>
        ))}
      </div>

      {/* List / Detail Layout */}
      <div className="grid md:grid-cols-3 gap-8">
          
          {/* List View */}
          <div className="md:col-span-1 space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
             {filteredItems.length > 0 ? (
                 filteredItems.map(item => (
                    <div 
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center
                            ${selectedItem?.id === item.id 
                                ? 'bg-green-50 border-primary shadow-sm' 
                                : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'}
                        `}
                    >
                        <div>
                            <h3 className="font-bold text-gray-800">{language === 'en' ? item.nameEn : item.nameUr}</h3>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded mt-1 inline-block">
                                {t(item.category, item.category === 'Green Fodder' ? 'سبز چارہ' : item.category === 'Dry Fodder' ? 'خشک چارہ' : item.category === 'Concentrate' ? 'ونڈا' : 'نمکیات')}
                            </span>
                        </div>
                        <ChevronRight className={`text-gray-400 ${selectedItem?.id === item.id ? 'text-primary' : ''}`} size={20} />
                    </div>
                 ))
             ) : (
                 <div className="text-center py-10 text-gray-400 bg-white rounded-xl border border-dashed">
                     <Sprout size={40} className="mx-auto mb-2 opacity-50" />
                     <p>{t('No items found.', 'کوئی چیز نہیں ملی۔')}</p>
                 </div>
             )}
          </div>

          {/* Detail View */}
          <div className="md:col-span-2">
             {selectedItem ? (
                 <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    
                    {/* Detail Header */}
                    <div className="bg-gradient-to-r from-primary to-green-700 p-6 text-white flex justify-between items-start">
                        <div>
                            <h2 className="text-3xl font-bold">{language === 'en' ? selectedItem.nameEn : selectedItem.nameUr}</h2>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block backdrop-blur-sm">
                                {t(selectedItem.category, selectedItem.category === 'Green Fodder' ? 'سبز چارہ' : selectedItem.category === 'Dry Fodder' ? 'خشک چارہ' : selectedItem.category === 'Concentrate' ? 'ونڈا' : 'نمکیات')}
                            </span>
                        </div>
                        <button onClick={() => setSelectedItem(null)} className="text-white/80 hover:text-white md:hidden">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Nutrition Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-center">
                                <span className="block text-xs font-bold text-blue-600 uppercase mb-1">{t('Energy', 'توانائی')}</span>
                                <span className="font-bold text-gray-800">{getData(selectedItem).nutrition.energy}</span>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg text-center">
                                <span className="block text-xs font-bold text-green-600 uppercase mb-1">{t('Protein', 'پروٹین')}</span>
                                <span className="font-bold text-gray-800">{getData(selectedItem).nutrition.protein}</span>
                            </div>
                            <div className="bg-amber-50 p-3 rounded-lg text-center">
                                <span className="block text-xs font-bold text-amber-600 uppercase mb-1">{t('Fiber', 'فائبر')}</span>
                                <span className="font-bold text-gray-800">{getData(selectedItem).nutrition.fiber}</span>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg text-center">
                                <span className="block text-xs font-bold text-purple-600 uppercase mb-1">{t('Minerals', 'نمکیات')}</span>
                                <span className="font-bold text-gray-800 text-xs">{getData(selectedItem).nutrition.minerals}</span>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* Left Col */}
                            <div className="space-y-6">
                                <section>
                                    <h3 className="font-bold text-lg text-gray-800 flex items-center mb-3">
                                        <Leaf className="mr-2 text-primary" size={20}/>
                                        {t('Benefits', 'فوائد')}
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        {getData(selectedItem).benefits.map((b, i) => <li key={i}>{b}</li>)}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="font-bold text-lg text-gray-800 flex items-center mb-3">
                                        <Layers className="mr-2 text-primary" size={20}/>
                                        {t('Source & Cultivation', 'ماخذ اور کاشت')}
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="font-bold text-gray-700">{t('Source:', 'ماخذ:')}</span> {getData(selectedItem).source}</p>
                                        <p><span className="font-bold text-gray-700">{t('Cultivation:', 'کاشت:')}</span> {getData(selectedItem).cultivation}</p>
                                        <p><span className="font-bold text-gray-700">{t('Season:', 'موسم:')}</span> {getData(selectedItem).season}</p>
                                    </div>
                                </section>
                            </div>

                            {/* Right Col */}
                            <div className="space-y-6">
                                <section>
                                    <h3 className="font-bold text-lg text-gray-800 flex items-center mb-3">
                                        <Beaker className="mr-2 text-primary" size={20}/>
                                        {t('Feeding Guide', 'کھلانے کا طریقہ')}
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-700">
                                        <p className="mb-2 font-medium">{getData(selectedItem).feedingMethod}</p>
                                        <div className="mt-2 text-sm text-gray-500">
                                            <span className="font-bold block text-gray-600 mb-1">{t('Processing:', 'تیاری:')}</span>
                                            {getData(selectedItem).processing}
                                        </div>
                                    </div>
                                </section>

                                 <section>
                                    <h3 className="font-bold text-lg text-gray-800 flex items-center mb-3">
                                        <AlertTriangle className="mr-2 text-amber-600" size={20}/>
                                        {t('Precautions', 'احتیاطی تدابیر')}
                                    </h3>
                                    <p className="text-amber-800 bg-amber-50 p-4 rounded-xl border border-amber-100">
                                        {getData(selectedItem).precautions}
                                    </p>
                                </section>
                            </div>

                        </div>
                    </div>
                 </div>
             ) : (
                 <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-gray-400">
                     <Info size={48} className="mb-4 opacity-50"/>
                     <p className="text-lg font-medium">{t('Select an item to view details', 'تفصیلات دیکھنے کے لیے کوئی آئٹم منتخب کریں')}</p>
                 </div>
             )}
          </div>
      </div>
    </div>
  );
};

export default FodderLibrary;