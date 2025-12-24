import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, CheckCircle, Info, Thermometer, MapPin, Scale, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { breeds } from '../data/breeds';
import { StaticBreedData } from '../types';

const BreedDatabase: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreedId, setSelectedBreedId] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Advanced Filter Logic
  const filteredBreeds = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return breeds; 

    return breeds.filter(b => 
      b.nameEn.toLowerCase().includes(q) || 
      b.nameUr.includes(q) ||
      b.aliases?.some(alias => alias.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const selectedBreed = useMemo(() => {
    return breeds.find(b => b.id === selectedBreedId);
  }, [selectedBreedId]);

  const handleSelectBreed = (breed: StaticBreedData) => {
    setSelectedBreedId(breed.id);
    setSearchQuery(language === 'en' ? breed.nameEn : breed.nameUr);
    setShowDropdown(false);
  };

  const getBreedInfo = (breed: StaticBreedData) => language === 'en' ? breed.en : breed.ur;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex justify-between items-center print:hidden">
         <h2 className="text-3xl font-bold text-gray-800">{t('Livestock Breeds Database', 'لائیو اسٹاک بریڈز ڈیٹا بیس')}</h2>
      </div>

      {/* SEARCH AREA */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative print:hidden z-20">
        <label className="block text-lg font-bold text-gray-700 mb-3">
            {t('Find a Breed', 'نسل تلاش کریں')}
        </label>
        <div className="relative">
          <input
            type="text"
            className="w-full p-5 pl-14 text-xl border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-primary shadow-sm transition-all"
            placeholder={t('Search name... e.g. Sahiwal, Lohi, Beetal', 'نام لکھیں... مثلاً ساہیوال، لوہی، بیتل')}
            value={searchQuery}
            onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
                if(e.target.value === '') setSelectedBreedId('');
            }}
            onFocus={() => setShowDropdown(true)}
          />
          <Search className="absolute left-5 top-6 text-gray-400" size={28} />
          {searchQuery && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedBreedId(''); setShowDropdown(false); }}
                className="absolute right-14 top-6 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1"
              >
                  X
              </button>
          )}
          <ChevronDown className="absolute right-5 top-6 text-gray-400" size={28} />
        </div>

        {/* Dropdown Results */}
        {showDropdown && (
          <div className="absolute z-50 w-full bg-white mt-2 border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto left-0">
            {filteredBreeds.length > 0 ? (
                filteredBreeds.map(breed => (
                <button
                    key={breed.id}
                    className="w-full text-left px-6 py-4 hover:bg-green-50 border-b border-gray-100 last:border-0 flex justify-between items-center transition-colors group"
                    onClick={() => handleSelectBreed(breed)}
                >
                    <div>
                        <span className="font-bold text-lg text-gray-800 group-hover:text-primary">
                            {language === 'en' ? breed.nameEn : breed.nameUr}
                        </span>
                        <span className="ml-3 text-sm text-gray-500">
                             ({t(breed.type, breed.type)})
                        </span>
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-green-200 group-hover:text-green-900">
                        {language === 'en' ? 'View Details' : 'تفصیلات دیکھیں'}
                    </span>
                </button>
                ))
            ) : (
                <div className="p-8 text-center text-gray-500">
                    {t('No breeds found. Try a different name.', 'کوئی نسل نہیں ملی۔ کوئی اور نام آزمائیں۔')}
                </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Breed Detail View - Loads Automatically */}
      {selectedBreed ? (
        <div className="space-y-6 animate-fadeIn">
          {/* Header & Quick Summary */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-primary text-white p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h1 className="text-4xl font-extrabold mb-2">{language === 'en' ? selectedBreed.nameEn : selectedBreed.nameUr}</h1>
                    <div className="flex flex-wrap gap-2 opacity-90">
                        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">
                            {t(`Species: ${selectedBreed.type}`, `قسم: ${selectedBreed.type}`)}
                        </span>
                        <span className="bg-white/20 px-3 py-1 rounded-full font-medium">
                             {getBreedInfo(selectedBreed).purpose}
                        </span>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                    <p className="text-sm opacity-75 uppercase tracking-wider font-bold">{t('Origin', 'آبائی علاقہ')}</p>
                    <p className="text-xl font-semibold flex items-center md:justify-end">
                        <MapPin size={18} className="mr-1" />
                        {getBreedInfo(selectedBreed).origin}
                    </p>
                </div>
              </div>
            </div>

            <div className="p-8">
                {/* 1. KEY STATS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 hover:shadow-md transition">
                        <div className="flex items-center mb-2 text-blue-700">
                            <Scale className="mr-2" size={20} />
                            <p className="text-sm font-bold uppercase">{t('Average Weight', 'اوسط وزن')}</p>
                        </div>
                        <p className="font-bold text-gray-800 text-lg leading-snug">{getBreedInfo(selectedBreed).weight}</p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-2xl border border-green-100 hover:shadow-md transition">
                        <div className="flex items-center mb-2 text-green-700">
                            <Info className="mr-2" size={20} />
                            <p className="text-sm font-bold uppercase">{t('Milk / Production', 'پیداوار')}</p>
                        </div>
                        <p className="font-bold text-gray-800 text-lg">{getBreedInfo(selectedBreed).milk.daily}</p>
                         {selectedBreed.type === 'Sheep' || selectedBreed.type === 'Goat' ? null : (
                            <p className="text-sm text-gray-600 mt-1">{t('Fat:', 'چکنائی:')} {getBreedInfo(selectedBreed).milk.fat}</p>
                         )}
                    </div>

                    <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 hover:shadow-md transition">
                        <div className="flex items-center mb-2 text-amber-700">
                            <Thermometer className="mr-2" size={20} />
                            <p className="text-sm font-bold uppercase">{t('Climate', 'موسم')}</p>
                        </div>
                        <p className="font-bold text-gray-800">{getBreedInfo(selectedBreed).care.climate}</p>
                    </div>

                     <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 hover:shadow-md transition">
                        <div className="flex items-center mb-2 text-purple-700">
                            <Heart className="mr-2" size={20} />
                            <p className="text-sm font-bold uppercase">{t('Temperament', 'مزاج')}</p>
                        </div>
                        <p className="font-bold text-gray-800">{getBreedInfo(selectedBreed).temperament}</p>
                    </div>
                </div>

                {/* 2. DETAILED INFO SECTIONS */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Col */}
                    <div className="space-y-8">
                        <section>
                            <h3 className="font-bold text-xl text-gray-800 mb-4 border-b-2 border-gray-100 pb-2">
                                {t('Appearance & Structure', 'ظاہری شکل و صورت')}
                            </h3>
                            <div className="bg-gray-50 p-5 rounded-xl space-y-3">
                                <div>
                                    <span className="text-sm text-gray-500 uppercase font-bold block">{t('Color', 'رنگ')}</span>
                                    <p className="text-gray-800 font-medium">{getBreedInfo(selectedBreed).appearance.color}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500 uppercase font-bold block">{t('Body Features', 'جسمانی خدوخال')}</span>
                                    <p className="text-gray-800 leading-relaxed">{getBreedInfo(selectedBreed).appearance.structure}</p>
                                </div>
                            </div>
                        </section>

                         <section>
                            <h3 className="font-bold text-xl text-gray-800 mb-4 border-b-2 border-gray-100 pb-2">
                                {t('Breeding & Growth', 'افزائش اور نشوونما')}
                            </h3>
                             <div className="bg-gray-50 p-5 rounded-xl space-y-3">
                                <div>
                                    <span className="text-sm text-gray-500 uppercase font-bold block">{t('Growth Rate', 'نشوونما کی رفتار')}</span>
                                    <p className="text-gray-800 font-medium">{getBreedInfo(selectedBreed).growthRate}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500 uppercase font-bold block">{t('Reproduction Info', 'تولیدی معلومات')}</span>
                                    <p className="text-gray-800 leading-relaxed">{getBreedInfo(selectedBreed).breedingInfo}</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Col */}
                    <div className="space-y-8">
                         <section>
                            <h3 className="font-bold text-xl text-gray-800 mb-4 border-b-2 border-gray-100 pb-2">
                                {t('Management Requirements', 'انتظامی ضروریات')}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3 shrink-0">
                                        <Info size={18}/>
                                    </span>
                                    <div>
                                        <span className="font-bold text-gray-800 block">{t('Feeding Needs', 'خوراک کی ضروریات')}</span>
                                        <p className="text-gray-600 text-sm mt-1">{getBreedInfo(selectedBreed).care.diet}</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3 shrink-0">
                                        <Info size={18}/>
                                    </span>
                                    <div>
                                        <span className="font-bold text-gray-800 block">{t('Housing', 'رہائش')}</span>
                                        <p className="text-gray-600 text-sm mt-1">{getBreedInfo(selectedBreed).care.housing}</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="font-bold text-xl text-gray-800 mb-4 border-b-2 border-gray-100 pb-2">
                                {t('Special Qualities', 'خصوصی خوبیاں')}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {getBreedInfo(selectedBreed).specialTraits.map((trait, i) => (
                                    <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm flex items-center">
                                        <CheckCircle size={16} className="mr-2" />
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="bg-green-50 p-6 rounded-full mb-6">
                <Search className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('Explore the Database', 'ڈیٹا بیس تلاش کریں')}</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
                {t('Enter a name above to view detailed profiles for Cows, Buffaloes, Goats, and Sheep.', 'گائے، بھینس، بکری اور بھیڑ کی تفصیلی پروفائلز دیکھنے کے لیے اوپر نام درج کریں۔')}
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Sahiwal</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Beetal</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Nili Ravi</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Lohi</span>
            </div>
        </div>
      )}
    </div>
  );
};

export default BreedDatabase;