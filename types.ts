
import React from 'react';

export type Language = 'en' | 'ur';
// Fix: Added 'admin' to UserRole to allow checking for admin permissions in the AdminDashboard
export type UserRole = 'farmer' | 'vet' | 'worker' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: UserRole;
  isSynced?: boolean;
}

export interface CalendarSettings {
  region: 'Punjab' | 'Sindh' | 'Custom';
  desiOffset: number;
  hijriOffset?: number;
  primaryCalendar: 'gregorian' | 'desi' | 'hijri';
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface DiseaseContent {
  introduction: string;
  causes: string[];
  symptoms: string[];
  immediateActions: string[];
  generalTreatment: string[];
  prevention: string[];
  whenToCallVet: string;
  suggestedMedCategories?: MedicineCategory[];
}

export type DiseaseCategory = 
  | 'Infectious' 
  | 'Parasitic' 
  | 'DigestiveMetabolic' 
  | 'Deficiency' 
  | 'Reproductive' 
  | 'Injury';

export interface Disease {
  id: string;
  nameEn: string;
  nameUr: string;
  category: DiseaseCategory;
  applicableAnimals: string[];
  en: DiseaseContent;
  ur: DiseaseContent;
}

export type MedicineCategory = 
  | 'Antibiotics'
  | 'Antiparasitic'
  | 'NSAID'
  | 'Digestive'
  | 'VitaminsMinerals'
  | 'Reproductive'
  | 'Supportive';

export interface Medicine {
  id: string;
  nameEn: string;
  nameUr: string;
  saltEn: string;
  saltUr: string;
  category: MedicineCategory;
  usedForEn: string[];
  usedForUr: string[];
  dosageSpeciesWise: string;
  route: string;
  withdrawalPeriod: string;
  guidanceEn: string;
  guidanceUr: string;
}

export interface Vaccination {
  id: string;
  species: 'Cattle/Buffalo' | 'Sheep/Goat' | 'Camel';
  nameEn: string;
  nameUr: string;
  scheduleEn: string;
  scheduleUr: string;
  doseEn: string;
  doseUr: string;
  notesEn: string;
  notesUr: string;
  descriptionEn: string;
  descriptionUr: string;
}

export interface FarmAnimal {
  id: string;
  name: string;
  tagId: string;
  type: 'Cow' | 'Buffalo' | 'Goat' | 'Sheep' | 'Camel';
  breed: string;
  gender: 'Male' | 'Female';
  dob: string;
  image?: string;
  notes?: string;
}

export interface Observation {
  id: string;
  date: string;
  text: string;
}

export interface BreedingRecord {
  id: string;
  animalId: string;
  animalName: string;
  matingDate: string;
  method: 'AI' | 'Natural';
  expectedDate: string;
  status: 'In Progress' | 'Completed' | 'Failed';
  pregnancyStatus?: 'Confirmed' | 'Suspected' | 'Not Confirmed';
  sireName?: string;
  technician?: string;
  notes?: string;
  observations?: Observation[]; 
}

export interface HealthRecord {
  id: string;
  animalId: string;
  animalName: string;
  type: 'Vaccination' | 'Deworming';
  date: string;
  medicine: string;
  nextDueDate?: string;
  notes?: string;
}

export interface Reminder {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Health' | 'Feeding' | 'Breeding' | 'Shed' | 'General';
  notes?: string;
  isCompleted?: boolean;
}

export interface NavItem {
  id: string;
  labelEn: string;
  labelUr: string;
  icon: React.ComponentType<any>;
  path: string;
}

export interface DiseaseAnalysis {
  possibleConditions: Array<{
    name: string;
    probability: string;
    description: string;
  }>;
  immediateActions: string[];
  preventiveMeasures: string[];
}

export interface FeedPlan {
  dailyPlan: Array<{
    timeOfDay: string;
    item: string;
    quantity: string;
    notes: string;
  }>;
  nutritionalSummary: string;
  tips: string[];
}

export interface ImageAnalysisResult {
  suggestedBreed: string;
  confidence: number;
  reasoning: string;
  visualTraits: string[];
}

export interface BreedInfo {
  origin: string;
  purpose: string;
  weight: string;
  milk: { daily: string; lactation: string; fat: string };
  appearance: { color: string; structure: string };
  temperament: string;
  care: { diet: string; housing: string; climate: string };
  growthRate: string;
  breedingInfo: string;
  specialTraits: string[];
}

export interface StaticBreedData {
  id: string;
  nameEn: string;
  nameUr: string;
  aliases?: string[];
  type: 'Cow' | 'Buffalo' | 'Goat' | 'Sheep' | 'Camel';
  en: BreedInfo;
  ur: BreedInfo;
}

export type FodderCategory = 'Green Fodder' | 'Dry Fodder' | 'Concentrate' | 'Mineral';

export interface FodderNutrition {
  energy: string;
  protein: string;
  fiber: string;
  minerals: string;
}

export interface FodderDetail {
  nutrition: FodderNutrition;
  benefits: string[];
  suitableAnimals: string[];
  feedingMethod: string;
  source: string;
  cultivation: string;
  processing: string;
  precautions: string;
  season: string;
}

export interface FodderItem {
  id: string;
  nameEn: string;
  nameUr: string;
  category: FodderCategory;
  en: FodderDetail;
  ur: FodderDetail;
}

export interface BodySystemContent {
  overview: string;
  organs: string[];
  functions: string[];
  commonProblems: string[];
  careTips: string[];
  nutritionRelation?: string;
}

export interface BodySystem {
  id: string;
  titleEn: string;
  titleUr: string;
  color: string;
  iconName: string;
  en: BodySystemContent;
  ur: BodySystemContent;
}

// Fix: Added missing FarmingGuide interface required by ContentContext and AdminDashboard
export interface FarmingGuide {
  id: string;
  titleEn: string;
  titleUr: string;
  category: string;
  contentEn: string;
  contentUr: string;
}
