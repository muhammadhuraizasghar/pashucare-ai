import React, { useState } from 'react';
import { Utensils, CheckCircle, Droplet, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { generateFeedPlan } from '../services/gemini';
import { FeedPlan } from '../types';

const Feed: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    animalType: '',
    weight: '',
    condition: 'Healthy/Normal'
  });
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<FeedPlan | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.animalType || !formData.weight) return;

    setLoading(true);
    try {
      const result = await generateFeedPlan(formData.animalType, formData.weight, formData.condition, language);
      setPlan(result);
    } catch (error) {
        alert(t('Error creating plan.', 'منصوبہ بنانے میں خرابی۔'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Integration Banner */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex flex-col md:flex-row justify-between items-center shadow-sm">
        <div className="flex items-center mb-3 md:mb-0">
            <Sprout className="text-green-700 mr-3" size={24} />
            <div>
                <h3 className="font-bold text-green-900 text-sm md:text-base">
                    {t('Check Nutritional Values?', 'غذائی اقدار چیک کریں؟')}
                </h3>
                <p className="text-xs md:text-sm text-green-700">
                    {t('Visit the Fodder Library to see protein, energy, and details of feed items.', 'فیڈ آئٹمز کی پروٹین، توانائی اور تفصیلات دیکھنے کے لیے چارہ لائبریری دیکھیں۔')}
                </p>
            </div>
        </div>
        <Link to="/fodder" className="bg-white text-green-700 font-bold py-2 px-4 rounded-lg shadow-sm text-sm hover:bg-green-50 flex items-center transition">
            {t('Open Library', 'لائبریری کھولیں')}
            <ArrowRight size={16} className="ml-2 rtl:rotate-180" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{t('Feed Calculator', 'فیڈ کیلکولیٹر')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('Animal Type', 'جانور کی قسم')}</label>
                <select
                  className="w-full border-gray-300 rounded-lg p-2 border focus:ring-primary focus:border-primary"
                  value={formData.animalType}
                  onChange={(e) => setFormData({...formData, animalType: e.target.value})}
                  required
                >
                  <option value="">{t('Select...', 'منتخب کریں...')}</option>
                  <option value="Cow (Lactating)">{t('Cow (Lactating)', 'گائے (دودھ دینے والی)')}</option>
                  <option value="Cow (Dry/Pregnant)">{t('Cow (Dry/Pregnant)', 'گائے (خشک/حاملہ)')}</option>
                  <option value="Buffalo">{t('Buffalo', 'بھینس')}</option>
                  <option value="Goat">{t('Goat', 'بکری')}</option>
                  <option value="Sheep">{t('Sheep', 'بھیڑ')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('Weight (kg)', 'وزن (کلوگرام)')}</label>
                <input
                  type="number"
                  className="w-full border-gray-300 rounded-lg p-2 border focus:ring-primary focus:border-primary"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  required
                  placeholder="e.g. 400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('Condition', 'حالت')}</label>
                <select
                  className="w-full border-gray-300 rounded-lg p-2 border focus:ring-primary focus:border-primary"
                  value={formData.condition}
                  onChange={(e) => setFormData({...formData, condition: e.target.value})}
                >
                  <option value="Healthy/Normal">{t('Healthy', 'صحت مند')}</option>
                  <option value="Underweight">{t('Underweight', 'کم وزن')}</option>
                  <option value="Sick/Recovering">{t('Recovering', 'صحتیاب')}</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                {loading ? t('Calculating...', 'حساب لگایا جا رہا ہے...') : t('Generate Plan', 'منصوبہ بنائیں')}
              </button>
            </form>
          </div>
        </div>

        {/* Results Column */}
        <div className="md:col-span-2">
          {plan ? (
            <div className="space-y-6">
              {/* Daily Plan Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-secondary p-4 text-white flex items-center">
                  <Utensils className="mr-2" />
                  <h3 className="font-bold text-lg">{t('Daily Feeding Schedule', 'روزانہ خوراک کا شیڈول')}</h3>
                </div>
                <div className="p-4 overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-2 font-semibold text-gray-700">{t('Time', 'وقت')}</th>
                        <th className="px-4 py-2 font-semibold text-gray-700">{t('Item', 'آئٹم')}</th>
                        <th className="px-4 py-2 font-semibold text-gray-700">{t('Quantity', 'مقدار')}</th>
                        <th className="px-4 py-2 font-semibold text-gray-700">{t('Notes', 'نوٹس')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {plan.dailyPlan.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-600">{row.timeOfDay}</td>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                          <td className="px-4 py-3 text-primary font-bold">{row.quantity}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary & Tips */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">{t('Nutritional Summary', 'غذائی خلاصہ')}</h4>
                  <p className="text-amber-900 text-sm leading-relaxed">{plan.nutritionalSummary}</p>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-gray-100">
                   <h4 className="font-bold text-gray-800 mb-3">{t('Pro Tips', 'اہم نکات')}</h4>
                   <ul className="space-y-2">
                     {plan.tips.map((tip, i) => (
                       <li key={i} className="flex items-start text-sm text-gray-600">
                         <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                         {tip}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
          ) : (
             <div className="h-full flex flex-col items-center justify-center bg-white rounded-xl border border-gray-100 border-dashed p-10 text-center text-gray-400">
                <Utensils size={48} className="mb-4 opacity-50" />
                <p>{t('Enter details to generate a customized diet plan.', 'اپنی مرضی کے مطابق خوراک کا منصوبہ بنانے کے لیے تفصیلات درج کریں۔')}</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;