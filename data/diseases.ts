
import { Disease } from '../types';

export const diseases: Disease[] = [
  // --- 1. INFECTIOUS & BACTERIAL / VIRAL ---
  {
    id: 'mastitis',
    nameEn: 'Mastitis',
    nameUr: 'ساڑو (مسٹائٹس)',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Inflammation of the mammary gland/udder, usually bacterial. It reduces milk quality and quantity.',
      causes: ['Bacterial infection', 'Poor milking hygiene', 'Contaminated bedding'],
      symptoms: ['Swollen, hot, painful udder', 'Clots in milk', 'Fever in acute cases'],
      immediateActions: ['Separate animal', 'Clean udder with antiseptic', 'Hand-milk frequently'],
      generalTreatment: ['Antibiotic intramammary tubes', 'Systemic antibiotics as per vet advice'],
      prevention: ['Teat dipping after milking', 'Clean floor', 'Dry bedding'],
      whenToCallVet: 'Call if milk contains blood or udder becomes hard/black.',
      // Fix: Mapped 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Antibiotics', 'NSAID']
    },
    ur: {
      introduction: 'حیوانہ کی سوزش جو عام طور پر جراثیم کی وجہ سے ہوتی ہے۔ اس سے دودھ کی کوالٹی اور مقدار متاثر ہوتی ہے۔',
      causes: ['جراثیم کا حملہ', 'دوہنے کی ناقص صفائی', 'گندا بستر'],
      symptoms: ['حیوانہ کا سوجنا اور گرم ہونا', 'دودھ میں پھٹکیاں آنا', 'تیز بخار'],
      immediateActions: ['بیمار جانور الگ کریں', 'حیوانہ جراثیم کش پانی سے دھوئیں', 'حیوانہ بار بار خالی کریں'],
      generalTreatment: ['تھنوں والی اینٹی بائیوٹک ٹیوبیں', 'ڈاکٹر کے مشورے سے ٹیکے'],
      prevention: ['دوہنے کے بعد ٹیٹ ڈپ لگائیں', 'فرش صاف رکھیں', 'خشک بستر'],
      whenToCallVet: 'اگر دودھ میں خون آئے یا حیوانہ کالا پڑ جائے تو فوراً ڈاکٹر بلائیں۔',
      // Fix: Mapped 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Antibiotics', 'NSAID']
    }
  },
  {
    id: 'fmd',
    nameEn: 'Foot & Mouth Disease (FMD)',
    nameUr: 'منہ کھر',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Highly contagious viral disease causing blisters in mouth and on feet.',
      causes: ['Aphthovirus', 'Direct contact'],
      symptoms: ['High fever', 'Blisters in mouth/feet', 'Drooling', 'Lameness'],
      immediateActions: ['Isolate immediately', 'Wash wounds with Potash'],
      generalTreatment: ['Antiseptic mouth washes', 'Soft, easy-to-digest food'],
      prevention: ['Vaccination every 6 months', 'Biosecurity'],
      whenToCallVet: 'Immediately upon sighting the first blister.',
      // Fix: Mapped 'Antihistamines' to 'Supportive' and 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Supportive', 'NSAID', 'Antibiotics']
    },
    ur: {
      introduction: 'انتہائی متعدی وائرل بیماری جو منہ اور کھروں کو متاثر کرتی ہے۔',
      causes: ['وائرس', 'رابطہ'],
      symptoms: ['تیز بخار', 'منہ اور پیروں پر چھالے', 'رال بہنا', 'لنگڑا پن'],
      immediateActions: ['فوراً الگ کریں', 'زخموں کو لال دوا سے دھوئیں'],
      generalTreatment: ['جراثیم کش ماؤتھ واش', 'نرم خوراک'],
      prevention: ['سال میں دو بار ویکسین', 'فارم کی صفائی'],
      whenToCallVet: 'پہلا چھالا نظر آنے پر فوراً ڈاکٹر بلائیں۔',
      // Fix: Mapped 'Antihistamines' to 'Supportive' and 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Supportive', 'NSAID', 'Antibiotics']
    }
  },
  {
    id: 'hs',
    nameEn: 'Hemorrhagic Septicemia (HS)',
    nameUr: 'گل گھوٹو',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Acute bacterial disease causing throat swelling and breathing distress.',
      causes: ['Pasteurella multocida', 'Stress', 'Rainy season'],
      symptoms: ['Sudden high fever', 'Swelling in throat', 'Difficulty breathing'],
      immediateActions: ['Isolate', 'Keep in cool area'],
      generalTreatment: ['High dose antibiotics', 'Anti-inflammatory drugs'],
      prevention: ['Bi-annual vaccination', 'Reduce stress'],
      whenToCallVet: 'Emergency! Call immediately as death happens fast.',
      // Fix: Mapped 'PainKillers' to 'NSAID' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Antibiotics', 'NSAID', 'Supportive']
    },
    ur: {
      introduction: 'بیکٹیریا سے ہونے والی خطرناک بیماری جس میں گلا سوج جاتا ہے۔',
      causes: ['بیکٹیریا', 'تناؤ/موسمی تبدیلی'],
      symptoms: ['اچانک تیز بخار', 'گلے پر سوجن', 'سانس میں تکلیف'],
      immediateActions: ['الگ کریں', 'ٹھنڈی جگہ رکھیں'],
      generalTreatment: ['اینٹی بائیوٹک', 'سوزش کی دوائیں'],
      prevention: ['سال میں دو بار ویکسین', 'ہجوم سے بچیں'],
      whenToCallVet: 'ہنگامی صورتحال! سانس میں گھرگھراہٹ آتے ہی ڈاکٹر بلائیں۔',
      // Fix: Mapped 'PainKillers' to 'NSAID' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Antibiotics', 'NSAID', 'Supportive']
    }
  },
  {
    id: 'anthrax',
    nameEn: 'Anthrax',
    nameUr: 'ست (اینتھریکس)',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep', 'Camel'],
    en: {
      introduction: 'Highly fatal bacterial disease. Zoonotic (spreads to humans).',
      causes: ['Bacillus anthracis spores'],
      symptoms: ['Sudden death', 'Bloody discharge from nose/mouth', 'High fever'],
      immediateActions: ['DO NOT OPEN CARCASS', 'Bury deep with lime'],
      generalTreatment: ['Antibiotics if caught early'],
      prevention: ['Annual vaccination', 'Proper disposal of bodies'],
      whenToCallVet: 'If animal dies suddenly with dark blood discharge.',
      // Fix: Mapped 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Antibiotics', 'Supportive']
    },
    ur: {
      introduction: 'انتہائی مہلک بیکٹیریل بیماری۔ انسانوں میں بھی پھیل سکتی ہے۔',
      causes: ['اینتھریکس جراثیم'],
      symptoms: ['اچانک موت', 'ناک یا منہ سے کالا خون بہنا', 'تیز بخار'],
      immediateActions: ['مردہ جانور کا پوسٹ مارٹم نہ کریں', 'چونے کے ساتھ گہرا دفن کریں'],
      generalTreatment: ['شروع میں اینٹی بائیوٹک'],
      prevention: ['سالانہ ویکسینیشن'],
      whenToCallVet: 'اگر جانور اچانک مر جائے اور کالا خون بہہ رہا ہو۔',
      // Fix: Mapped 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Antibiotics', 'Supportive']
    }
  },
  {
    id: 'blackleg',
    nameEn: 'Black Quarter (BQ) / Blackleg',
    nameUr: 'چوڑے مار (لنگڑا بخار)',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Acute bacterial disease causing muscle swelling and lameness in young cattle.',
      causes: ['Clostridium chauvoei spores in soil'],
      symptoms: ['Severe lameness', 'Swelling in thigh/shoulder', 'Crackling sound in swelling'],
      immediateActions: ['Isolate animal', 'Treat wounds with antiseptics'],
      generalTreatment: ['Heavy dose Penicillin'],
      prevention: ['Annual vaccination'],
      whenToCallVet: 'If young cattle becomes suddenly lame with muscle swelling.',
      // Fix: Mapped 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Antibiotics', 'NSAID']
    },
    ur: {
      introduction: 'جوان جانوروں میں پٹھوں کی سوجن اور لنگڑے پن کی شدید بیماری۔',
      causes: ['مٹی میں موجود جراثیم'],
      symptoms: ['شدید لنگڑا پن', 'ران یا کندھے پر سوجن', 'سوجن دبانے پر آواز آنا'],
      immediateActions: ['جانور الگ کریں', 'زخم صاف رکھیں'],
      generalTreatment: ['پینسلین کے بھاری ٹیکے'],
      prevention: ['سالانہ ویکسینیشن'],
      whenToCallVet: 'اگر جوان جانور لنگڑا ہو جائے اور پٹھے پر دردناک سوجن ہو۔',
      // Fix: Mapped 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Antibiotics', 'NSAID']
    }
  },
  {
    id: 'brucellosis',
    nameEn: 'Brucellosis',
    nameUr: 'بروسیلوسس',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Bacterial disease causing late term abortions and infertility.',
      causes: ['Brucella abortus'],
      symptoms: ['Abortion in 7th-9th month', 'Retained placenta', 'Joint swelling'],
      immediateActions: ['Isolate aborted animal', 'Bury fetus safely'],
      generalTreatment: ['No effective livestock cure', 'Supportive care'],
      prevention: ['Calfhood vaccination', 'Screening bulls'],
      whenToCallVet: 'Always if a late term abortion occurs.',
      suggestedMedCategories: ['Antibiotics']
    },
    ur: {
      introduction: 'بیکٹیریل بیماری جو حمل ضائع ہونے اور بانجھ پن کا باعث بنتی ہے۔',
      causes: ['بروسیلا جراثیم'],
      symptoms: ['آخری مہینوں میں بچہ ضائع ہونا', 'جیر کا رکنا', 'جوڑوں کی سوجن'],
      immediateActions: ['بیمار جانور الگ کریں', 'ضائع شدہ بچہ گہرا دفن کریں'],
      generalTreatment: ['کوئی پکا علاج نہیں'],
      prevention: ['بچھڑیوں کی ویکسینیشن'],
      whenToCallVet: 'اگر آخری ایام میں حمل ضائع ہو جائے۔',
      suggestedMedCategories: ['Antibiotics']
    }
  },
  {
    id: 'lsd',
    nameEn: 'Lumpy Skin Disease (LSD)',
    nameUr: 'لمپی سکن ڈیزیز',
    category: 'Infectious',
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Viral disease spread by insects, causing nodules all over the skin.',
      causes: ['LSD virus via flies, ticks, mosquitoes'],
      symptoms: ['Nodules/bumps on skin', 'Fever', 'Leg swelling', 'Drop in milk'],
      immediateActions: ['Isolate', 'Insect control (sprays)', 'Treat skin wounds'],
      generalTreatment: ['Symptomatic treatment', 'Antihistamines', 'Pain killers'],
      prevention: ['Vaccination', 'Vector control'],
      whenToCallVet: 'If lumps cover entire body or animal stops eating.',
      // Fix: Mapped 'Antihistamines' to 'Supportive' and 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Supportive', 'Antibiotics', 'NSAID']
    },
    ur: {
      introduction: 'وائرل بیماری جو کیڑوں سے پھیلتی ہے، کھال پر گانٹھیں بنتی ہیں۔',
      causes: ['وائرس (مچھر، چچڑ، مکھیاں)'],
      symptoms: ['جلد پر گانٹھیں', 'بخار', 'ٹانگوں کی سوجن', 'دودھ میں کمی'],
      immediateActions: ['الگ کریں', 'کیڑے مار سپرے', 'زخموں کا علاج'],
      generalTreatment: ['علاماتی علاج', 'بخار اور الرجی کی دوا'],
      prevention: ['ویکسینیشن', 'کیڑوں کا خاتمہ'],
      whenToCallVet: 'اگر گانٹھیں پورے جسم پر پھیل جائیں یا جانور کھانا چھوڑ دے۔',
      // Fix: Mapped 'Antihistamines' to 'Supportive' and 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Supportive', 'Antibiotics', 'NSAID']
    }
  },

  // --- 2. PARASITIC & PROTOZOAL ---
  {
    id: 'liver_fluke',
    nameEn: 'Fasciolosis (Liver Fluke)',
    nameUr: 'جگر کے کیڑے',
    category: 'Parasitic',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Internal parasite infection affecting the liver, common in swampy areas.',
      causes: ['Licking larvae on grass near water snails'],
      symptoms: ['Weight loss', 'Bottle jaw (swelling under chin)', 'Pale eyes'],
      immediateActions: ['Isolate', 'Clean water source'],
      generalTreatment: ['Flukicide dewormer (Triclabendazole)'],
      prevention: ['Regular deworming', 'Avoid grazing near pond edges'],
      whenToCallVet: 'If swelling appears under the jaw.',
      suggestedMedCategories: ['Antiparasitic', 'VitaminsMinerals']
    },
    ur: {
      introduction: 'جگر کو متاثر کرنے والے اندرونی کیڑے، نمی والے علاقوں میں عام۔',
      causes: ['پانی کے قریب چارے پر موجود کیڑے'],
      symptoms: ['وزن میں کمی', 'جبڑے کے نیچے سوجن', 'آنکھوں کی زردی'],
      immediateActions: ['الگ کریں', 'پانی صاف رکھیں'],
      generalTreatment: ['پیٹ کے کیڑوں کی مخصوص دوا'],
      prevention: ['باقاعدہ ڈورمنگ', 'تالابوں کے پاس چرائی سے بچاؤ'],
      whenToCallVet: 'اگر جبڑے کے نیچے سوجن (Bottle jaw) نظر آئے۔',
      suggestedMedCategories: ['Antiparasitic', 'VitaminsMinerals']
    }
  },
  {
    id: 'theileriosis',
    nameEn: 'Theileriosis',
    nameUr: 'تھلیریئیس (چچڑ بخار)',
    category: 'Parasitic',
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Serious tick-borne blood protozoa disease.',
      causes: ['Ticks carrying Theileria'],
      symptoms: ['Swollen lymph nodes', 'High fever', 'Anemia', 'Pale eyes'],
      immediateActions: ['Kill ticks on animal', 'Isolate'],
      generalTreatment: ['Buparvaquone injections', 'Supportive tonics'],
      prevention: ['Regular tick control', 'Hygiene'],
      whenToCallVet: 'High fever with swollen glands near ear/shoulder.',
      // Fix: Mapped 'Antiprotozoal' to 'Antiparasitic' and 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Antiparasitic', 'NSAID', 'Antibiotics']
    },
    ur: {
      introduction: 'چچڑوں سے پھیلنے والی خون کی خطرناک بیماری۔',
      causes: ['چچڑ'],
      symptoms: ['گلٹیوں کی سوجن', 'تیز بخار', 'خون کی کمی', 'آنکھوں کی زردی'],
      immediateActions: ['چچڑ ماریں', 'الگ کریں'],
      generalTreatment: ['بیوپارواکون کا ٹیکہ', 'طاقت کے ٹانک'],
      prevention: ['باقاعدہ چچڑ مار سپرے'],
      whenToCallVet: 'اگر کان یا کندھے کے پاس گلٹیاں سوج جائیں اور بخار تیز ہو۔',
      // Fix: Mapped 'Antiprotozoal' to 'Antiparasitic' and 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['Antiparasitic', 'NSAID', 'Antibiotics']
    }
  },

  // --- 3. DIGESTIVE & METABOLIC ---
  {
    id: 'bloat',
    nameEn: 'Bloat (Afara)',
    nameUr: 'اپھارہ (گیس)',
    category: 'DigestiveMetabolic',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Accumulation of gas in the rumen. Can cause sudden death.',
      causes: ['Excessive green clover', 'Sudden grain change'],
      symptoms: ['Swollen left abdomen', 'Breathing distress', 'Panting'],
      immediateActions: ['Walk animal', 'Stop feed', 'Give turpentine/mustard oil'],
      generalTreatment: ['Anti-bloat agents', 'Emergency trocarization'],
      prevention: ['Mix dry straw with green fodder', 'Avoid wet grass'],
      whenToCallVet: 'Emergency! If animal is panting and stomach is tight.',
      // Fix: Mapped 'DigestiveTonics' to 'Digestive' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Digestive', 'Supportive']
    },
    ur: {
      introduction: 'معدے میں گیس کا بھر جانا جو جان لیوا ہو سکتا ہے۔',
      causes: ['برسیم کی زیادتی', 'اچانک ونڈا بدلنا'],
      symptoms: ['بائیں طرف پیٹ پھولنا', 'سانس میں تکلیف', 'ہانپنا'],
      immediateActions: ['جانور کو چلائیں', 'چارہ روک دیں', 'تیل پلائیں'],
      generalTreatment: ['گیس ختم کرنے والی دوا'],
      prevention: ['توڑی ملا کر چارہ دیں'],
      whenToCallVet: 'ہنگامی صورتحال! اگر جانور ہانپ رہا ہو اور پیٹ سخت ہو۔',
      // Fix: Mapped 'DigestiveTonics' to 'Digestive' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Digestive', 'Supportive']
    }
  },
  {
    id: 'ketosis',
    nameEn: 'Ketosis',
    nameUr: 'کیٹوسس (شکر کی کمی)',
    category: 'DigestiveMetabolic',
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Negative energy balance in high producing cows after calving.',
      causes: ['Low glucose levels', 'High energy demand'],
      symptoms: ['Sweet smell in breath', 'Loss of appetite', 'Rapid weight loss'],
      immediateActions: ['Offer jaggery/molasses', 'High energy feed'],
      generalTreatment: ['IV Glucose', 'Oral propylene glycol'],
      prevention: ['Proper nutrition after calving'],
      whenToCallVet: 'If animal stops eating concentrates and smells "sweet".',
      // Fix: Mapped 'Emergency' to 'Supportive'
      suggestedMedCategories: ['VitaminsMinerals', 'Supportive']
    },
    ur: {
      introduction: 'بچہ دینے کے بعد توانائی کی شدید کمی۔',
      causes: ['خون میں گلوکوز کی کمی'],
      symptoms: ['سانس سے میٹھی بو', 'بھوک نہ لگنا', 'تیزی سے وزن گرنا'],
      immediateActions: ['گڑ یا شیرہ دیں', 'طاقتور خوراک'],
      generalTreatment: ['گلوکوز کی ڈرپ'],
      prevention: ['بچہ دینے کے بعد اچھی خوراک'],
      whenToCallVet: 'اگر جانور ونڈا چھوڑ دے اور میٹھی بو آئے۔',
      // Fix: Mapped 'Emergency' to 'Supportive'
      suggestedMedCategories: ['VitaminsMinerals', 'Supportive']
    }
  },

  // --- 4. DEFICIENCY ---
  {
    id: 'milk_fever',
    nameEn: 'Calcium Deficiency (Milk Fever)',
    nameUr: 'سوتک (کیلشیم کی کمی)',
    category: 'Deficiency',
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Drop in blood calcium after birth causing paralysis.',
      causes: ['High milk yield drainage of calcium'],
      symptoms: ['Animal cannot stand', 'S-shaped neck', 'Cold skin'],
      immediateActions: ['Do not milk out completely', 'Keep animal warm'],
      generalTreatment: ['IV Calcium Borogluconate slowly'],
      prevention: ['Proper minerals during pregnancy'],
      whenToCallVet: 'Immediate call if cow sits down after birth.',
      // Fix: Mapped 'CalciumMagnesium' to 'VitaminsMinerals' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['VitaminsMinerals', 'Supportive']
    },
    ur: {
      introduction: 'بچہ دینے کے بعد خون میں کیلشیم کی کمی۔',
      causes: ['دودھ میں کیلشیم کا اخراج'],
      symptoms: ['جانور کھڑا نہیں ہوتا', 'گردن موڑ کر بیٹھنا', 'جسم کا ٹھنڈا ہونا'],
      immediateActions: ['دودھ پورا نہ نکالیں', 'جانور کو گرم رکھیں'],
      generalTreatment: ['کیلشیم کی ڈرپ (آہستہ)'],
      prevention: ['حمل کے دوران منرل مکسچر'],
      whenToCallVet: 'اگر گائے بچہ دینے کے بعد بیٹھ جائے اور کھڑی نہ ہو۔',
      // Fix: Mapped 'CalciumMagnesium' to 'VitaminsMinerals' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['VitaminsMinerals', 'Supportive']
    }
  },

  // --- 5. REPRODUCTIVE ---
  {
    id: 'prolapse',
    nameEn: 'Prolapse (Picha Maarna)',
    nameUr: 'پیچھا مارنا (پرولیپس)',
    category: 'Reproductive',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Protrusion of uterus/vagina out of the body.',
      causes: ['Weak pelvic muscles', 'Mineral deficiency', 'Slope in floor'],
      symptoms: ['Red mass visible from vulva'],
      immediateActions: ['Keep mass clean and moist', 'Apply antiseptic wash'],
      generalTreatment: ['Manual replacement by vet', 'Truss/Stitching'],
      prevention: ['Mineral mixture daily', 'Level floor'],
      whenToCallVet: 'Urgent! Exposure leads to fatal infection.',
      // Fix: Mapped 'CalciumMagnesium' to 'VitaminsMinerals', 'PainKillers' to 'NSAID', and 'ReproductiveMed' to 'Reproductive'
      suggestedMedCategories: ['VitaminsMinerals', 'NSAID', 'Reproductive']
    },
    ur: {
      introduction: 'بچے دانی یا اندام نہانی کا باہر نکل آنا۔',
      causes: ['نمکیات کی کمی', 'پٹھوں کی کمزوری'],
      symptoms: ['گوشت کا سرخ حصہ باہر نظر آنا'],
      immediateActions: ['باہر نکلے حصے کو صاف اور گیلا رکھیں', 'جراثیم کش دوا سے دھوئیں'],
      generalTreatment: ['ڈاکٹر سے واپس اندر رکھوانا'],
      prevention: ['منرل مکسچر کا استعمال'],
      whenToCallVet: 'انتہائی ضروری! اعضاء کا باہر رہنا مہلک ہو سکتا ہے۔',
      // Fix: Mapped 'CalciumMagnesium' to 'VitaminsMinerals', 'PainKillers' to 'NSAID', and 'ReproductiveMed' to 'Reproductive'
      suggestedMedCategories: ['VitaminsMinerals', 'NSAID', 'Reproductive']
    }
  },

  // --- 6. INJURY & NON-INFECTIOUS ---
  {
    id: 'lameness',
    nameEn: 'Lameness',
    nameUr: 'لنگڑا پن',
    category: 'Injury',
    applicableAnimals: ['Cow', 'Buffalo', 'Goat', 'Sheep'],
    en: {
      introduction: 'Difficulty in walking due to hoof or leg injury.',
      causes: ['Stone/nail in hoof', 'Hoof rot', 'Slippery floor'],
      symptoms: ['Limping', 'Reluctance to move', 'Hot hoof'],
      immediateActions: ['Check hoof for sharp objects', 'Wash with clean water'],
      generalTreatment: ['Hoof trimming', 'Foot bath with Zinc Sulfate', 'Painkillers'],
      prevention: ['Dry floor', 'Regular hoof care'],
      whenToCallVet: 'If animal cannot stand or leg is severely swollen.',
      // Fix: Mapped 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['NSAID', 'Antibiotics']
    },
    ur: {
      introduction: 'ٹانگ یا کھر میں چوٹ کی وجہ سے چلنے میں دشواری۔',
      causes: ['کھر میں کنکر یا کیل چبھنا', 'پھسلن والا فرش'],
      symptoms: ['لنگڑا کر چلنا', 'حرکت سے کترانا'],
      immediateActions: ['کھر چیک کریں', 'صاف پانی سے دھوئیں'],
      generalTreatment: ['کھروں کی تراش خراش', 'درد کی دوا'],
      prevention: ['فرش خشک رکھیں'],
      whenToCallVet: 'اگر جانور کھڑا نہ ہو سکے یا ٹانگ بہت سوج جائے۔',
      // Fix: Mapped 'PainKillers' to 'NSAID'
      suggestedMedCategories: ['NSAID', 'Antibiotics']
    }
  },
  {
    id: 'red_water',
    nameEn: 'Red Water Disease',
    nameUr: 'رت موترا',
    category: 'Injury', // Per user grouping request
    applicableAnimals: ['Cow', 'Buffalo'],
    en: {
      introduction: 'Condition where urine appears dark red or bloody.',
      causes: ['Babesia parasite (protozoa)', 'Phosphorus deficiency'],
      symptoms: ['Red/Coffee colored urine', 'High fever', 'Anemia'],
      immediateActions: ['Keep in shade', 'Provide plenty of water'],
      generalTreatment: ['Specific antiprotozoal injections', 'Phosphorus tonics'],
      prevention: ['Tick control'],
      whenToCallVet: 'Call immediately as blood loss through urine is rapid.',
      // Fix: Mapped 'Antiprotozoal' to 'Antiparasitic' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Antiparasitic', 'Supportive', 'VitaminsMinerals']
    },
    ur: {
      introduction: 'وہ حالت جس میں پیشاب سرخ یا کافی رنگ کا ہو جاتا ہے۔',
      causes: ['چچڑ (بیبیزیا)', 'فاسفورس کی کمی'],
      symptoms: ['سرخ پیشاب', 'تیز بخار', 'خون کی کمی'],
      immediateActions: ['سائے میں رکھیں', 'وافر پانی دیں'],
      generalTreatment: ['مخصوص انجکشن'],
      prevention: ['چچڑوں کا خاتمہ'],
      whenToCallVet: 'فوراً ڈاکٹر بلائیں کیونکہ خون پیشاب کے ذریعے ضائع ہوتا ہے۔',
      // Fix: Mapped 'Antiprotozoal' to 'Antiparasitic' and 'Emergency' to 'Supportive'
      suggestedMedCategories: ['Antiparasitic', 'Supportive', 'VitaminsMinerals']
    }
  }
];
