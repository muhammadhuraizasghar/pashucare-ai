import { FodderItem } from '../types';

export const fodderData: FodderItem[] = [
  // --- GREEN FODDER ---
  {
    id: 'berseem',
    nameEn: 'Berseem (Egyptian Clover)',
    nameUr: 'برسیم',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High (TDN 60-65%)',
        protein: '15-20% (High)',
        fiber: '20-25%',
        minerals: 'Rich in Calcium & Phosphorus'
      },
      benefits: ['Increases milk production significantly', 'Highly palatable and digestible', 'Good for growth'],
      suitableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
      feedingMethod: 'Chop and mix with dry fodder (wheat straw) to prevent bloating.',
      source: 'Farm grown (Winter crop)',
      cultivation: 'Sowing: Oct-Nov. Soil: Loam/Clay. Harvest: Multiple cuts from Dec to May.',
      processing: 'Use fresh. Can be made into Hay.',
      precautions: 'Do not feed wet/dewy early morning (causes Bloat). Mix with dry straw.',
      season: 'Winter / Spring'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ (TDN 60-65%)',
        protein: '15-20% (زیادہ)',
        fiber: '20-25%',
        minerals: 'کیلشیم اور فاسفورس سے بھرپور'
      },
      benefits: ['دودھ کی پیداوار میں نمایاں اضافہ کرتا ہے', 'لذیذ اور جلد ہضم ہونے والا', 'نشوونما کے لیے بہترین'],
      suitableAnimals: ['گائے', 'بھینس', 'بکری', 'بھیڑ'],
      feedingMethod: 'کاٹ کر توڑی (بھوسے) کے ساتھ ملا کر کھلائیں تاکہ اپھارہ نہ ہو۔',
      source: 'کھیت کی پیداوار (سردیوں کی فصل)',
      cultivation: 'بوائی: اکتوبر-نومبر۔ مٹی: میرا/چکنی۔ کٹائی: دسمبر سے مئی تک کئی کٹائیاں۔',
      processing: 'تازہ استعمال کریں۔ ہے (Hay) بنائی جا سکتی ہے۔',
      precautions: 'صبح سویرے شبنم والا چارہ نہ کھلائیں (اپھارہ ہو سکتا ہے)۔ خشک توڑی ملائیں۔',
      season: 'سردی / بہار'
    }
  },
  {
    id: 'lucerne',
    nameEn: 'Lucerne (Alfalfa)',
    nameUr: 'لوسرن',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'Medium',
        protein: '18-22% (Very High)',
        fiber: '20-25%',
        minerals: 'High Calcium'
      },
      benefits: ['Queen of Fodders', 'Promotes rapid growth', 'Increases milk protein'],
      suitableAnimals: ['Cow', 'Buffalo', 'Horse', 'Goat'],
      feedingMethod: 'Feed green or as Hay. Avoid overfeeding to horses.',
      source: 'Farm grown (Perennial)',
      cultivation: 'Sowing: Oct-Nov. Lasts for 3-4 years.',
      processing: 'Excellent for Hay making.',
      precautions: 'Can cause bloat if fed alone in large quantities.',
      season: 'Year-round (Best in Spring/Autumn)'
    },
    ur: {
      nutrition: {
        energy: 'درمیانی',
        protein: '18-22% (بہت زیادہ)',
        fiber: '20-25%',
        minerals: 'کیلشیم کی زیادتی'
      },
      benefits: ['چارے کی ملکہ', 'تیز نشوونما', 'دودھ میں پروٹین بڑھاتی ہے'],
      suitableAnimals: ['گائے', 'بھینس', 'گھوڑا', 'بکری'],
      feedingMethod: 'سبز یا "ہے" (Hay) بنا کر کھلائیں۔',
      source: 'کھیت کی پیداوار (کثیر سالہ)',
      cultivation: 'بوائی: اکتوبر-نومبر۔ 3-4 سال تک چلتی ہے۔',
      processing: '"ہے" (Hay) بنانے کے لیے بہترین۔',
      precautions: 'زیادہ مقدار میں اکیلی کھلانے سے اپھارہ ہو سکتا ہے۔',
      season: 'سارا سال (بہار/خزاں میں بہترین)'
    }
  },
  {
    id: 'maize_green',
    nameEn: 'Maize Fodder (Corn)',
    nameUr: 'مکئی کا چارہ',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High (TDN 65-70%)',
        protein: '8-10% (Moderate)',
        fiber: '25-30%',
        minerals: 'Moderate'
      },
      benefits: ['Excellent energy source', 'High digestibility', 'Boosts weight gain'],
      suitableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep', 'Camel'],
      feedingMethod: 'Chop (kutra) and feed fresh or mix with silage.',
      source: 'Farm grown (Summer/Autumn)',
      cultivation: 'Sowing: Feb-Sep. Needs fertile soil and water.',
      processing: 'Best for making Silage (Achar).',
      precautions: 'Avoid feeding very young plants (Nitrate toxicity risk).',
      season: 'Summer / Kharif'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ (TDN 65-70%)',
        protein: '8-10% (درمیانی)',
        fiber: '25-30%',
        minerals: 'درمیانی'
      },
      benefits: ['توانائی کا بہترین ذریعہ', 'ہاضمے کے لیے بہترین', 'وزن بڑھانے میں مددگار'],
      suitableAnimals: ['گائے', 'بھینس', 'بکری', 'بھیڑ', 'اونٹ'],
      feedingMethod: 'کٹرا کر کے تازہ کھلائیں یا سائلج بنائیں۔',
      source: 'کھیت کی پیداوار (گرمیاں)',
      cultivation: 'بوائی: فروری تا ستمبر۔ زرخیز زمین اور پانی کی ضرورت ہے۔',
      processing: 'سائلج (آچار) بنانے کے لیے بہترین ہے۔',
      precautions: 'بہت چھوٹی فصل نہ کھلائیں (نائٹریٹ کے زہر کا خطرہ)۔',
      season: 'گرمی / خریف'
    }
  },
  {
    id: 'jowar',
    nameEn: 'Jowar (Sorghum)',
    nameUr: 'جوار',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High (TDN 60%)',
        protein: '7-9%',
        fiber: '28-30%',
        minerals: 'Moderate'
      },
      benefits: ['Drought tolerant', 'Good energy source for dairy animals', 'High biomass yield'],
      suitableAnimals: ['Cow', 'Buffalo', 'Camel'],
      feedingMethod: 'Chop and feed. Can be fed at 50% flowering stage.',
      source: 'Farm grown (Summer crop)',
      cultivation: 'Sowing: March-July. Heat tolerant.',
      processing: 'Can be used for Silage or Hay.',
      precautions: 'Young plants (< 2-3 feet) contain Prussic Acid (Poison). Do not feed before rain/irrigation if stressed.',
      season: 'Summer / Kharif'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ (TDN 60%)',
        protein: '7-9%',
        fiber: '28-30%',
        minerals: 'درمیانی'
      },
      benefits: ['خشک سالی برداشت کرنے والا', 'دودھ والے جانوروں کے لیے توانائی کا ذریعہ', 'زیادہ پیداوار'],
      suitableAnimals: ['گائے', 'بھینس', 'اونٹ'],
      feedingMethod: 'کاٹ کر کھلائیں۔ 50 فیصد پھول آنے پر بہترین ہے۔',
      source: 'کھیت کی پیداوار (موسم گرما)',
      cultivation: 'بوائی: مارچ-جولائی۔ گرمی برداشت کرتا ہے۔',
      processing: 'سائلج یا ہے (Hay) بنایا جا سکتا ہے۔',
      precautions: 'چھوٹے پودوں (2-3 فٹ سے کم) میں زہر (Prussic Acid) ہوتا ہے۔ سوکھے کے بعد بارش/پانی لگنے سے پہلے نہ کھلائیں۔',
      season: 'گرمی / خریف'
    }
  },
  {
    id: 'sugarcane_fodder',
    nameEn: 'Sugarcane Fodder (Kamad)',
    nameUr: 'کماد (گنا)',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'Very High (Sugar)',
        protein: 'Low (4-5%)',
        fiber: 'High',
        minerals: 'Low'
      },
      benefits: ['Provides quick energy', 'Available in winter when green fodder is scarce', 'Palatable'],
      suitableAnimals: ['Buffalo', 'Cow'],
      feedingMethod: 'Chop finely. MUST mix with protein source (Oil cake/Khal) due to low protein.',
      source: 'Farm grown',
      cultivation: 'Annual crop.',
      processing: 'Use tops (agola) or whole plant.',
      precautions: 'Excessive feeding leads to fattening rather than milk. Low protein content.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'بہت زیادہ (چینی)',
        protein: 'کم (4-5%)',
        fiber: 'زیادہ',
        minerals: 'کم'
      },
      benefits: ['فوری توانائی فراہم کرتا ہے', 'سردیوں میں دستیاب جب چارہ کم ہو', 'مزیدار'],
      suitableAnimals: ['بھینس', 'گائے'],
      feedingMethod: 'باریک کتریں۔ کم پروٹین کی وجہ سے کھل یا ونڈے کے ساتھ ملا کر کھلانا لازمی ہے۔',
      source: 'کھیت کی پیداوار',
      cultivation: 'سالانہ فصل۔',
      processing: 'آگولا یا پورا پودا استعمال کریں۔',
      precautions: 'زیادہ کھلانے سے جانور صرف موٹا ہوتا ہے، دودھ نہیں بڑھتا۔ پروٹین کم ہے۔',
      season: 'سردی'
    }
  },
  {
    id: 'green_wheat',
    nameEn: 'Green Wheat Fodder',
    nameUr: 'سبز گندم',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High',
        protein: '12-14%',
        fiber: 'Medium',
        minerals: 'Balanced'
      },
      benefits: ['Highly nutritious', 'Digestible', 'Boosts milk yield'],
      suitableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
      feedingMethod: 'Cut before grain formation (milking stage).',
      source: 'Farm grown (Winter)',
      cultivation: 'Sowing: Oct-Dec. Standard wheat practice.',
      processing: 'Fresh chop.',
      precautions: 'Harvesting too late reduces nutritional value.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '12-14%',
        fiber: 'درمیانی',
        minerals: 'متوازن'
      },
      benefits: ['انتہائی غذائیت سے بھرپور', 'جلد ہضم', 'دودھ کی پیداوار بڑھاتا ہے'],
      suitableAnimals: ['گائے', 'بھینس', 'بکری', 'بھیڑ'],
      feedingMethod: 'دانہ بننے سے پہلے کاٹ لیں۔',
      source: 'کھیت کی پیداوار (سردیاں)',
      cultivation: 'بوائی: اکتوبر-دسمبر۔ عام گندم کی طرح۔',
      processing: 'تازہ کاٹ کر۔',
      precautions: 'بہت دیر سے کٹائی کرنے پر غذائیت کم ہو جاتی ہے۔',
      season: 'سردی'
    }
  },
  {
    id: 'bajra',
    nameEn: 'Bajra (Pearl Millet)',
    nameUr: 'باجرہ',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High',
        protein: '8-10%',
        fiber: '28-30%',
        minerals: 'Moderate'
      },
      benefits: ['Fast growing', 'Suitable for sandy/dry areas', 'Good maintenance fodder'],
      suitableAnimals: ['Cow', 'Buffalo', 'Sheep', 'Goat'],
      feedingMethod: 'Chop and mix with water/salt.',
      source: 'Farm grown',
      cultivation: 'Sowing: April-July. Drought resistant.',
      processing: 'Silage can be made.',
      precautions: 'Hard stem if harvested late.',
      season: 'Summer'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '8-10%',
        fiber: '28-30%',
        minerals: 'درمیانی'
      },
      benefits: ['تیز نشوونما', 'ریتلی زمین کے لیے موزوں', 'جانور پالنے کے لیے اچھا'],
      suitableAnimals: ['گائے', 'بھینس', 'بھیڑ', 'بکری'],
      feedingMethod: 'کاٹ کر پانی/نمک کے ساتھ دیں۔',
      source: 'کھیت کی پیداوار',
      cultivation: 'بوائی: اپریل-جولائی۔ خشک سالی برداشت کرتا ہے۔',
      processing: 'سائلج بنایا جا سکتا ہے۔',
      precautions: 'دیر سے کاٹنے پر تنا سخت ہو جاتا ہے۔',
      season: 'گرمی'
    }
  },
  {
    id: 'joodar',
    nameEn: 'Sorghum Fodder (Joodar/Oats)',
    nameUr: 'جودر (جوی)',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High',
        protein: '10-12%',
        fiber: 'Medium',
        minerals: 'Phosphorus rich'
      },
      benefits: ['Excellent winter fodder', 'Soft and sweet', 'Increases milk flow'],
      suitableAnimals: ['Cow', 'Buffalo', 'Horse'],
      feedingMethod: 'Feed green or make Hay.',
      source: 'Farm grown',
      cultivation: 'Sowing: Oct-Nov (Winter crop).',
      processing: 'Hay making is popular.',
      precautions: 'Can cause nitrate poisoning if over-fertilized.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '10-12%',
        fiber: 'درمیانی',
        minerals: 'فاسفورس سے بھرپور'
      },
      benefits: ['بہترین موسم سرما کا چارہ', 'نرم اور میٹھا', 'دودھ بڑھاتا ہے'],
      suitableAnimals: ['گائے', 'بھینس', 'گھوڑا'],
      feedingMethod: 'سبز کھلائیں یا "ہے" بنائیں۔',
      source: 'کھیت کی پیداوار',
      cultivation: 'بوائی: اکتوبر-نومبر (سردیوں کی فصل)۔',
      processing: '"ہے" (Hay) بنانا مقبول ہے۔',
      precautions: 'زیادہ کھاد سے نائٹریٹ کا مسئلہ ہو سکتا ہے۔',
      season: 'سردی'
    }
  },
  {
    id: 'mustard_fodder',
    nameEn: 'Mustard Fodder (Sarson)',
    nameUr: 'سرسوں کا چارہ',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'Medium',
        protein: '12-14%',
        fiber: 'Low',
        minerals: 'Calcium rich'
      },
      benefits: ['Digestive tonic', 'Warms the body in winter', 'Oil content helps skin'],
      suitableAnimals: ['Cow', 'Buffalo'],
      feedingMethod: 'Mix with dry fodder (wheat straw) to balance taste.',
      source: 'Farm grown',
      cultivation: 'Sowing: Sep-Oct.',
      processing: 'Fresh use.',
      precautions: 'Excessive feeding gives a peculiar smell to milk.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'درمیانی',
        protein: '12-14%',
        fiber: 'کم',
        minerals: 'کیلشیم سے بھرپور'
      },
      benefits: ['ہاضمے کے لیے مفید', 'سردیوں میں جسم گرم رکھتا ہے', 'تیل کی وجہ سے کھال چمکدار'],
      suitableAnimals: ['گائے', 'بھینس'],
      feedingMethod: 'خشک توڑی کے ساتھ ملا کر کھلائیں۔',
      source: 'کھیت کی پیداوار',
      cultivation: 'بوائی: ستمبر-اکتوبر۔',
      processing: 'تازہ استعمال۔',
      precautions: 'زیادہ کھلانے سے دودھ میں مہک آ سکتی ہے۔',
      season: 'سردی'
    }
  },
  {
    id: 'saag',
    nameEn: 'Saag (Leafy Greens)',
    nameUr: 'ساگ',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'Low',
        protein: 'Medium',
        fiber: 'Low',
        minerals: 'High Vitamins'
      },
      benefits: ['Source of vitamins', 'Laxative effect', 'Appetizer'],
      suitableAnimals: ['Goat', 'Sheep', 'Cow'],
      feedingMethod: 'Feed fresh in small quantities.',
      source: 'Farm',
      cultivation: 'Winter vegetables.',
      processing: 'None.',
      precautions: 'Do not feed rotten or chemically sprayed leaves.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'کم',
        protein: 'درمیانی',
        fiber: 'کم',
        minerals: 'وٹامنز سے بھرپور'
      },
      benefits: ['وٹامنز کا ذریعہ', 'قبض کشا', 'بھوک بڑھاتا ہے'],
      suitableAnimals: ['بکری', 'بھیڑ', 'گائے'],
      feedingMethod: 'تھوڑی مقدار میں تازہ کھلائیں۔',
      source: 'کھیت',
      cultivation: 'سردیوں کی سبزیاں۔',
      processing: 'کوئی نہیں۔',
      precautions: 'گلے سڑے یا سپرے والے پتے نہ کھلائیں۔',
      season: 'سردی'
    }
  },
  {
    id: 'rhodes_grass',
    nameEn: 'Rhodes Grass',
    nameUr: 'روڑ گراس',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'Medium',
        protein: '9-12%',
        fiber: '30%',
        minerals: 'Moderate'
      },
      benefits: ['Perennial (lasts years)', 'Salt tolerant', 'Good hay quality'],
      suitableAnimals: ['Cow', 'Buffalo', 'Horse', 'Goat'],
      feedingMethod: 'Grazing or cut-and-carry.',
      source: 'Farm grown',
      cultivation: 'Sowing: Feb-March or monsoon. Saline soils okay.',
      processing: 'Excellent for Hay.',
      precautions: 'Needs regular water for good yield.',
      season: 'All Seasons (except extreme cold)'
    },
    ur: {
      nutrition: {
        energy: 'درمیانی',
        protein: '9-12%',
        fiber: '30%',
        minerals: 'درمیانی'
      },
      benefits: ['کثیر سالہ (کئی سال چلتی ہے)', 'کلراٹھی زمین میں اگتی ہے', 'اچھی "ہے" بنتی ہے'],
      suitableAnimals: ['گائے', 'بھینس', 'گھوڑا', 'بکری'],
      feedingMethod: 'چرائی یا کاٹ کر۔',
      source: 'کھیت کی پیداوار',
      cultivation: 'بوائی: فروری-مارچ یا برسات۔ نمکین زمین کے لیے موزوں۔',
      processing: '"ہے" کے لیے بہترین۔',
      precautions: 'اچھی پیداوار کے لیے باقاعدہ پانی کی ضرورت ہے۔',
      season: 'تمام موسم'
    }
  },
  {
    id: 'super_napier',
    nameEn: 'Super Napier Grass',
    nameUr: 'سپر نیپئر گراس',
    category: 'Green Fodder',
    en: {
      nutrition: {
        energy: 'High',
        protein: '14-16% (High for grass)',
        fiber: '28%',
        minerals: 'Good'
      },
      benefits: ['Highest biomass yield', 'Fastest growing', 'Soft stem'],
      suitableAnimals: ['Cow', 'Buffalo'],
      feedingMethod: 'Chop and feed.',
      source: 'Farm grown',
      cultivation: 'Planting cuttings. Perennial (5-7 years).',
      processing: 'Silage.',
      precautions: 'Harvest at 45-60 days to avoid hardening.',
      season: 'Year-round'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '14-16% (زیادہ)',
        fiber: '28%',
        minerals: 'اچھی'
      },
      benefits: ['سب سے زیادہ پیداوار', 'تیز ترین نشوونما', 'نرم تنا'],
      suitableAnimals: ['گائے', 'بھینس'],
      feedingMethod: 'کتر کر کھلائیں۔',
      source: 'کھیت کی پیداوار',
      cultivation: 'قلمیں لگائی جاتی ہیں۔ 5-7 سال تک چلتی ہے۔',
      processing: 'سائلج۔',
      precautions: 'سخت ہونے سے بچنے کے لیے 45-60 دن میں کاٹ لیں۔',
      season: 'سارا سال'
    }
  },

  // --- DRY FODDER ---
  {
    id: 'wheat_straw',
    nameEn: 'Wheat Straw',
    nameUr: 'گندم کی توڑی',
    category: 'Dry Fodder',
    en: {
      nutrition: {
        energy: 'Low',
        protein: '0-2% (Very Low)',
        fiber: 'High (35-40%)',
        minerals: 'Low'
      },
      benefits: ['Provides bulk/fill to stomach', 'Essential for digestion (rumination)', 'Cheap filler'],
      suitableAnimals: ['All Ruminants'],
      feedingMethod: 'Must mix with green fodder or concentrates (Sani).',
      source: 'By-product of Wheat crop',
      cultivation: 'Harvested in April/May.',
      processing: 'Stored dry in stacks.',
      precautions: 'Low nutritional value. Do not rely on straw alone.',
      season: 'All Seasons'
    },
    ur: {
      nutrition: {
        energy: 'کم',
        protein: '0-2% (بہت کم)',
        fiber: 'زیادہ (35-40%)',
        minerals: 'کم'
      },
      benefits: ['پیٹ بھرنے کے لیے', 'ہاضمے (جگالی) کے لیے ضروری', 'سستا ذریعہ'],
      suitableAnimals: ['تمام جگالی کرنے والے جانور'],
      feedingMethod: 'سبز چارے یا ونڈے کے ساتھ ملا کر (ثانی بنا کر) کھلائیں۔',
      source: 'گندم کی فصل کی باقیات',
      cultivation: 'اپریل/مئی میں کٹائی ہوتی ہے۔',
      processing: 'خشک ذخیرہ کیا جاتا ہے۔',
      precautions: 'غذائیت کم ہوتی ہے۔ صرف توڑی پر انحصار نہ کریں۔',
      season: 'تمام موسم'
    }
  },
  {
    id: 'rice_straw',
    nameEn: 'Rice Straw / Paddy Straw',
    nameUr: 'دھان کی پرالی',
    category: 'Dry Fodder',
    en: {
      nutrition: {
        energy: 'Low',
        protein: '1-2%',
        fiber: 'High (Silica rich)',
        minerals: 'Poor'
      },
      benefits: ['Cheap availability in rice areas', 'Filler feed'],
      suitableAnimals: ['Buffalo'],
      feedingMethod: 'Treat with Urea (4%) to improve digestibility. Chop well.',
      source: 'Rice fields',
      cultivation: 'Harvested Oct-Nov.',
      processing: 'Urea treatment recommended.',
      precautions: 'High Silica and Oxalates can block digestion. Do not feed as sole roughage.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'کم',
        protein: '1-2%',
        fiber: 'زیادہ (سلیکا)',
        minerals: 'کم'
      },
      benefits: ['چاول کے علاقوں میں سستی دستیابی', 'پیٹ بھرنے کے لیے'],
      suitableAnimals: ['بھینس'],
      feedingMethod: 'یوریا (4 فیصد) سے ٹریٹمنٹ کر کے ہاضمہ بہتر کریں۔ اچھی طرح کتریں۔',
      source: 'چاول کے کھیت',
      cultivation: 'کٹائی: اکتوبر-نومبر۔',
      processing: 'یوریا ٹریٹمنٹ تجویز کی جاتی ہے۔',
      precautions: 'سلیکا اور آکسیلیٹ ہاضمے کو روک سکتے ہیں۔ صرف پرالی نہ کھلائیں۔',
      season: 'سردی'
    }
  },
  {
    id: 'silage',
    nameEn: 'Silage',
    nameUr: 'سیلج (آچار)',
    category: 'Dry Fodder',
    en: {
      nutrition: {
        energy: 'High',
        protein: '8-9% (Maize)',
        fiber: 'Medium',
        minerals: 'Preserved'
      },
      benefits: ['Fodder availability during shortage', 'Consistent quality', 'Increases milk yield'],
      suitableAnimals: ['Cow', 'Buffalo'],
      feedingMethod: 'Introduce gradually. 20-30kg per animal.',
      source: 'Farm preserved / Market',
      cultivation: 'Made from Maize/Sorghum.',
      processing: 'Fermented anaerobically (air-tight) for 40 days.',
      precautions: 'Fungus/Mold is dangerous. Close pit immediately after taking out feed.',
      season: 'All Seasons'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '8-9% (مکئی)',
        fiber: 'درمیانی',
        minerals: 'محفوظ'
      },
      benefits: ['چارے کی کمی میں دستیابی', 'مستقل معیار', 'دودھ کی پیداوار بڑھاتا ہے'],
      suitableAnimals: ['گائے', 'بھینس'],
      feedingMethod: 'آہستہ آہستہ شروع کریں۔ 20-30 کلو فی جانور۔',
      source: 'فارم پر تیار / مارکیٹ',
      cultivation: 'مکئی/جوار سے بنایا جاتا ہے۔',
      processing: 'ہوا بند گڑھے میں 40 دن تک خمیر کیا جاتا ہے۔',
      precautions: 'فنگس/پھپھوندی خطرناک ہے۔ خوراک نکالنے کے فوراً بعد گڑھا بند کریں۔',
      season: 'تمام موسم'
    }
  },

  // --- CONCENTRATES ---
  {
    id: 'cotton_seed_cake',
    nameEn: 'Cotton Seed Cake',
    nameUr: 'کھل بنولہ',
    category: 'Concentrate',
    en: {
      nutrition: {
        energy: 'High',
        protein: '20-25%',
        fiber: '10-12%',
        minerals: 'Phosphorus rich'
      },
      benefits: ['Increases Milk Fat (Butterfat)', 'Standard protein source', 'Readily available'],
      suitableAnimals: ['Buffalo', 'Cow'],
      feedingMethod: 'Soak in water for 2-3 hours before feeding or feed dry.',
      source: 'Oil Mills / Market',
      cultivation: 'N/A (Industrial)',
      processing: 'By-product of cotton oil extraction.',
      precautions: 'Check for fungus (Aflatoxin) if stored badly.',
      season: 'All Seasons'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '20-25%',
        fiber: '10-12%',
        minerals: 'فاسفورس سے بھرپور'
      },
      benefits: ['دودھ کی چکنائی (فیٹ) بڑھاتی ہے', 'پروٹین کا معیاری ذریعہ', 'آسانی سے دستیاب'],
      suitableAnimals: ['بھینس', 'گائے'],
      feedingMethod: 'کھلانے سے 2-3 گھنٹے پہلے پانی میں بھگو دیں یا خشک کھلائیں۔',
      source: 'آئل ملز / مارکیٹ',
      cultivation: 'N/A (صنعتی)',
      processing: 'کپاس سے تیل نکالنے کے بعد حاصل ہوتی ہے۔',
      precautions: 'اگر غلط ذخیرہ ہو تو فنگس (افلا ٹاکسن) چیک کریں۔',
      season: 'تمام موسم'
    }
  },
  {
    id: 'mustard_cake',
    nameEn: 'Mustard Oil Cake',
    nameUr: 'سرسوں کی کھل',
    category: 'Concentrate',
    en: {
      nutrition: {
        energy: 'High',
        protein: '30-35% (Very High)',
        fiber: 'Low',
        minerals: 'Calcium/Phosphorus'
      },
      benefits: ['Cheaper protein source', 'Warms body', 'Shiny coat'],
      suitableAnimals: ['Cow', 'Buffalo'],
      feedingMethod: 'MUST SOAK in water overnight to remove bitterness (pungency).',
      source: 'Oil Mills',
      cultivation: 'N/A',
      processing: 'By-product of mustard oil.',
      precautions: 'Bitter taste if not soaked. Can cause goiter if fed excessively without iodine.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '30-35% (بہت زیادہ)',
        fiber: 'کم',
        minerals: 'کیلشیم/فاسفورس'
      },
      benefits: ['سستا پروٹین ذریعہ', 'جسم گرم رکھتی ہے', 'چمکدار کھال'],
      suitableAnimals: ['گائے', 'بھینس'],
      feedingMethod: 'کڑواہٹ ختم کرنے کے لیے رات بھر پانی میں بھگونا لازمی ہے۔',
      source: 'آئل ملز',
      cultivation: 'N/A',
      processing: 'سرسوں کے تیل کا ضمنی پروڈکٹ۔',
      precautions: 'اگر نہ بھگوئی جائے تو کڑوی ہوتی ہے۔',
      season: 'سردی'
    }
  },
  {
    id: 'halla',
    nameEn: 'Halla Feed (Compound)',
    nameUr: 'ہالہ (مکس فیڈ)',
    category: 'Concentrate',
    en: {
      nutrition: {
        energy: 'Medium',
        protein: '10-12%',
        fiber: 'High (Hulls)',
        minerals: 'Low'
      },
      benefits: ['Economical filler', 'Provides fiber and energy', 'Readily eaten'],
      suitableAnimals: ['Buffalo', 'Cow'],
      feedingMethod: 'Mix with cotton seed cake or grains.',
      source: 'Feed Mills',
      cultivation: 'N/A',
      processing: 'Mix of Cottonseed hulls, bran, and molasses.',
      precautions: 'Low protein. Do not use as sole ration for high milkers.',
      season: 'All Seasons'
    },
    ur: {
      nutrition: {
        energy: 'درمیانی',
        protein: '10-12%',
        fiber: 'زیادہ',
        minerals: 'کم'
      },
      benefits: ['سستا ذریعہ', 'فائبر اور توانائی فراہم کرتا ہے', 'جانور شوق سے کھاتے ہیں'],
      suitableAnimals: ['بھینس', 'گائے'],
      feedingMethod: 'کھل بنولہ یا دلیہ کے ساتھ ملا کر دیں۔',
      source: 'فیڈ ملز',
      cultivation: 'N/A',
      processing: 'چھلکا، چوکر اور گڑ کا مرکب۔',
      precautions: 'پروٹین کم ہے۔ زیادہ دودھ والے جانوروں کے لیے اکیلا کافی نہیں۔',
      season: 'تمام موسم'
    }
  },
  {
    id: 'linseed_cake',
    nameEn: 'Linseed Cake (Alsi)',
    nameUr: 'السی کی کھل',
    category: 'Concentrate',
    en: {
      nutrition: {
        energy: 'High',
        protein: '30%',
        fiber: '9%',
        minerals: 'Good'
      },
      benefits: ['Excellent for skin/coat health', 'High protein', 'Laxative (aids digestion)'],
      suitableAnimals: ['Show Animals', 'Horses', 'Calves'],
      feedingMethod: 'Soak and feed.',
      source: 'Market',
      cultivation: 'N/A',
      processing: 'Oil extraction by-product.',
      precautions: 'Immature linseed can be toxic. Use processed cake.',
      season: 'Winter'
    },
    ur: {
      nutrition: {
        energy: 'زیادہ',
        protein: '30%',
        fiber: '9%',
        minerals: 'اچھی'
      },
      benefits: ['کھال/جلد کی صحت کے لیے بہترین', 'اعلی پروٹین', 'ہاضمہ بہتر کرتی ہے'],
      suitableAnimals: ['نمائشی جانور', 'گھوڑے', 'بچھڑے'],
      feedingMethod: 'بھگو کر کھلائیں۔',
      source: 'مارکیٹ',
      cultivation: 'N/A',
      processing: 'تیل نکالنے کے بعد۔',
      precautions: 'کچی السی زہریلی ہو سکتی ہے۔ صرف کھل استعمال کریں۔',
      season: 'سردی'
    }
  },
  {
    id: 'maize_grain',
    nameEn: 'Maize Grain (Dalia)',
    nameUr: 'مکئی کا دلیہ',
    category: 'Concentrate',
    en: {
      nutrition: {
        energy: 'Very High (TDN 80%)',
        protein: '8-9%',
        fiber: '2%',
        minerals: 'Low'
      },
      benefits: ['Instant energy', 'Good for weak animals', 'Supports high milk yield'],
      suitableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
      feedingMethod: 'Crush (Dalia) and mix in feed. Do not feed whole grains.',
      source: 'Market / Farm',
      cultivation: 'Farm Crop',
      processing: 'Grinding/Crushing required.',
      precautions: 'Excessive feeding causes Acidosis (tezaabiyat).',
      season: 'Winter (Energy)'
    },
    ur: {
      nutrition: {
        energy: 'بہت زیادہ (TDN 80%)',
        protein: '8-9%',
        fiber: '2%',
        minerals: 'کم'
      },
      benefits: ['فوری توانائی', 'کمزور جانوروں کے لیے مفید', 'دودھ کی پیداوار میں مددگار'],
      suitableAnimals: ['گائے', 'بھینس', 'بکری', 'بھیڑ'],
      feedingMethod: 'دلیہ بنا کر کھلائیں۔ ثابت دانے نہ کھلائیں۔',
      source: 'مارکیٹ / فارم',
      cultivation: 'کھیت کی فصل',
      processing: 'پیسنا ضروری ہے۔',
      precautions: 'زیادہ کھلانے سے تیزابیت (Acidosis) ہو سکتی ہے۔',
      season: 'سردی (توانائی کے لیے)'
    }
  },

  // --- MINERALS ---
  {
    id: 'min_mixture',
    nameEn: 'Mineral Mixture',
    nameUr: 'منرل مکسچر',
    category: 'Mineral',
    en: {
      nutrition: {
        energy: 'Nil',
        protein: 'Nil',
        fiber: 'Nil',
        minerals: 'Balanced Ca, P, Zn, Cu, etc.'
      },
      benefits: ['Improves fertility', 'Strengthens bones', 'Prevents Pica (eating mud)'],
      suitableAnimals: ['All Animals'],
      feedingMethod: '50-100g daily per large animal mixed in feed.',
      source: 'Veterinary Stores',
      cultivation: 'N/A',
      processing: 'Industrial mix.',
      precautions: 'Keep dry.',
      season: 'All Seasons'
    },
    ur: {
      nutrition: {
        energy: 'صفر',
        protein: 'صفر',
        fiber: 'صفر',
        minerals: 'متوازن کیلشیم، فاسفورس وغیرہ'
      },
      benefits: ['زرخیزی (حمل) میں بہتری', 'ہڈیاں مضبوط کرتا ہے', 'مٹی کھانے کی عادت ختم کرتا ہے'],
      suitableAnimals: ['تمام جانور'],
      feedingMethod: '50-100 گرام روزانہ بڑے جانور کو خوراک میں ملا کر دیں۔',
      source: 'ویٹرنری اسٹورز',
      cultivation: 'N/A',
      processing: 'صنعتی مکسچر۔',
      precautions: 'خشک رکھیں۔',
      season: 'تمام موسم'
    }
  },
  {
    id: 'salt_block',
    nameEn: 'Salt Lick (Lahori Namak)',
    nameUr: 'نمک کا ڈھیلا (لاہوری نمک)',
    category: 'Mineral',
    en: {
      nutrition: {
        energy: 'Nil',
        protein: 'Nil',
        fiber: 'Nil',
        minerals: 'Sodium Chloride'
      },
      benefits: ['Increases water intake', 'Improves digestion', 'Essential for life'],
      suitableAnimals: ['All Animals'],
      feedingMethod: 'Place block in manger (khurli) for free licking.',
      source: 'Market',
      cultivation: 'Mined',
      processing: 'Natural blocks.',
      precautions: 'Ensure plenty of drinking water is available.',
      season: 'All Seasons'
    },
    ur: {
      nutrition: {
        energy: 'صفر',
        protein: 'صفر',
        fiber: 'صفر',
        minerals: 'سوڈیم کلورائیڈ'
      },
      benefits: ['پانی پینے کی مقدار بڑھاتا ہے', 'ہاضمہ بہتر کرتا ہے', 'زندگی کے لیے ضروری'],
      suitableAnimals: ['تمام جانور'],
      feedingMethod: 'کھرلی میں چاٹنے کے لیے رکھ دیں۔',
      source: 'مارکیٹ',
      cultivation: 'کان کنی',
      processing: 'قدرتی ٹکڑے۔',
      precautions: 'یقینی بنائیں کہ پینے کا پانی وافر مقدار میں موجود ہو۔',
      season: 'تمام موسم'
    }
  }
];