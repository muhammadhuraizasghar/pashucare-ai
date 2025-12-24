import React, { useState } from 'react';
import { 
  Settings, Pill, Stethoscope, BookOpen, Syringe, Plus, Trash2, Edit2, 
  Save, X, ChevronRight, Layout, Info, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../ContentContext';
import { useAuth } from '../context/AuthContext';
import { Disease, Medicine, Vaccination, FarmingGuide, DiseaseCategory, MedicineCategory } from '../types';

const AdminDashboard: React.FC = () => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { 
    diseases, addDisease, updateDisease, deleteDisease,
    medicines, addMedicine, updateMedicine, deleteMedicine,
    vaccinations, addVaccination, updateVaccination, deleteVaccination,
    guides, addGuide, updateGuide, deleteGuide
  } = useContent();

  const [activeTab, setActiveTab] = useState<'diseases' | 'medicines' | 'guides' | 'vaccines'>('diseases');
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Forms local state
  const [diseaseForm, setDiseaseForm] = useState<Partial<Disease>>({});
  const [medicineForm, setMedicineForm] = useState<Partial<Medicine>>({});
  const [vaccineForm, setVaccineForm] = useState<Partial<Vaccination>>({});
  const [guideForm, setGuideForm] = useState<Partial<FarmingGuide>>({});

  if (user?.role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
          <AlertTriangle className="text-red-500" size={64} />
          <h1 className="text-3xl font-bold text-gray-800">{t('Access Denied', 'رسائی ممنوع ہے')}</h1>
          <p className="text-gray-500">{t('Only administrators can access this section.', 'صرف ایڈمنسٹریٹر اس حصے تک رسائی حاصل کر سکتے ہیں۔')}</p>
      </div>
    );
  }

  const handleEditDisease = (d: Disease) => {
    setEditingId(d.id);
    setDiseaseForm(d);
  };

  const handleSaveDisease = () => {
    if (editingId) {
      updateDisease(diseaseForm as Disease);
    } else {
      addDisease({ ...diseaseForm, id: Date.now().toString() } as Disease);
    }
    setEditingId(null);
    setDiseaseForm({});
  };

  const handleEditMedicine = (m: Medicine) => {
    setEditingId(m.id);
    setMedicineForm(m);
  };

  const handleSaveMedicine = () => {
    if (editingId) {
      updateMedicine(medicineForm as Medicine);
    } else {
      addMedicine({ ...medicineForm, id: Date.now().toString() } as Medicine);
    }
    setEditingId(null);
    setMedicineForm({});
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-8">
      <header className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Settings className="mr-3 text-primary" size={32}/>
            {t('Admin Content CMS', 'ایڈمن کنٹینٹ مینجمنٹ')}
          </h1>
          <p className="text-gray-500">{t('Manage global app data: Diseases, Medicines, and Guides.', 'ایپ کا ڈیٹا تبدیل کریں: بیماریاں، ادویات اور گائیڈز۔')}</p>
        </div>
      </header>

      <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
        <button onClick={() => { setActiveTab('diseases'); setEditingId(null); }} className={`px-6 py-3 font-bold text-sm border-b-2 transition ${activeTab === 'diseases' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
          {t('Diseases', 'بیماریاں')}
        </button>
        <button onClick={() => { setActiveTab('medicines'); setEditingId(null); }} className={`px-6 py-3 font-bold text-sm border-b-2 transition ${activeTab === 'medicines' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
          {t('Medicines', 'ادویات')}
        </button>
        <button onClick={() => { setActiveTab('vaccines'); setEditingId(null); }} className={`px-6 py-3 font-bold text-sm border-b-2 transition ${activeTab === 'vaccines' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
          {t('Vaccinations', 'ویکسینیشن')}
        </button>
        <button onClick={() => { setActiveTab('guides'); setEditingId(null); }} className={`px-6 py-3 font-bold text-sm border-b-2 transition ${activeTab === 'guides' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>
          {t('Farming Guides', 'فارمنگ گائیڈز')}
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {/* DISEASES MODULE */}
        {activeTab === 'diseases' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">{t('Manage Diseases', 'بیماریوں کا انتظام')}</h2>
              {!editingId && (
                <button onClick={() => setEditingId('new')} className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                  <Plus size={20}/> {t('Add New', 'نیا شامل کریں')}
                </button>
              )}
            </div>

            {editingId && (
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4 animate-fadeIn">
                <h3 className="font-bold text-lg">{editingId === 'new' ? t('Add New Disease', 'نئی بیماری درج کریں') : t('Edit Disease', 'بیماری تبدیل کریں')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name (English)" className="p-3 border rounded-lg" value={diseaseForm.nameEn || ''} onChange={e => setDiseaseForm({...diseaseForm, nameEn: e.target.value})} />
                  <input type="text" placeholder="نام (اردو)" className="p-3 border rounded-lg text-right font-urdu" value={diseaseForm.nameUr || ''} onChange={e => setDiseaseForm({...diseaseForm, nameUr: e.target.value})} />
                  <select className="p-3 border rounded-lg" value={diseaseForm.category} onChange={e => setDiseaseForm({...diseaseForm, category: e.target.value as DiseaseCategory})}>
                    <option value="Infectious">Infectious</option>
                    <option value="Parasitic">Parasitic</option>
                    <option value="DigestiveMetabolic">Digestive/Metabolic</option>
                    <option value="Deficiency">Deficiency</option>
                    <option value="Reproductive">Reproductive</option>
                    <option value="Injury">Injury</option>
                  </select>
                  <input type="text" placeholder="Animals (comma separated)" className="p-3 border rounded-lg" value={diseaseForm.applicableAnimals?.join(', ') || ''} onChange={e => setDiseaseForm({...diseaseForm, applicableAnimals: e.target.value.split(', ')})} />
                </div>
                <textarea placeholder="English Introduction" className="w-full p-3 border rounded-lg" value={diseaseForm.en?.introduction || ''} onChange={e => setDiseaseForm({...diseaseForm, en: {...(diseaseForm.en as any), introduction: e.target.value}})} />
                <textarea placeholder="Urdu Introduction" className="w-full p-3 border rounded-lg text-right font-urdu" value={diseaseForm.ur?.introduction || ''} onChange={e => setDiseaseForm({...diseaseForm, ur: {...(diseaseForm.ur as any), introduction: e.target.value}})} />
                
                <div className="flex gap-2">
                  <button onClick={handleSaveDisease} className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Save size={20}/> {t('Save', 'محفوظ کریں')}
                  </button>
                  <button onClick={() => { setEditingId(null); setDiseaseForm({}); }} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold">
                    {t('Cancel', 'کینسل')}
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diseases.map(d => (
                <div key={d.id} className="p-4 border rounded-xl flex justify-between items-center hover:bg-gray-50">
                  <div>
                    <h4 className="font-bold text-gray-800">{d.nameEn}</h4>
                    <p className="text-xs text-gray-400">{d.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditDisease(d)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit2 size={18}/></button>
                    <button onClick={() => deleteDisease(d.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEDICINES MODULE */}
        {activeTab === 'medicines' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">{t('Manage Medicines', 'ادویات کا انتظام')}</h2>
              {!editingId && (
                <button onClick={() => setEditingId('new')} className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                  <Plus size={20}/> {t('Add New', 'نیا شامل کریں')}
                </button>
              )}
            </div>

            {editingId && (
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4 animate-fadeIn">
                <h3 className="font-bold text-lg">{editingId === 'new' ? t('Add New Medicine', 'نئی دوا درج کریں') : t('Edit Medicine', 'دوا تبدیل کریں')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Medicine Name" className="p-3 border rounded-lg" value={medicineForm.nameEn || ''} onChange={e => setMedicineForm({...medicineForm, nameEn: e.target.value})} />
                  <input type="text" placeholder="Active Salt" className="p-3 border rounded-lg" value={medicineForm.saltEn || ''} onChange={e => setMedicineForm({...medicineForm, saltEn: e.target.value})} />
                  <select className="p-3 border rounded-lg" value={medicineForm.category} onChange={e => setMedicineForm({...medicineForm, category: e.target.value as MedicineCategory})}>
                    <option value="Antibiotics">Antibiotics</option>
                    <option value="Antiparasitic">Antiparasitic</option>
                    <option value="NSAID">Fever/Pain (NSAID)</option>
                    <option value="Digestive">Digestive</option>
                    <option value="VitaminsMinerals">Vitamins & Minerals</option>
                  </select>
                  <input type="text" placeholder="Dosage (e.g. Cow: 10ml)" className="p-3 border rounded-lg" value={medicineForm.dosageSpeciesWise || ''} onChange={e => setMedicineForm({...medicineForm, dosageSpeciesWise: e.target.value})} />
                  <input type="text" placeholder="Route (I/M, Oral)" className="p-3 border rounded-lg" value={medicineForm.route || ''} onChange={e => setMedicineForm({...medicineForm, route: e.target.value})} />
                  <input type="text" placeholder="Withdrawal Period" className="p-3 border rounded-lg" value={medicineForm.withdrawalPeriod || ''} onChange={e => setMedicineForm({...medicineForm, withdrawalPeriod: e.target.value})} />
                </div>
                <textarea placeholder="General Guidance (En)" className="w-full p-3 border rounded-lg" value={medicineForm.guidanceEn || ''} onChange={e => setMedicineForm({...medicineForm, guidanceEn: e.target.value})} />
                
                <div className="flex gap-2">
                  <button onClick={handleSaveMedicine} className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Save size={20}/> {t('Save', 'محفوظ کریں')}
                  </button>
                  <button onClick={() => { setEditingId(null); setMedicineForm({}); }} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold">
                    {t('Cancel', 'کینسل')}
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {medicines.map(m => (
                <div key={m.id} className="p-4 border rounded-xl flex justify-between items-center hover:bg-gray-50">
                  <div>
                    <h4 className="font-bold text-gray-800">{m.nameEn}</h4>
                    <p className="text-xs text-gray-400">{m.saltEn}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditMedicine(m)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit2 size={18}/></button>
                    <button onClick={() => deleteMedicine(m.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VACCINES & GUIDES would follow same pattern */}
        {(activeTab === 'vaccines' || activeTab === 'guides') && (
           <div className="py-20 text-center text-gray-400">
               <Info size={48} className="mx-auto mb-4 opacity-30" />
               <p>{t('Module implementation pending. Follow Disease/Medicine pattern.', 'اس ماڈیول پر کام جاری ہے۔ بیماریوں والے طریقے سے شامل کیا جائے گا۔')}</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;