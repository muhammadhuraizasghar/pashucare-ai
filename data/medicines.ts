
import { Medicine } from '../types';

export const medicines: Medicine[] = [
  // --- 1. ANTIBIOTICS ---
  {
    id: 'oxytetracycline',
    nameEn: 'Oxytetracycline',
    nameUr: 'آکسی ٹیٹراسائیکلین',
    saltEn: 'Oxytetracycline Hydrochloride',
    saltUr: 'آکسی ٹیٹراسائیکلین',
    category: 'Antibiotics',
    usedForEn: ['Pneumonia', 'Mastitis', 'Foot Rot', 'Wounds'],
    usedForUr: ['نمونیا', 'ساڑو', 'کھروں کا گلنا', 'زخم'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Cow/Buffalo: 10ml/100kg, Sheep/Goat: 1ml/10kg',
    route: 'I/M, S/C',
    withdrawalPeriod: 'Meat: 28 days, Milk: 7 days',
    guidanceEn: 'Broad-spectrum antibiotic used for respiratory and systemic bacterial infections. Available in Long Acting (LA) form.',
    guidanceUr: 'وسیعی الاثر اینٹی بائیوٹک جو سانس اور جسم کے دیگر بیکٹیریل انفیکشن کے لیے استعمال ہوتی ہے۔ یہ طویل مدتی اثر (LA) کی شکل میں بھی دستیاب ہے۔'
  },
  {
    id: 'pen_strep',
    nameEn: 'Penicillin + Streptomycin',
    nameUr: 'پینسلین + اسٹریپٹو مائیسین',
    saltEn: 'Procaine Penicillin & Streptomycin Sulphate',
    saltUr: 'پینسلین اور اسٹریپٹو مائیسین',
    category: 'Antibiotics',
    usedForEn: ['HS (Gal Ghotu)', 'Anthrax', 'Surgical Wounds', 'Metritis'],
    usedForUr: ['گل گھوٹو', 'ست (اینتھراکس)', 'زخم', 'رحم کی سوزش'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 10-20ml, Small Animal: 2-5ml',
    route: 'I/M Only',
    withdrawalPeriod: 'Meat: 30 days, Milk: 5 days',
    guidanceEn: 'Classic combination for gram-positive and gram-negative bacteria. Effective for throat swelling and severe wounds.',
    guidanceUr: 'گرام پازیٹو اور گرام نیگیٹو جراثیم کے خلاف بہترین مرکب۔ گلے کی سوجن اور گہرے زخموں کے لیے مفید ہے۔'
  },
  {
    id: 'enrofloxacin',
    nameEn: 'Enrofloxacin',
    nameUr: 'اینروفلوکساسین',
    saltEn: 'Enrofloxacin',
    saltUr: 'اینروفلوکساسین',
    category: 'Antibiotics',
    usedForEn: ['Diarrhea', 'Pneumonia', 'Mastitis', 'PPR Support'],
    usedForUr: ['اسہال (ڈائریا)', 'نمونیا', 'ساڑو', 'پی پی آر میں معاون'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '5mg/kg body weight',
    route: 'I/M, S/C, Oral',
    withdrawalPeriod: 'Meat: 10 days, Milk: 4 days',
    guidanceEn: 'Potent antibiotic for gastrointestinal and respiratory tract infections. Often used when other antibiotics fail.',
    guidanceUr: 'معدے، آنتوں اور سانس کی نالی کے انفیکشن کے لیے طاقتور دوا۔ اکثر تب استعمال کی جاتی ہے جب دوسری دوائیں اثر نہ کریں۔'
  },
  {
    id: 'ceftriaxone',
    nameEn: 'Ceftriaxone',
    nameUr: 'سیف ٹرایاکسون',
    saltEn: 'Ceftriaxone Sodium',
    saltUr: 'سیف ٹرایاکسون',
    category: 'Antibiotics',
    usedForEn: ['Severe Mastitis', 'Hemorrhagic Septicemia', 'Uterine Infection', 'Sepsis'],
    usedForUr: ['شدید ساڑو', 'گل گھوٹو', 'رحم کا انفیکشن', 'خون کا انفیکشن'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '5-10mg/kg body weight',
    route: 'I/M, I/V',
    withdrawalPeriod: 'Meat: 7 days, Milk: 2 days',
    guidanceEn: 'Third-generation cephalosporin for critical infections. Highly effective but should be reserved for severe cases.',
    guidanceUr: 'انتہائی شدید انفیکشن کے لیے تیسری نسل کی جدید دوا۔ بہت موثر ہے لیکن صرف سنگین صورتحال میں استعمال کرنی چاہیے۔'
  },
  {
    id: 'gentamicin',
    nameEn: 'Gentamicin',
    nameUr: 'جنٹامائیسین',
    saltEn: 'Gentamicin Sulphate',
    saltUr: 'جنٹامائیسین',
    category: 'Antibiotics',
    usedForEn: ['Metritis', 'Uterine Wash', 'Severe Diarrhea'],
    usedForUr: ['رحم کی سوزش', 'رحم کی صفائی', 'شدید دست'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '4mg/kg body weight',
    route: 'I/M, I/U',
    withdrawalPeriod: 'Meat: 40 days, Milk: 7 days',
    guidanceEn: 'Used for uterine infections and specific bacterial diarrhea. Often used as an intra-uterine wash.',
    guidanceUr: 'رحم کے انفیکشن اور مخصوص دستوں کے لیے استعمال ہوتی ہے۔ اکثر رحم کی صفائی کے لیے محلول کے طور پر استعمال کی جاتی ہے۔'
  },

  // --- 2. ANTI-PARASITIC & DEWORMERS ---
  {
    id: 'ivermectin',
    nameEn: 'Ivermectin',
    nameUr: 'آئیورمیکٹن',
    saltEn: 'Ivermectin',
    saltUr: 'آئیورمیکٹن',
    category: 'Antiparasitic',
    usedForEn: ['Ticks', 'Mange (Itching)', 'Internal Worms', 'Lumpy Skin Disease Support'],
    usedForUr: ['چچڑ', 'کھجلی (مکھ)', 'پیٹ کے کیڑے', 'لمپی سکن میں معاون'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '1ml per 50kg body weight',
    route: 'S/C Only',
    withdrawalPeriod: 'Meat: 35 days, Milk: Do not use in lactating animals',
    guidanceEn: 'Treats both internal worms and external parasites like ticks and mites. Should be given under the skin (S/C).',
    guidanceUr: 'اندرونی کیڑوں اور بیرونی طفیلیوں (چچڑ، جوئیں) دونوں کے لیے مفید ہے۔ اسے کھال کے نیچے ٹیکے کے طور پر لگایا جاتا ہے۔'
  },
  {
    id: 'albendazole',
    nameEn: 'Albendazole',
    nameUr: 'البینڈازول',
    saltEn: 'Albendazole',
    saltUr: 'البینڈازول',
    category: 'Antiparasitic',
    usedForEn: ['Stomach Worms', 'Tapeworms', 'General Deworming'],
    usedForUr: ['معدے کے کیڑے', 'فیتہ کیڑا', 'عام ڈورمنگ'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '5-10mg/kg body weight',
    route: 'Oral',
    withdrawalPeriod: 'Meat: 14 days, Milk: 3 days',
    guidanceEn: 'Oral dewormer for various internal worms. Avoid use during the first 45 days of pregnancy.',
    guidanceUr: 'مختلف اندرونی کیڑوں کے لیے منہ کے ذریعے دی جانے والی دوا۔ حمل کے پہلے 45 دنوں کے دوران استعمال سے پرہیز کریں۔'
  },
  {
    id: 'levamisole',
    nameEn: 'Levamisole',
    nameUr: 'لیوامیسول',
    saltEn: 'Levamisole Hydrochloride',
    saltUr: 'لیوامیسول',
    category: 'Antiparasitic',
    usedForEn: ['Roundworms', 'Lungworms', 'Immune Boosting'],
    usedForUr: ['گول کیڑے', 'پھیپھڑوں کے کیڑے', 'قوت مدافعت بڑھانا'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '7.5mg/kg body weight',
    route: 'Oral, S/C',
    withdrawalPeriod: 'Meat: 7 days, Milk: 3 days',
    guidanceEn: 'Dewormer that also acts as an immune stimulator. Effective against respiratory and gut worms.',
    guidanceUr: 'کیڑے مار دوا جو قوت مدافعت بڑھانے میں بھی مدد دیتی ہے۔ سانس اور آنتوں کے کیڑوں کے خلاف مفید ہے۔'
  },
  {
    id: 'triclabendazole',
    nameEn: 'Triclabendazole',
    nameUr: 'ٹرائیکلا بینڈازول',
    saltEn: 'Triclabendazole',
    saltUr: 'ٹرائیکلا بینڈازول',
    category: 'Antiparasitic',
    usedForEn: ['Liver Fluke (Jigar ke keeray)', 'Fascioliasis'],
    usedForUr: ['جگر کے کیڑے', 'فیسیلوسس'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '10-12mg/kg body weight',
    route: 'Oral',
    withdrawalPeriod: 'Meat: 28 days, Milk: 7 days',
    guidanceEn: 'Specific medicine for liver fluke. Essential for animals grazing in marshy or wet areas.',
    guidanceUr: 'جگر کے کیڑوں کے لیے مخصوص دوا۔ نمی والے علاقوں میں چرنے والے جانوروں کے لیے بہت ضروری ہے۔'
  },
  {
    id: 'diminazene',
    nameEn: 'Diminazene Aceturate',
    nameUr: 'ڈامینازین',
    saltEn: 'Diminazene Aceturate',
    saltUr: 'ڈامینازین',
    category: 'Antiparasitic',
    usedForEn: ['Red Water (Babesiosis)', 'Surra', 'Trypanosomiasis'],
    usedForUr: ['رت موترا (بیبیزیا)', 'سرا (Surra)', 'خون کے طفیلیے'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '3.5mg/kg body weight',
    route: 'Deep I/M',
    withdrawalPeriod: 'Meat: 21 days, Milk: 3 days',
    guidanceEn: 'Specific for blood parasites. Must be given deep intramuscularly. Often used for high fever with red urine.',
    guidanceUr: 'خون کے طفیلیوں کے لیے مخصوص۔ اسے گوشت میں گہرا لگایا جاتا ہے۔ رت موترا اور تیز بخار میں استعمال ہوتی ہے۔'
  },

  // --- 3. FEVER, PAIN & ANTI-INFLAMMATORY ---
  {
    id: 'meloxicam',
    nameEn: 'Meloxicam',
    nameUr: 'میلوکسیکم',
    saltEn: 'Meloxicam',
    saltUr: 'میلوکسیکم',
    category: 'NSAID',
    usedForEn: ['Fever', 'Mastitis Swelling', 'Lameness', 'Pain'],
    usedForUr: ['بخار', 'ساڑو کی سوجن', 'لنگڑا پن', 'درد'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '0.5mg/kg body weight',
    route: 'I/M, I/V, S/C, Oral',
    withdrawalPeriod: 'Meat: 15 days, Milk: 5 days',
    guidanceEn: 'Relieves pain, fever, and inflammation. Safer for the stomach compared to other pain killers.',
    guidanceUr: 'درد، بخار اور سوزش کو کم کرتی ہے۔ دوسری درد کش دواؤں کے مقابلے میں معدے کے لیے زیادہ محفوظ ہے۔'
  },
  {
    id: 'flunixin',
    nameEn: 'Flunixin Meglumine',
    nameUr: 'فلو نکسن میگلومین',
    saltEn: 'Flunixin Meglumine',
    saltUr: 'فلو نکسن',
    category: 'NSAID',
    usedForEn: ['Acute Mastitis', 'Pneumonia Fever', 'Respiratory Distress', 'Colic'],
    usedForUr: ['شدید ساڑو', 'نمونیا کا بخار', 'سانس کی تکلیف', 'پیٹ درد'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '1.1-2.2mg/kg body weight',
    route: 'I/V, I/M',
    withdrawalPeriod: 'Meat: 4 days, Milk: 36 hours',
    guidanceEn: 'Very potent anti-inflammatory. Excellent for respiratory distress and acute swelling.',
    guidanceUr: 'انتہائی طاقتور سوزش کش دوا۔ سانس کے مسائل اور شدید سوجن میں بہت موثر ہے۔'
  },
  {
    id: 'ketoprofen',
    nameEn: 'Ketoprofen',
    nameUr: 'کیٹوپروفین',
    saltEn: 'Ketoprofen',
    saltUr: 'کیٹوپروفین',
    category: 'NSAID',
    usedForEn: ['Udder Edema', 'Joint Pain', 'Fever', 'Traumatic Injury'],
    usedForUr: ['حیوانہ کی سوجن', 'جوڑوں کا درد', 'بخار', 'چوٹ کا درد'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '3mg/kg body weight',
    route: 'I/M, I/V',
    withdrawalPeriod: 'Meat: 4 days, Milk: None',
    guidanceEn: 'Effective for musculoskeletal pain and high fever. Good for udder swelling after calving.',
    guidanceUr: 'ہڈیوں، جوڑوں کے درد اور تیز بخار میں مفید۔ بچہ دینے کے بعد حیوانہ کی سوجن کے لیے اچھی دوا ہے۔'
  },

  // --- 4. DIGESTIVE & RUMEN MEDICINES ---
  {
    id: 'sodium_bicarb',
    nameEn: 'Sodium Bicarbonate',
    nameUr: 'میٹھا سوڈا (سوڈیم بائیکاربونیٹ)',
    saltEn: 'Sodium Bicarbonate',
    saltUr: 'سوڈیم بائیکاربونیٹ',
    category: 'Digestive',
    usedForEn: ['Acidosis (Tezabiyat)', 'Grain Overload', 'Indigestion'],
    usedForUr: ['تیزابیت (Acidosis)', 'دانہ زیادہ کھانا', 'بدہضمی'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 50-100g, Small: 10-20g',
    route: 'Oral',
    withdrawalPeriod: 'None',
    guidanceEn: 'Neutralizes acid in the rumen. Essential when an animal accidentally eats too much wheat or grain.',
    guidanceUr: 'معدے کی تیزابیت کو ختم کرتا ہے۔ جب جانور غلطی سے زیادہ گندم یا دانہ کھا لے تو یہ بہت ضروری ہے۔'
  },
  {
    id: 'magnesium_oxide',
    nameEn: 'Magnesium Oxide',
    nameUr: 'میگنیشیم آکسائیڈ',
    saltEn: 'Magnesium Oxide',
    saltUr: 'میگنیشیم آکسائیڈ',
    category: 'Digestive',
    usedForEn: ['Alkalosis', 'Bloat', 'Magnesium Deficiency'],
    usedForUr: ['الکالوسس', 'اپھارہ', 'میگنیشیم کی کمی'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 15-30g daily',
    route: 'Oral',
    withdrawalPeriod: 'None',
    guidanceEn: 'Used to treat digestive upsets and as a source of magnesium.',
    guidanceUr: 'ہاضمے کی خرابیوں کے علاج اور میگنیشیم کی کمی پوری کرنے کے لیے استعمال ہوتی ہے۔'
  },
  {
    id: 'yeast_culture',
    nameEn: 'Yeast Culture',
    nameUr: 'خمیر (یسٹ کلچر)',
    saltEn: 'Saccharomyces cerevisiae',
    saltUr: 'خمیر',
    category: 'Digestive',
    usedForEn: ['Indigestion', 'Loss of Appetite', 'Low Milk Fat'],
    usedForUr: ['بدہضمی', 'بھوک کی کمی', 'دودھ میں چکنائی کی کمی'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 10-20g daily',
    route: 'Oral (Mix in feed)',
    withdrawalPeriod: 'None',
    guidanceEn: 'Probiotic that improves rumen health and digestion. Increases feed intake.',
    guidanceUr: 'ہاضمہ اور معدے کی صحت بہتر بناتا ہے۔ جانور کی خوراک کھانے کی صلاحیت بڑھاتا ہے۔'
  },

  // --- 5. VITAMINS & MINERALS ---
  {
    id: 'vit_ad3e',
    nameEn: 'Vitamin AD3E',
    nameUr: 'وٹامن AD3E',
    saltEn: 'Vitamins A, D3, and E',
    saltUr: 'وٹامن اے، ڈی، ای',
    category: 'VitaminsMinerals',
    usedForEn: ['Weakness', 'Growth Delay', 'Anestrus (Not coming in heat)', 'Night Blindness'],
    usedForUr: ['کمزوری', 'نشوونما میں کمی', 'ہیٹ میں نہ آنا', 'اندراٹھا'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 5-10ml, Small: 1-2ml',
    route: 'I/M Only',
    withdrawalPeriod: 'None',
    guidanceEn: 'Essential vitamins for immunity, reproduction, and overall health.',
    guidanceUr: 'قوت مدافعت، حمل اور عمومی صحت کے لیے ضروری وٹامنز۔'
  },
  {
    id: 'cal_borogluconate',
    nameEn: 'Calcium Borogluconate',
    nameUr: 'کیلشیم بورو گلوکونیٹ',
    saltEn: 'Calcium Borogluconate 25%',
    saltUr: 'کیلشیم',
    category: 'VitaminsMinerals',
    usedForEn: ['Milk Fever', 'Calcium Deficiency', 'Post-calving Weakness'],
    usedForUr: ['سوتک (دودھ کا بخار)', 'کیلشیم کی کمی', 'بچہ دینے کے بعد کمزوری'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Cow/Buffalo: 450ml per 400kg',
    route: 'I/V (Slowly)',
    withdrawalPeriod: 'None',
    guidanceEn: 'Administered intravenously (I/V) very slowly. Lifesaving for cows that sit down after birth.',
    guidanceUr: 'رگ کے ذریعے بہت آہستہ لگایا جاتا ہے۔ بچہ دینے کے بعد بیٹھ جانے والی گایوں کے لیے زندگی بچانے والی دوا ہے۔'
  },
  {
    id: 'magnesium_sulphate',
    nameEn: 'Magnesium Sulphate',
    nameUr: 'میگنیشیم سلفیٹ',
    saltEn: 'Magnesium Sulphate',
    saltUr: 'میگنیشیم سلفیٹ',
    category: 'VitaminsMinerals',
    usedForEn: ['Grass Tetany', 'Muscle Shaking', 'Constipation (Oral)'],
    usedForUr: ['میگنیشیم کی کمی (ٹیٹنی)', 'جسم کا کانپنا', 'قبض (منہ کے ذریعے)'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 250-500g (Laxative)',
    route: 'Oral, I/V (as 20% solution)',
    withdrawalPeriod: 'None',
    guidanceEn: 'Used for magnesium deficiency causing convulsions. Also used as a laxative.',
    guidanceUr: 'میگنیشیم کی کمی سے ہونے والے دوروں کے لیے مفید۔ قبض دور کرنے کے لیے بھی استعمال ہوتا ہے۔'
  },
  {
    id: 'phosphorus_inj',
    nameEn: 'Phosphorus Injection',
    nameUr: 'فاسفورس ٹیکہ',
    saltEn: 'Sodium Acid Phosphate / Toldimfos Sodium',
    saltUr: 'فاسفورس',
    category: 'VitaminsMinerals',
    usedForEn: ['Red Water (Post-calving)', 'Pica (Eating mud/dirt)', 'Weakness'],
    usedForUr: ['رت موترا', 'مٹی کھانا (پائیکا)', 'کمزوری'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 10-15ml',
    route: 'I/M, I/V, S/C',
    withdrawalPeriod: 'None',
    guidanceEn: 'Essential for energy metabolism. Specifically used in post-calving red water cases.',
    guidanceUr: 'جسمانی توانائی کے لیے ضروری۔ بچہ دینے کے بعد ہونے والے رت موترا میں مخصوص طور پر استعمال ہوتا ہے۔'
  },
  {
    id: 'mineral_mixture',
    nameEn: 'Mineral Mixture',
    nameUr: 'منرل مکسچر',
    saltEn: 'Ca, P, Zn, Cu, Co, Mn, I',
    saltUr: 'مختلف نمکیات کا مرکب',
    category: 'VitaminsMinerals',
    usedForEn: ['Repeat Breeding', 'Low Milk', 'Mineral Deficiencies'],
    usedForUr: ['بار بار ہیٹ آنا', 'دودھ کی کمی', 'نمکیات کی کمی'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 50-100g daily',
    route: 'Oral (Mix in feed)',
    withdrawalPeriod: 'None',
    guidanceEn: 'Daily feed supplement. Improves fertility and milk production over time.',
    guidanceUr: 'روزانہ خوراک میں شامل کرنے والا پاؤڈر۔ وقت کے ساتھ حمل ٹھہرانے اور دودھ بڑھانے میں مدد دیتا ہے۔'
  },

  // --- 6. REPRODUCTIVE & UTERINE MEDICINES ---
  {
    id: 'oxytocin',
    nameEn: 'Oxytocin',
    nameUr: 'آکسی ٹوسن',
    saltEn: 'Oxytocin',
    saltUr: 'آکسی ٹوسن',
    category: 'Reproductive',
    usedForEn: ['Milk Let Down', 'Uterine Contraction', 'Retained Placenta'],
    usedForUr: ['دودھ اتارنا', 'رحم کا سکڑنا', 'جیر کا رکنا'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 5ml',
    route: 'I/M, S/C, I/V',
    withdrawalPeriod: 'Milk: 24 hours',
    guidanceEn: 'Assists in milk ejection and expelling uterine contents after birth.',
    guidanceUr: 'دودھ اتارنے اور پیدائش کے بعد رحم کی صفائی میں مدد دیتی ہے۔'
  },
  {
    id: 'pgf2a',
    nameEn: 'PGF2α (Dinoprost)',
    nameUr: 'پی جی ایف ٹو الفا',
    saltEn: 'Dinoprost / Cloprostenol',
    saltUr: 'کلپروسٹینول',
    category: 'Reproductive',
    usedForEn: ['Anestrus', 'Heat Induction', 'Silent Heat', 'Pyometra'],
    usedForUr: ['ہیٹ میں نہ آنا', 'ہیٹ شروع کروانا', 'خاموش ہیٹ', 'رحم میں پیپ'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 2ml',
    route: 'I/M Only',
    withdrawalPeriod: 'None',
    guidanceEn: 'Hormonal injection used to bring animals into heat or treat uterine infections.',
    guidanceUr: 'ہارمون کا ٹیکہ جو جانور کو ہیٹ میں لانے یا رحم کے انفیکشن کے علاج کے لیے استعمال ہوتا ہے۔'
  },
  {
    id: 'iu_bolus',
    nameEn: 'Intra-uterine Bolus',
    nameUr: 'رحم میں رکھنے والی گولی',
    saltEn: 'Nitrofurazone / Furea / Antibiotic Bolus',
    saltUr: 'اینٹی بائیوٹک بولس',
    category: 'Reproductive',
    usedForEn: ['Metritis', 'Uterine Infection', 'Bad Smell from Uterus'],
    usedForUr: ['رحم کی سوزش', 'رحم کا انفیکشن', 'رحم سے بدبو آنا'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '2-4 boluses in uterus',
    route: 'I/U (Intra-uterine)',
    withdrawalPeriod: 'Milk: 3 days',
    guidanceEn: 'Antibiotic tablets kept inside the uterus to treat local infections.',
    guidanceUr: 'اینٹی بائیوٹک گولیاں جو مقامی انفیکشن کے علاج کے لیے رحم کے اندر رکھی جاتی ہیں۔'
  },

  // --- 7. ALLERGY, POISONING & SUPPORTIVE CARE ---
  {
    id: 'antihistamine',
    nameEn: 'Antihistamine (CPM)',
    nameUr: 'الرجی کا ٹیکہ',
    saltEn: 'Chlorpheniramine Maleate',
    saltUr: 'الرجی کش دوا',
    category: 'Supportive',
    usedForEn: ['Allergy', 'Skin Allergy', 'Lumpy Skin Disease', 'Feed Reaction'],
    usedForUr: ['الرجی', 'جلد کی الرجی', 'لمپی سکن ڈیزیز', 'خوراک کا ری ایکشن'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Large Animal: 10ml, Small: 1-2ml',
    route: 'I/M Only',
    withdrawalPeriod: 'Meat: 7 days, Milk: 2 days',
    guidanceEn: 'Relieves itching, skin rashes, and allergic reactions to food or insects.',
    guidanceUr: 'خارش، جلد کے دانوں اور خوراک یا کیڑوں سے ہونے والی الرجی کو ختم کرتا ہے۔'
  },
  {
    id: 'activated_charcoal',
    nameEn: 'Activated Charcoal',
    nameUr: 'ایکٹیویٹڈ چارکول (کولہ پاؤڈر)',
    saltEn: 'Activated Charcoal',
    saltUr: 'چارکول',
    category: 'Supportive',
    usedForEn: ['Feed Toxicity', 'Poisoning', 'Bloat Support'],
    usedForUr: ['خوراک کا زہر', 'زہر خورانی', 'اپھارہ میں معاون'],
    // Added required properties to fix type errors
    dosageSpeciesWise: '1-3g/kg body weight',
    route: 'Oral (Drench)',
    withdrawalPeriod: 'None',
    guidanceEn: 'Absorbs toxins in the stomach. Crucial first aid for accidental poisoning.',
    guidanceUr: 'معدے میں موجود زہر کو جذب کر لیتا ہے۔ زہر خورانی کی صورت میں بہترین ابتدائی طبی امداد ہے۔'
  },
  {
    id: 'electrolyte_powder',
    nameEn: 'Electrolyte Powder',
    nameUr: 'نمکول (الیکٹرولائٹ پاؤڈر)',
    saltEn: 'Sodium, Potassium, Citrate, Glucose Mix',
    saltUr: 'الیکٹرولائٹ',
    category: 'Supportive',
    usedForEn: ['Dehydration', 'Severe Diarrhea', 'Heat Stress'],
    usedForUr: ['پانی کی کمی', 'شدید دست', 'گرمی کا تناؤ'],
    // Added required properties to fix type errors
    dosageSpeciesWise: 'Mixed in drinking water as needed',
    route: 'Oral',
    withdrawalPeriod: 'None',
    guidanceEn: 'Restores lost body salts. Essential for animals with diarrhea or during extreme summer.',
    guidanceUr: 'جسم کے ضائع شدہ نمکیات بحال کرتا ہے۔ دستوں یا شدید گرمی میں بہت ضروری ہے۔'
  }
];
