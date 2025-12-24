import { BodySystem } from '../types';

export const bodySystems: BodySystem[] = [
  {
    id: 'digestive',
    titleEn: 'Digestive System',
    titleUr: 'نظامِ ہضم',
    color: 'bg-green-50 text-green-700',
    iconName: 'Utensils',
    en: {
      overview: 'Ruminants (cows, buffaloes) have a 4-chambered stomach to digest grass and fodder efficiently.',
      organs: ['Rumen (Paunch)', 'Reticulum (Honeycomb)', 'Omasum (Manyplies)', 'Abomasum (True Stomach)', 'Intestines'],
      functions: [
        'Rumination (Cud chewing): Breaking down tough fiber.',
        'Fermentation: Bacteria in the Rumen digest cellulose.',
        'Absorption: Nutrients enter the blood.'
      ],
      commonProblems: ['Bloat (Gas accumulation)', 'Acidosis (Grain overload)', 'Indigestion'],
      careTips: [
        'Always provide chopped fodder.',
        'Ensure clean water 24/7.',
        'Change diet gradually over 7-10 days.'
      ],
      nutritionRelation: 'Proper fiber intake ensures the rumen works correctly. Low fiber causes acidity.'
    },
    ur: {
      overview: 'جگالی کرنے والے جانوروں (گائے، بھینس) کا معدہ 4 حصوں پر مشتمل ہوتا ہے تاکہ گھاس اور چارہ ہضم ہو سکے۔',
      organs: ['ریومن (بڑا پیٹ)', 'ریٹیکولم (چھلنی)', 'اومیسم (پردے)', 'ایبومیسم (اصلی معدہ)', 'انتڑیاں'],
      functions: [
        'جگالی کرنا: سخت چارے کو باریک کرنا۔',
        'خمیر (Fermentation): ریومن میں موجود جراثیم چارے کو ہضم کرتے ہیں۔',
        'جذب کرنا: غذائی اجزاء خون میں شامل ہوتے ہیں۔'
      ],
      commonProblems: ['اپھارہ (گیس)', 'تیزابیت (دانہ زیادہ کھانا)', 'بدہضمی'],
      careTips: [
        'چارہ ہمیشہ کتر کر کھلائیں۔',
        'ہر وقت صاف پانی مہیا کریں۔',
        'خوراک میں تبدیلی 7-10 دن میں آہستہ آہستہ کریں۔'
      ],
      nutritionRelation: 'مناسب فائبر (ریشہ) معدے کے کام کے لیے ضروری ہے۔ کم فائبر تیزابیت کا باعث بنتا ہے۔'
    }
  },
  {
    id: 'reproductive',
    titleEn: 'Reproductive System',
    titleUr: 'نظامِ تولید',
    color: 'bg-pink-50 text-pink-700',
    iconName: 'Baby',
    en: {
      overview: 'Responsible for breeding, pregnancy, and producing milk (udder is part of this system).',
      organs: ['Ovaries', 'Uterus (Womb)', 'Cervix', 'Vagina', 'Udder (Mammary Glands)'],
      functions: [
        'Heat Cycle: Producing eggs for fertilization.',
        'Gestation: Carrying the calf for 9-10 months.',
        'Lactation: Producing milk after birth.'
      ],
      commonProblems: ['Repeat Breeding (Not conceiving)', 'Prolapse', 'Retained Placenta (ROP)', 'Mastitis'],
      careTips: [
        'Observe heat signs closely (bellowing, mounting).',
        'Maintain hygiene during delivery.',
        'Provide mineral mixture to prevent deficiency.'
      ],
      nutritionRelation: 'Energy and minerals (Calcium/Phosphorus) are critical for fertility and milk.'
    },
    ur: {
      overview: 'نسل بڑھانے، حمل اور دودھ کی پیداوار کا ذمہ دار نظام (حیوانہ بھی اسی کا حصہ ہے)۔',
      organs: ['بیضہ دانی (Ovaries)', 'بچے دانی (Uterus)', 'سرویکس', 'اندام نہانی', 'حیوانہ'],
      functions: [
        'ہیٹ سائیکل: انڈے کا اخراج۔',
        'حمل: 9-10 ماہ تک بچے کی پرورش۔',
        'دودھ کی پیداوار: بچے کی پیدائش کے بعد۔'
      ],
      commonProblems: ['بار بار پھرنا (حمل نہ ٹھہرنا)', 'پچھا مارنا (Prolapse)', 'جیر کا نہ گرنا', 'ساڑو'],
      careTips: [
        'ہیٹ کی علامات (بولنا، چڑھنا) غور سے دیکھیں۔',
        'پیدائش کے وقت صفائی کا خیال رکھیں۔',
        'منرل مکسچر دیں تاکہ کمی نہ ہو۔'
      ],
      nutritionRelation: 'توانائی اور نمکیات (کیلشیم/فاسفورس) زرخیزی اور دودھ کے لیے انتہائی اہم ہیں۔'
    }
  },
  {
    id: 'respiratory',
    titleEn: 'Respiratory System',
    titleUr: 'نظامِ تنفس',
    color: 'bg-sky-50 text-sky-700',
    iconName: 'Wind',
    en: {
      overview: 'Supplies oxygen to the blood and removes carbon dioxide. Crucial for temperature regulation.',
      organs: ['Nose & Nostrils', 'Trachea (Windpipe)', 'Lungs', 'Diaphragm'],
      functions: [
        'Breathing: Intake of Oxygen.',
        'Cooling: Panting helps cool the animal in heat.',
        'Smelling: Identifying feed and calves.'
      ],
      commonProblems: ['Pneumonia', 'Coughing', 'Heat Stress (Panting)', 'Hemorrhagic Septicemia (HS)'],
      careTips: [
        'Ensure good ventilation in the shed.',
        'Protect from cold drafts in winter.',
        'Control dust and ammonia smell in shed.'
      ],
      nutritionRelation: 'Healthy lungs require Vitamin A (green fodder).'
    },
    ur: {
      overview: 'خون کو آکسیجن مہیا کرتا ہے اور کاربن ڈائی آکسائیڈ خارج کرتا ہے۔ جسمانی درجہ حرارت کو کنٹرول کرتا ہے۔',
      organs: ['ناک', 'سانس کی نالی', 'پھیپھڑے', 'ڈایافرام'],
      functions: [
        'سانس لینا: آکسیجن کا حصول۔',
        'ٹھنڈک: ہانپنا گرمی میں جسم کو ٹھنڈا رکھتا ہے۔',
        'سونگھنا: خوراک اور بچے کی پہچان۔'
      ],
      commonProblems: ['نمونیا', 'کھانسی', 'ہیٹ سٹریس (ہانپنا)', 'گل گھوٹو'],
      careTips: [
        'شیڈ میں ہوا کا گزر (کراس وینٹیلیشن) رکھیں۔',
        'سردیوں میں ٹھنڈی ہوا سے بچائیں۔',
        'شیڈ میں دھول اور پیشاب کی بو نہ ہونے دیں۔'
      ],
      nutritionRelation: 'پھیپھڑوں کی صحت کے لیے وٹامن اے (سبز چارہ) ضروری ہے۔'
    }
  },
  {
    id: 'circulatory',
    titleEn: 'Circulatory System',
    titleUr: 'نظامِ دورانِ خون',
    color: 'bg-red-50 text-red-700',
    iconName: 'HeartPulse',
    en: {
      overview: 'Transports blood, nutrients, and medicine throughout the body via the heart and vessels.',
      organs: ['Heart', 'Arteries (Clean blood)', 'Veins (Impure blood)', 'Blood'],
      functions: [
        'Transport: Moving glucose, minerals, and oxygen.',
        'Defense: White blood cells fight germs.',
        'Thermoregulation: Distributing heat.'
      ],
      commonProblems: ['Anemia (Low blood due to ticks/worms)', 'Heart failure', 'Blood protozoa (Theileria)'],
      careTips: [
        'Control ticks (they suck blood).',
        'Provide iron and copper in diet.',
        'Monitor pulse rate in sick animals.'
      ],
      nutritionRelation: 'Water is the main component of blood. Iron/Copper are needed for red blood cells.'
    },
    ur: {
      overview: 'دل اور نالیوں کے ذریعے پورے جسم میں خون، غذائی اجزاء اور ادویات پہنچاتا ہے۔',
      organs: ['دل', 'شریانیں (صاف خون)', 'وریدیں (گندا خون)', 'خون'],
      functions: [
        'ترسیل: گلوکوز، نمکیات اور آکسیجن پہنچانا۔',
        'دفاع: سفید خلیات جراثیم سے لڑتے ہیں۔',
        'درجہ حرارت: جسم کی گرمی کو تقسیم کرنا۔'
      ],
      commonProblems: ['خون کی کمی (چچڑ/کیڑوں کی وجہ سے)', 'دل کا دورہ', 'خونی بیماری (تھلیریوسس)'],
      careTips: [
        'چچڑوں کا خاتمہ کریں (یہ خون چوستے ہیں)۔',
        'خوراک میں آئرن اور کاپر دیں۔',
        'بیمار جانور کی نبض چیک کریں۔'
      ],
      nutritionRelation: 'خون کا اہم حصہ پانی ہے۔ سرخ خلیات کے لیے آئرن اور کاپر ضروری ہیں۔'
    }
  },
  {
    id: 'urinary',
    titleEn: 'Urinary System',
    titleUr: 'نظامِ اخراج (پیشاب)',
    color: 'bg-amber-50 text-amber-700',
    iconName: 'Droplet',
    en: {
      overview: 'Filters waste from the blood and removes excess water and toxins.',
      organs: ['Kidneys', 'Ureters', 'Bladder', 'Urethra'],
      functions: [
        'Filtration: Cleaning the blood.',
        'Excretion: Removing urea and toxins.',
        'Water Balance: Regulating body fluids.'
      ],
      commonProblems: ['Red Water (Hemoglobinuria)', 'Urinary Stones (Calculi)', 'Kidney infection'],
      careTips: [
        'Clean drinking water is essential.',
        'Avoid excessive minerals in male animals (causes stones).',
        'Observe urine color daily.'
      ],
      nutritionRelation: 'Water intake directly affects kidney health. Balanced minerals prevent stones.'
    },
    ur: {
      overview: 'خون سے فالتو مادوں، پانی اور زہر کو صاف کر کے جسم سے خارج کرتا ہے۔',
      organs: ['گردے', 'پیشاب کی نالیاں', 'مثانہ', 'یوریتھرا'],
      functions: [
        'فلٹریشن: خون کی صفائی۔',
        'اخراج: یوریا اور زہریلے مادوں کا اخراج۔',
        'پانی کا توازن: جسمانی سیال کو کنٹرول کرنا۔'
      ],
      commonProblems: ['سرخ پیشاب (رتا)', 'پیشاب کی پتھری (نرکچ)', 'گردے کا انفیکشن'],
      careTips: [
        'صاف پینے کا پانی لازمی ہے۔',
        'نر جانوروں میں حد سے زیادہ منرلز سے پرہیز کریں (پتھری کا باعث)۔',
        'روزانہ پیشاب کا رنگ چیک کریں۔'
      ],
      nutritionRelation: 'پانی گردوں کی صحت کے لیے اہم ہے۔ متوازن نمکیات پتھری سے بچاتے ہیں۔'
    }
  },
  {
    id: 'nervous',
    titleEn: 'Nervous System',
    titleUr: 'اعصابی نظام',
    color: 'bg-purple-50 text-purple-700',
    iconName: 'Activity',
    en: {
      overview: 'The command center. Controls movement, digestion, and behavior.',
      organs: ['Brain', 'Spinal Cord', 'Nerves'],
      functions: [
        'Coordination: Walking, eating, standing.',
        'Sensation: Feeling pain, heat, cold.',
        'Response: Reacting to danger.'
      ],
      commonProblems: ['Tetany (Magnesium deficiency)', 'Rabies', 'Milk Fever (Paralysis)', 'Tetanus'],
      careTips: [
        'Vaccinate against Rabies/Tetanus.',
        'Treat metabolic diseases quickly.',
        'Handle animals gently to reduce stress.'
      ],
      nutritionRelation: 'Magnesium and Calcium are vital for nerve signals.'
    },
    ur: {
      overview: 'کنٹرول سینٹر۔ یہ حرکت، ہاضمہ اور رویے کو کنٹرول کرتا ہے۔',
      organs: ['دماغ', 'ریڑھ کی ہڈی', 'اعصاب'],
      functions: [
        'ربط: چلنا، کھانا، کھڑا ہونا۔',
        'احساس: درد، گرمی، سردی محسوس کرنا۔',
        'ردعمل: خطرے پر ردعمل دینا۔'
      ],
      commonProblems: ['تشنج (میگنیشیم کی کمی)', 'باؤلا پن (Rabies)', 'سوتک (فالج)', 'ٹیٹنس'],
      careTips: [
        'ریڈیز/ٹیٹنس کی ویکسین لگوائیں۔',
        'میٹابولک بیماریوں کا فوری علاج کریں۔',
        'جانوروں کے ساتھ نرمی سے پیش آئیں۔'
      ],
      nutritionRelation: 'اعصابی سگنلز کے لیے میگنیشیم اور کیلشیم بہت اہم ہیں۔'
    }
  },
  {
    id: 'musculoskeletal',
    titleEn: 'Musculoskeletal System',
    titleUr: 'عضلات و ہڈیوں کا نظام',
    color: 'bg-stone-50 text-stone-700',
    iconName: 'Layout', 
    en: {
      overview: 'Provides structure, support, and movement to the animal.',
      organs: ['Bones', 'Joints', 'Muscles', 'Hooves'],
      functions: [
        'Structure: Body shape and size.',
        'Movement: Walking and grazing.',
        'Storage: Bones store Calcium.'
      ],
      commonProblems: ['Lameness', 'Fractures', 'Weak bones (Rickets)', 'Hoof rot'],
      careTips: [
        'Regular hoof trimming.',
        'Avoid slippery floors.',
        'Provide soft bedding.'
      ],
      nutritionRelation: 'Calcium, Phosphorus, and Vitamin D are essential for strong bones.'
    },
    ur: {
      overview: 'جانور کو ڈھانچہ، سہارا اور حرکت فراہم کرتا ہے۔',
      organs: ['ہڈیاں', 'جوڑ', 'پٹھے', 'کھر'],
      functions: [
        'ڈھانچہ: جسمانی شکل اور سائز۔',
        'حرکت: چلنا اور چرنا۔',
        'ذخیرہ: ہڈیاں کیلشیم ذخیرہ کرتی ہیں۔'
      ],
      commonProblems: ['لنگڑا پن', 'ہڈی ٹوٹنا', 'کمزور ہڈیاں', 'کھر کا گلنا'],
      careTips: [
        'کھروں کی تراش خراش۔',
        'پھسلن والے فرش سے بچائیں۔',
        'نرم بستر فراہم کریں۔'
      ],
      nutritionRelation: 'مضبوط ہڈیوں کے لیے کیلشیم، فاسفورس اور وٹامن ڈی ضروری ہیں۔'
    }
  },
  {
    id: 'immune',
    titleEn: 'Immune System',
    titleUr: 'مدافعتی نظام',
    color: 'bg-emerald-50 text-emerald-700',
    iconName: 'Shield',
    en: {
      overview: 'The body\'s defense force against bacteria, viruses, and parasites.',
      organs: ['White Blood Cells', 'Lymph Nodes', 'Spleen', 'Antibodies (in Colostrum)'],
      functions: [
        'Defense: Fighting infection.',
        'Memory: Remembering past diseases (Vaccination).',
        'Healing: Repairing tissues.'
      ],
      commonProblems: ['Weak immunity due to stress', 'Vaccine failure', 'Allergies'],
      careTips: [
        'Ensure calf gets Colostrum (Boli) within 1 hour of birth.',
        'Follow vaccination schedule strictly.',
        'Avoid stress (transport, heat).'
      ],
      nutritionRelation: 'Good nutrition (Protein/Vitamins) is the foundation of immunity.'
    },
    ur: {
      overview: 'جراثیم، وائرس اور کیڑوں کے خلاف جسم کی دفاعی فوج۔',
      organs: ['سفید خلیات', 'لمف نوڈز (گلٹیاں)', 'تلی', 'اینٹی باڈیز (بولی میں)'],
      functions: [
        'دفاع: انفیکشن سے لڑنا۔',
        'یادداشت: پرانی بیماریوں کو یاد رکھنا (ویکسینیشن)۔',
        'شفایابی: ٹشوز کی مرمت۔'
      ],
      commonProblems: ['کمزور قوت مدافعت', 'ویکسین کا اثر نہ کرنا', 'الرجی'],
      careTips: [
        'پیدائش کے 1 گھنٹے کے اندر بچے کو بولی پلائیں۔',
        'ویکسینیشن شیڈول پر سختی سے عمل کریں۔',
        'تناؤ (سفر، گرمی) سے بچائیں۔'
      ],
      nutritionRelation: 'اچھی خوراک (پروٹین/وٹامنز) قوت مدافعت کی بنیاد ہے۔'
    }
  }
];