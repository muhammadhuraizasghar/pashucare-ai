import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Disease, Medicine, Vaccination, FarmingGuide } from '../types';
import { diseases as initialDiseases } from '../data/diseases';
import { medicines as initialMedicines } from '../data/medicines';

interface ContentContextType {
  diseases: Disease[];
  medicines: Medicine[];
  vaccinations: Vaccination[];
  guides: FarmingGuide[];
  addDisease: (d: Disease) => void;
  updateDisease: (d: Disease) => void;
  deleteDisease: (id: string) => void;
  addMedicine: (m: Medicine) => void;
  updateMedicine: (m: Medicine) => void;
  deleteMedicine: (id: string) => void;
  addVaccination: (v: Vaccination) => void;
  updateVaccination: (v: Vaccination) => void;
  deleteVaccination: (id: string) => void;
  addGuide: (g: FarmingGuide) => void;
  updateGuide: (g: FarmingGuide) => void;
  deleteGuide: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [vaccinations, setVaccinations] = useState<Vaccination[]>([]);
  const [guides, setGuides] = useState<FarmingGuide[]>([]);

  useEffect(() => {
    const savedDiseases = localStorage.getItem('lib_diseases');
    const savedMedicines = localStorage.getItem('lib_medicines');
    const savedVaccines = localStorage.getItem('lib_vaccines');
    const savedGuides = localStorage.getItem('lib_guides');

    setDiseases(savedDiseases ? JSON.parse(savedDiseases) : initialDiseases);
    setMedicines(savedMedicines ? JSON.parse(savedMedicines) : initialMedicines);
    
    // Default dynamic vaccinations if none stored
    setVaccinations(savedVaccines ? JSON.parse(savedVaccines) : [
        {
            id: 'v1',
            species: 'Cattle/Buffalo',
            nameEn: 'FMD Vaccine',
            nameUr: 'منہ کھر ویکسین',
            scheduleEn: 'Every 6 months (Feb/Sep)',
            scheduleUr: 'ہر 6 ماہ بعد (فروری/ستمبر)',
            doseEn: '5ml S/C',
            doseUr: '5 ملی لیٹر',
            notesEn: 'Maintain cold chain.',
            notesUr: 'کولڈ چین برقرار رکھیں۔',
            descriptionEn: 'Protection against Foot and Mouth Disease.',
            descriptionUr: 'منہ کھر کی بیماری سے بچاؤ۔'
        }
    ]);

    setGuides(savedGuides ? JSON.parse(savedGuides) : [
        {
            id: 'g1',
            titleEn: 'Heat Stress Management',
            titleUr: 'گرمی کے تناؤ کا انتظام',
            category: 'Summer Care',
            contentEn: 'Provide plenty of fresh water and use fans/sprinklers.',
            contentUr: 'وافر مقدار میں تازہ پانی دیں اور پنکھے یا فوارے استعمال کریں۔'
        }
    ]);
  }, []);

  useEffect(() => { localStorage.setItem('lib_diseases', JSON.stringify(diseases)); }, [diseases]);
  useEffect(() => { localStorage.setItem('lib_medicines', JSON.stringify(medicines)); }, [medicines]);
  useEffect(() => { localStorage.setItem('lib_vaccines', JSON.stringify(vaccinations)); }, [vaccinations]);
  useEffect(() => { localStorage.setItem('lib_guides', JSON.stringify(guides)); }, [guides]);

  const addDisease = (d: Disease) => setDiseases(prev => [...prev, d]);
  const updateDisease = (d: Disease) => setDiseases(prev => prev.map(item => item.id === d.id ? d : item));
  const deleteDisease = (id: string) => setDiseases(prev => prev.filter(item => item.id !== id));

  const addMedicine = (m: Medicine) => setMedicines(prev => [...prev, m]);
  const updateMedicine = (m: Medicine) => setMedicines(prev => prev.map(item => item.id === m.id ? m : item));
  const deleteMedicine = (id: string) => setMedicines(prev => prev.filter(item => item.id !== id));

  const addVaccination = (v: Vaccination) => setVaccinations(prev => [...prev, v]);
  const updateVaccination = (v: Vaccination) => setVaccinations(prev => prev.map(item => item.id === v.id ? v : item));
  const deleteVaccination = (id: string) => setVaccinations(prev => prev.filter(item => item.id !== id));

  const addGuide = (g: FarmingGuide) => setGuides(prev => [...prev, g]);
  const updateGuide = (g: FarmingGuide) => setGuides(prev => prev.map(item => item.id === g.id ? g : item));
  const deleteGuide = (id: string) => setGuides(prev => prev.filter(item => item.id !== id));

  return (
    <ContentContext.Provider value={{
      diseases, medicines, vaccinations, guides,
      addDisease, updateDisease, deleteDisease,
      addMedicine, updateMedicine, deleteMedicine,
      addVaccination, updateVaccination, deleteVaccination,
      addGuide, updateGuide, deleteGuide
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};