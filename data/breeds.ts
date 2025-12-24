import { StaticBreedData } from '../types';

export const breeds: StaticBreedData[] = [
  // --- CATTLE (COWS) ---
  {
    id: 'sahiwal',
    nameEn: 'Sahiwal',
    nameUr: 'ساہیوال',
    aliases: ['Lola', 'Montgomery'],
    type: 'Cow',
    en: {
      origin: 'Punjab, Pakistan (Sahiwal District)',
      purpose: 'Milk (Dairy)',
      weight: 'Male: 500-600kg, Female: 350-450kg',
      milk: { daily: '12-16 Liters', lactation: '2200-2500 Liters', fat: '4.5-5.2%' },
      appearance: { color: 'Reddish Brown / Red', structure: 'Massive hump, large dewlap, loose skin' },
      temperament: 'Docile but can be stubborn; lethargic',
      care: { diet: 'Green fodder + concentrates', housing: 'Open shed', climate: 'Hot/Dry & Humid' },
      growthRate: 'Medium',
      breedingInfo: 'Age at first calving: 36-42 months. Calving interval: 15-18 months.',
      specialTraits: ['Tick resistant', 'Heat tolerant', 'Best Zebu dairy breed']
    },
    ur: {
      origin: 'پنجاب، پاکستان (ضلع ساہیوال)',
      purpose: 'دودھ',
      weight: 'نر: 500-600 کلوگرام، مادہ: 350-450 کلوگرام',
      milk: { daily: '12-16 لیٹر', lactation: '2200-2500 لیٹر', fat: '4.5-5.2%' },
      appearance: { color: 'سرخی مائل بھورا', structure: 'بڑا کوہان، لٹکی ہوئی کھال' },
      temperament: 'شریف لیکن ضدی',
      care: { diet: 'سبز چارہ + ونڈا', housing: 'کھلا شیڈ', climate: 'گرم اور مرطوب' },
      growthRate: 'درمیانی',
      breedingInfo: 'پہلے بچے کی عمر: 36-42 ماہ۔ بچوں کا وقفہ: 15-18 ماہ۔',
      specialTraits: ['چچڑ مزاحم', 'گرمی برداشت کرنے والی', 'بہترین زیبو نسل']
    }
  },
  {
    id: 'dutch',
    nameEn: 'Dutch (Dutch Friesian)',
    nameUr: 'ڈچ (ڈچ فریزین)',
    aliases: ['Dutch Cow', 'Vilayti'],
    type: 'Cow',
    en: {
      origin: 'Netherlands',
      purpose: 'Milk & Meat (Dual Purpose)',
      weight: 'Male: 900kg, Female: 600kg',
      milk: { daily: '20-30 Liters', lactation: '5000-6000 Liters', fat: '4.0%' },
      appearance: { color: 'Black and White patches', structure: 'Compact, muscular compared to HF' },
      temperament: 'Docile',
      care: { diet: 'High quality silage/grains', housing: 'Cool shed', climate: 'Temperate/Controlled' },
      growthRate: 'Fast',
      breedingInfo: 'Age at first calving: 24-27 months.',
      specialTraits: ['Better beef quality than HF', 'Good milk yield']
    },
    ur: {
      origin: 'ہالینڈ',
      purpose: 'دودھ اور گوشت',
      weight: 'نر: 900 کلوگرام، مادہ: 600 کلوگرام',
      milk: { daily: '20-30 لیٹر', lactation: '5000-6000 لیٹر', fat: '4.0%' },
      appearance: { color: 'سیاہ اور سفید دھبے', structure: 'مضبوط جسم' },
      temperament: 'شریف',
      care: { diet: 'اچھی خوراک', housing: 'ٹھنڈا شیڈ', climate: 'ٹھنڈا ماحول' },
      growthRate: 'تیز',
      breedingInfo: 'پہلے بچے کی عمر: 24-27 ماہ۔',
      specialTraits: ['بہترین گوشت', 'اچھا دودھ']
    }
  },
  {
    id: 'gir',
    nameEn: 'Gir',
    nameUr: 'گر',
    aliases: ['Gyr', 'Desi'],
    type: 'Cow',
    en: {
      origin: 'Gujarat, India',
      purpose: 'Milk',
      weight: 'Male: 550kg, Female: 380kg',
      milk: { daily: '10-15 Liters', lactation: '1600-2200 Liters', fat: '4.5%' },
      appearance: { color: 'Red/Speckled Red', structure: 'Domed forehead, long pendulous ears' },
      temperament: 'Gentle',
      care: { diet: 'Grazing + Fodder', housing: 'Simple shed', climate: 'Tropical' },
      growthRate: 'Medium',
      breedingInfo: 'Regular breeder.',
      specialTraits: ['Very hardy', 'Unique convex forehead']
    },
    ur: {
      origin: 'گجرات، انڈیا',
      purpose: 'دودھ',
      weight: 'نر: 550 کلوگرام، مادہ: 380 کلوگرام',
      milk: { daily: '10-15 لیٹر', lactation: '1600-2200 لیٹر', fat: '4.5%' },
      appearance: { color: 'سرخ / دھبے دار', structure: 'ابھری ہوئی پیشانی، لمبے لٹکتے کان' },
      temperament: 'شریف',
      care: { diet: 'چرائی + چارہ', housing: 'سادہ شیڈ', climate: 'گرم علاقے' },
      growthRate: 'درمیانی',
      breedingInfo: 'باقاعدہ افزائش۔',
      specialTraits: ['سخت جان', 'منفرد پیشانی']
    }
  },
  {
    id: 'jersey',
    nameEn: 'Jersey',
    nameUr: 'جرسی',
    aliases: ['Jarsi'],
    type: 'Cow',
    en: {
      origin: 'Jersey Island (UK)',
      purpose: 'Milk (High Fat)',
      weight: 'Male: 600kg, Female: 400kg',
      milk: { daily: '18-25 Liters', lactation: '4000-5000 Liters', fat: '5.5-6.5%' },
      appearance: { color: 'Light Brown / Fawn', structure: 'Small frame, dished face' },
      temperament: 'Nervous/Active (Bulls can be aggressive)',
      care: { diet: 'High energy feed', housing: 'Ventilated', climate: 'Adaptable to heat' },
      growthRate: 'Fast maturation',
      breedingInfo: 'Early maturity (24 months). Easy calving.',
      specialTraits: ['Highest milk fat %', 'Feed efficient']
    },
    ur: {
      origin: 'جزیرہ جرسی (برطانیہ)',
      purpose: 'دودھ (زیادہ چکنائی)',
      weight: 'نر: 600 کلوگرام، مادہ: 400 کلوگرام',
      milk: { daily: '18-25 لیٹر', lactation: '4000-5000 لیٹر', fat: '5.5-6.5%' },
      appearance: { color: 'ہلکا بھورا / بادامی', structure: 'چھوٹا قد، خوبصورت چہرہ' },
      temperament: 'چست (نر غسیلے ہو سکتے ہیں)',
      care: { diet: 'زیادہ طاقت والی خوراک', housing: 'ہوادار', climate: 'گرمی کے لیے موزوں' },
      growthRate: 'جلد جوان ہونے والی',
      breedingInfo: 'جلد بلوغت (24 ماہ)۔ آسانی سے بچہ دیتی ہے۔',
      specialTraits: ['سب سے زیادہ چکنائی', 'کم خوراک زیادہ دودھ']
    }
  },
  {
    id: 'hf',
    nameEn: 'Holstein Friesian',
    nameUr: 'ہولسٹین فریزین',
    aliases: ['HF', 'American'],
    type: 'Cow',
    en: {
      origin: 'Netherlands / North Germany',
      purpose: 'Milk',
      weight: 'Male: 1000kg, Female: 650kg',
      milk: { daily: '30-45 Liters', lactation: '8000+ Liters', fat: '3.5%' },
      appearance: { color: 'Black & White', structure: 'Large frame, large udder' },
      temperament: 'Docile',
      care: { diet: 'Heavy feeding (TMR)', housing: 'Cooling system mandatory', climate: 'Cold/Temperate' },
      growthRate: 'Fast',
      breedingInfo: 'First calving: 24 months.',
      specialTraits: ['World\'s highest milk producer', 'Low heat tolerance']
    },
    ur: {
      origin: 'ہالینڈ / جرمنی',
      purpose: 'دودھ',
      weight: 'نر: 1000 کلوگرام، مادہ: 650 کلوگرام',
      milk: { daily: '30-45 لیٹر', lactation: '8000+ لیٹر', fat: '3.5%' },
      appearance: { color: 'سیاہ اور سفید', structure: 'بڑا جسم، بڑا حیوانہ' },
      temperament: 'شریف',
      care: { diet: 'زیادہ خوراک (TMR)', housing: 'کولنگ سسٹم لازمی', climate: 'ٹھنڈا موسم' },
      growthRate: 'تیز',
      breedingInfo: 'پہلا بچہ: 24 ماہ۔',
      specialTraits: ['دنیا کی سب سے زیادہ دودھ دینے والی', 'گرمی برداشت نہیں کرتی']
    }
  },

  // --- BUFFALOES ---
  {
    id: 'murrah',
    nameEn: 'Murrah',
    nameUr: 'مراہ',
    aliases: ['Delhi Buffalo'],
    type: 'Buffalo',
    en: {
      origin: 'Haryana, India',
      purpose: 'Milk',
      weight: 'Male: 750kg, Female: 650kg',
      milk: { daily: '15-20 Liters', lactation: '2500-3000 Liters', fat: '7%' },
      appearance: { color: 'Jet Black', structure: 'Tightly curled horns, massive body' },
      temperament: 'Docile',
      care: { diet: 'Fodder + Concentrates', housing: 'Water access', climate: 'Hot/Dry' },
      growthRate: 'Medium',
      breedingInfo: 'Late maturity compared to cows.',
      specialTraits: ['High fat milk', 'Global dairy buffalo']
    },
    ur: {
      origin: 'ہریانہ، انڈیا',
      purpose: 'دودھ',
      weight: 'نر: 750 کلوگرام، مادہ: 650 کلوگرام',
      milk: { daily: '15-20 لیٹر', lactation: '2500-3000 لیٹر', fat: '7%' },
      appearance: { color: 'گہرا سیاہ', structure: 'گول مڑے ہوئے سینگ' },
      temperament: 'شریف',
      care: { diet: 'چارہ + ونڈا', housing: 'پانی کی ضرورت', climate: 'گرم/خشک' },
      growthRate: 'درمیانی',
      breedingInfo: 'گائے کے مقابلے میں دیر سے بلوغت۔',
      specialTraits: ['زیادہ چکنائی والا دودھ', 'عالمی ڈیری بھینس']
    }
  },
  {
    id: 'jaffarabadi',
    nameEn: 'Jaffarabadi',
    nameUr: 'جعفرآبادی',
    aliases: ['Jaffri'],
    type: 'Buffalo',
    en: {
      origin: 'Gujarat, India',
      purpose: 'Milk',
      weight: 'Male: 800-1000kg, Female: 700kg',
      milk: { daily: '15-18 Liters', lactation: '2200 Liters', fat: '7-8%' },
      appearance: { color: 'Black', structure: 'Heavy heads, horns drop down then curve up' },
      temperament: 'Can be aggressive',
      care: { diet: 'High roughage intake', housing: 'Open', climate: 'Tropical' },
      growthRate: 'Large/Slow',
      breedingInfo: 'Longer calving interval.',
      specialTraits: ['Heaviest buffalo breed', 'High butterfat']
    },
    ur: {
      origin: 'گجرات، انڈیا',
      purpose: 'دودھ',
      weight: 'نر: 800-1000 کلوگرام، مادہ: 700 کلوگرام',
      milk: { daily: '15-18 لیٹر', lactation: '2200 لیٹر', fat: '7-8%' },
      appearance: { color: 'سیاہ', structure: 'بھاری سر، سینگ نیچے جا کر اوپر مڑتے ہیں' },
      temperament: 'غسیلی ہو سکتی ہے',
      care: { diet: 'زیادہ چارہ', housing: 'کھلی جگہ', climate: 'گرم علاقے' },
      growthRate: 'بڑی/سست',
      breedingInfo: 'بچوں کا وقفہ زیادہ ہے۔',
      specialTraits: ['بھاری ترین نسل', 'مکھن کی زیادہ مقدار']
    }
  },
  {
    id: 'niliravi',
    nameEn: 'Nili Ravi',
    nameUr: 'نیلی راوی',
    aliases: ['Black Gold', 'Panj Kalyan'],
    type: 'Buffalo',
    en: {
      origin: 'Punjab, Pakistan (Sutlej/Ravi rivers)',
      purpose: 'Milk',
      weight: 'Male: 700kg, Female: 600kg',
      milk: { daily: '18-22 Liters', lactation: '2500-3000 Liters', fat: '6.5%' },
      appearance: { color: 'Black with 5 white marks', structure: 'Wedge shaped, wall eyes' },
      temperament: 'Docile',
      care: { diet: 'Green fodder + water bath', housing: 'Pond required', climate: 'Riverine' },
      growthRate: 'Medium',
      breedingInfo: 'Age at first calving: 40 months.',
      specialTraits: ['Best buffalo breed of Pakistan', 'Beautiful appearance']
    },
    ur: {
      origin: 'پنجاب، پاکستان',
      purpose: 'دودھ',
      weight: 'نر: 700 کلوگرام، مادہ: 600 کلوگرام',
      milk: { daily: '18-22 لیٹر', lactation: '2500-3000 لیٹر', fat: '6.5%' },
      appearance: { color: 'سیاہ (پنج کلیان)', structure: 'مضبوط جسم، سفید آنکھیں' },
      temperament: 'شریف',
      care: { diet: 'سبز چارہ + نہانا', housing: 'تالاب ضروری', climate: 'دریا کے علاقے' },
      growthRate: 'درمیانی',
      breedingInfo: 'پہلے بچے کی عمر: 40 ماہ۔',
      specialTraits: ['پاکستان کی بہترین بھینس', 'خوبصورت شکل']
    }
  },
  {
    id: 'mehsani',
    nameEn: 'Mehsani',
    nameUr: 'مہسانی',
    aliases: [],
    type: 'Buffalo',
    en: {
      origin: 'Mehsana, Gujarat',
      purpose: 'Milk',
      weight: 'Male: 600kg, Female: 500kg',
      milk: { daily: '12-15 Liters', lactation: '1800-2000 Liters', fat: '7%' },
      appearance: { color: 'Black/Grey', structure: 'Cross of Murrah and Surti' },
      temperament: 'Docile',
      care: { diet: 'Standard dairy diet', housing: 'Stall feeding', climate: 'Semi-arid' },
      growthRate: 'Medium',
      breedingInfo: 'Good persistency in milk.',
      specialTraits: ['Persistent milker', 'Hardy']
    },
    ur: {
      origin: 'مہسانہ، گجرات',
      purpose: 'دودھ',
      weight: 'نر: 600 کلوگرام، مادہ: 500 کلوگرام',
      milk: { daily: '12-15 لیٹر', lactation: '1800-2000 لیٹر', fat: '7%' },
      appearance: { color: 'سیاہ/گرے', structure: 'مراہ اور سرتی کا ملاپ' },
      temperament: 'شریف',
      care: { diet: 'معیاری خوراک', housing: 'باندھ کر رکھنا', climate: 'نیم خشک' },
      growthRate: 'درمیانی',
      breedingInfo: 'مسلسل دودھ دینے والی۔',
      specialTraits: ['مسلسل دودھ', 'سخت جان']
    }
  },

  // --- GOATS ---
  {
    id: 'beetal',
    nameEn: 'Beetal',
    nameUr: 'بیتل',
    aliases: ['Amritsari', 'Lahori'],
    type: 'Goat',
    en: {
      origin: 'Punjab (Pakistan/India)',
      purpose: 'Meat & Milk (Dual)',
      weight: 'Male: 60kg, Female: 45kg',
      milk: { daily: '2.0-2.5 Liters', lactation: '180 Liters', fat: '4%' },
      appearance: { color: 'Black/Brown/Spotted', structure: 'Long legs, long pendulous ears, Roman nose' },
      temperament: 'Active / Intelligent',
      care: { diet: 'Browsing (leaves) + Grains', housing: 'Dry floor', climate: 'Adaptable' },
      growthRate: 'Fast',
      breedingInfo: 'High twinning rate (twins/triplets).',
      specialTraits: ['Excellent dual purpose', 'Common for Stall feeding']
    },
    ur: {
      origin: 'پنجاب',
      purpose: 'گوشت اور دودھ',
      weight: 'نر: 60 کلوگرام، مادہ: 45 کلوگرام',
      milk: { daily: '2.0-2.5 لیٹر', lactation: '180 لیٹر', fat: '4%' },
      appearance: { color: 'سیاہ/بھورا/دھبے دار', structure: 'لمبی ٹانگیں، لمبے لٹکتے کان' },
      temperament: 'چست / ذہین',
      care: { diet: 'پتے + دانہ', housing: 'خشک فرش', climate: 'ہر موسم' },
      growthRate: 'تیز',
      breedingInfo: 'جڑواں بچے دینے کی صلاحیت زیادہ ہے۔',
      specialTraits: ['بہترین دوہری مقصد والی', 'فارم کے لیے موزوں']
    }
  },
  {
    id: 'kamori',
    nameEn: 'Kamori',
    nameUr: 'کاموری',
    aliases: [],
    type: 'Goat',
    en: {
      origin: 'Sindh, Pakistan',
      purpose: 'Milk & Meat',
      weight: 'Male: 70kg, Female: 50kg',
      milk: { daily: '2-3 Liters', lactation: '200+ Liters', fat: '4%' },
      appearance: { color: 'Reddish brown with black spots', structure: 'Large body, very long ears' },
      temperament: 'Calm',
      care: { diet: 'High quality forage', housing: 'Open paddock', climate: 'Hot' },
      growthRate: 'Fast',
      breedingInfo: 'Prolific breeder.',
      specialTraits: ['Distinctive beauty', 'Expensive breed']
    },
    ur: {
      origin: 'سندھ، پاکستان',
      purpose: 'دودھ اور گوشت',
      weight: 'نر: 70 کلوگرام، مادہ: 50 کلوگرام',
      milk: { daily: '2-3 لیٹر', lactation: '200+ لیٹر', fat: '4%' },
      appearance: { color: 'سرخی مائل بھورا اور دھبے', structure: 'بڑا جسم، بہت لمبے کان' },
      temperament: 'پر سکون',
      care: { diet: 'اچھی خوراک', housing: 'کھلی جگہ', climate: 'گرم' },
      growthRate: 'تیز',
      breedingInfo: 'زیادہ بچے دینے والی۔',
      specialTraits: ['منفرد خوبصورتی', 'مہنگی نسل']
    }
  },
  {
    id: 'ddp',
    nameEn: 'Daira Din Panah (DDP)',
    nameUr: 'ڈیرہ دین پناہ',
    aliases: ['DDP'],
    type: 'Goat',
    en: {
      origin: 'Muzaffargarh, Punjab',
      purpose: 'Milk & Meat',
      weight: 'Male: 50-60kg, Female: 40-50kg',
      milk: { daily: '2.5 Liters', lactation: '200 Liters', fat: '4%' },
      appearance: { color: 'Black', structure: 'Long hair, bulbous nose, long ears' },
      temperament: 'Hardy',
      care: { diet: 'Grazing', housing: 'Simple', climate: 'Hot/Arid' },
      growthRate: 'Medium',
      breedingInfo: 'Good milk for kids.',
      specialTraits: ['Hairy coat', 'Heat resistant']
    },
    ur: {
      origin: 'مظفر گڑھ، پنجاب',
      purpose: 'دودھ اور گوشت',
      weight: 'نر: 50-60 کلوگرام، مادہ: 40-50 کلوگرام',
      milk: { daily: '2.5 لیٹر', lactation: '200 لیٹر', fat: '4%' },
      appearance: { color: 'سیاہ', structure: 'لمبے بال، موٹی ناک، لمبے کان' },
      temperament: 'سخت جان',
      care: { diet: 'چرائی', housing: 'سادہ', climate: 'گرم/خشک' },
      growthRate: 'درمیانی',
      breedingInfo: 'بچوں کے لیے اچھا دودھ۔',
      specialTraits: ['لمبے بال', 'گرمی کی مزاحمت']
    }
  },
  {
    id: 'barbari',
    nameEn: 'Barbari',
    nameUr: 'بربری',
    aliases: ['City Goat'],
    type: 'Goat',
    en: {
      origin: 'India/Pakistan',
      purpose: 'Meat',
      weight: 'Male: 35-40kg, Female: 25-30kg',
      milk: { daily: '1.0 Liter', lactation: '100 Liters', fat: '4.5%' },
      appearance: { color: 'White with red/brown spots', structure: 'Small, compact, deer-like' },
      temperament: 'Alert',
      care: { diet: 'Stall feeding', housing: 'Small space', climate: 'Dry' },
      growthRate: 'Medium',
      breedingInfo: 'Triplets are common. 2 kiddings in 14 months.',
      specialTraits: ['Ideal for home farming', 'High prolificacy']
    },
    ur: {
      origin: 'انڈیا/پاکستان',
      purpose: 'گوشت',
      weight: 'نر: 35-40 کلوگرام، مادہ: 25-30 کلوگرام',
      milk: { daily: '1.0 لیٹر', lactation: '100 لیٹر', fat: '4.5%' },
      appearance: { color: 'سفید پر سرخ/بھورے دھبے', structure: 'چھوٹی، ہرن جیسی' },
      temperament: 'چست',
      care: { diet: 'گھر پر خوراک', housing: 'کم جگہ', climate: 'خشک' },
      growthRate: 'درمیانی',
      breedingInfo: 'تین بچے عام ہیں۔ 14 ماہ میں 2 بار بچے دیتی ہے۔',
      specialTraits: ['گھریلو فارمنگ کے لیے بہترین', 'زیادہ پیداوار']
    }
  },
  {
    id: 'kaghani',
    nameEn: 'Kaghani',
    nameUr: 'کاغانی',
    aliases: ['Pahari'],
    type: 'Goat',
    en: {
      origin: 'Kaghan Valley, KPK',
      purpose: 'Meat & Hair',
      weight: 'Male: 40-50kg, Female: 35-40kg',
      milk: { daily: '0.5 Liter', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'White/Grey/Black', structure: 'Thick coat of hair, sturdy legs' },
      temperament: 'Agile climber',
      care: { diet: 'Mountain grazing', housing: 'Cold protection', climate: 'Cold/Mountainous' },
      growthRate: 'Slow',
      breedingInfo: 'Seasonal breeder.',
      specialTraits: ['Produces hair for rugs', 'Mountain adapted']
    },
    ur: {
      origin: 'وادی کاغان، خیبر پختونخوا',
      purpose: 'گوشت اور بال',
      weight: 'نر: 40-50 کلوگرام، مادہ: 35-40 کلوگرام',
      milk: { daily: '0.5 لیٹر', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'سفید/گرے/سیاہ', structure: 'گھنے بال، مضبوط ٹانگیں' },
      temperament: 'پہاڑی',
      care: { diet: 'پہاڑی چرائی', housing: 'سردی سے بچاؤ', climate: 'سرد/پہاڑی' },
      growthRate: 'سست',
      breedingInfo: 'موسمی افزائش۔',
      specialTraits: ['قالین کے لیے بال', 'پہاڑی حالات کی عادی']
    }
  },
  {
    id: 'nachi',
    nameEn: 'Nachi',
    nameUr: 'ناچی',
    aliases: ['Dancing Goat'],
    type: 'Goat',
    en: {
      origin: 'Punjab (Bahawalpur)',
      purpose: 'Meat & Milk',
      weight: 'Male: 45kg, Female: 35kg',
      milk: { daily: '1.5 Liters', lactation: '120 Liters', fat: '4%' },
      appearance: { color: 'Black', structure: 'Dancing gait, compact' },
      temperament: 'Active',
      care: { diet: 'Grazing', housing: 'Standard', climate: 'Hot' },
      growthRate: 'Medium',
      breedingInfo: 'Normal fertility.',
      specialTraits: ['Unique dancing walking style', 'Good leather']
    },
    ur: {
      origin: 'پنجاب (بہاولپور)',
      purpose: 'گوشت اور دودھ',
      weight: 'نر: 45 کلوگرام، مادہ: 35 کلوگرام',
      milk: { daily: '1.5 لیٹر', lactation: '120 لیٹر', fat: '4%' },
      appearance: { color: 'سیاہ', structure: 'ناچتی ہوئی چال' },
      temperament: 'چست',
      care: { diet: 'چرائی', housing: 'معیاری', climate: 'گرم' },
      growthRate: 'درمیانی',
      breedingInfo: 'عام زرخیزی۔',
      specialTraits: ['چلنے کا منفرد انداز', 'اچھا چمڑا']
    }
  },
  {
    id: 'chappar',
    nameEn: 'Chappar',
    nameUr: 'چھپر',
    aliases: ['Kohistani'],
    type: 'Goat',
    en: {
      origin: 'Sindh / Balochistan',
      purpose: 'Meat',
      weight: 'Male: 35kg, Female: 25-30kg',
      milk: { daily: 'Low', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'White/Black', structure: 'Small, hardy, straight horns' },
      temperament: 'Wild/Hardy',
      care: { diet: 'Sparse grazing', housing: 'Open range', climate: 'Arid/Mountain' },
      growthRate: 'Slow',
      breedingInfo: 'High survival rate of kids.',
      specialTraits: ['Survives on very little food', 'Tough']
    },
    ur: {
      origin: 'سندھ / بلوچستان',
      purpose: 'گوشت',
      weight: 'نر: 35 کلوگرام، مادہ: 25-30 کلوگرام',
      milk: { daily: 'کم', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'سفید/سیاہ', structure: 'چھوٹی، سخت جان' },
      temperament: 'سخت جان',
      care: { diet: 'کم خوراک', housing: 'کھلا علاقہ', climate: 'خشک/پہاڑی' },
      growthRate: 'سست',
      breedingInfo: 'بچوں کے بچنے کی شرح زیادہ ہے۔',
      specialTraits: ['بہت کم خوراک پر گزارہ', 'مضبوط']
    }
  },

  // --- SHEEP ---
  {
    id: 'baluchi',
    nameEn: 'Baluchi',
    nameUr: 'بلوچی',
    aliases: ['Dumbi'],
    type: 'Sheep',
    en: {
      origin: 'Balochistan',
      purpose: 'Meat & Wool',
      weight: 'Male: 40-45kg, Female: 30-35kg',
      milk: { daily: '0.5 Liter', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'White with black spots on head/legs', structure: 'Fat tail, woolly' },
      temperament: 'Hardy',
      care: { diet: 'Range grazing', housing: 'Open', climate: 'Arid/Cold' },
      growthRate: 'Medium',
      breedingInfo: 'Seasonal breeder.',
      specialTraits: ['Fat tail stores energy', 'Tasty meat']
    },
    ur: {
      origin: 'بلوچستان',
      purpose: 'گوشت اور اون',
      weight: 'نر: 40-45 کلوگرام، مادہ: 30-35 کلوگرام',
      milk: { daily: '0.5 لیٹر', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'سفید، سر/ٹانگوں پر سیاہ دھبے', structure: 'چکتی دم، اونی' },
      temperament: 'سخت جان',
      care: { diet: 'پہاڑی چرائی', housing: 'کھلا', climate: 'خشک/سرد' },
      growthRate: 'درمیانی',
      breedingInfo: 'موسمی افزائش۔',
      specialTraits: ['دم میں توانائی کا ذخیرہ', 'لذیذ گوشت']
    }
  },
  {
    id: 'lohi',
    nameEn: 'Lohi',
    nameUr: 'لوہی',
    aliases: ['Parkinni'],
    type: 'Sheep',
    en: {
      origin: 'Punjab, Pakistan',
      purpose: 'Meat (Mutton) & Wool',
      weight: 'Male: 65-80kg, Female: 45-55kg',
      milk: { daily: '1.0 Liter', lactation: '120 Liters', fat: '5%' },
      appearance: { color: 'White body, Reddish head', structure: 'Large body, long ears, tassel on forehead' },
      temperament: 'Gregarious',
      care: { diet: 'Good grazing + crop residue', housing: 'Paddock', climate: 'Plains' },
      growthRate: 'Fast',
      breedingInfo: 'High fertility. Good mothering.',
      specialTraits: ['Best mutton breed of Pakistan', 'Heavy weight']
    },
    ur: {
      origin: 'پنجاب، پاکستان',
      purpose: 'گوشت اور اون',
      weight: 'نر: 65-80 کلوگرام، مادہ: 45-55 کلوگرام',
      milk: { daily: '1.0 لیٹر', lactation: '120 لیٹر', fat: '5%' },
      appearance: { color: 'سفید جسم، سرخ سر', structure: 'بڑا جسم، لمبے کان' },
      temperament: 'گروہ پسند',
      care: { diet: 'اچھی چرائی', housing: 'باڑ', climate: 'میدانی' },
      growthRate: 'تیز',
      breedingInfo: 'زیادہ زرخیزی۔ اچھی ماں۔',
      specialTraits: ['پاکستان کی بہترین گوشت کی نسل', 'بھاری وزن']
    }
  },
  {
    id: 'kajli',
    nameEn: 'Kajli',
    nameUr: 'کجلی',
    aliases: ['Pahari'],
    type: 'Sheep',
    en: {
      origin: 'Sargodha, Punjab',
      purpose: 'Meat & Wool',
      weight: 'Male: 55-65kg, Female: 40-50kg',
      milk: { daily: '0.8 Liter', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'White, Black eye circles', structure: 'Roman nose, large size' },
      temperament: 'Active',
      care: { diet: 'Grazing', housing: 'Clean pen', climate: 'Plains' },
      growthRate: 'Medium-Fast',
      breedingInfo: 'Regular breeder.',
      specialTraits: ['Eid sacrifice favorite', 'Beautiful "Kajal" eyes']
    },
    ur: {
      origin: 'سرگودھا، پنجاب',
      purpose: 'گوشت اور اون',
      weight: 'نر: 55-65 کلوگرام، مادہ: 40-50 کلوگرام',
      milk: { daily: '0.8 لیٹر', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'سفید، آنکھوں گرد سیاہ حلقے', structure: 'توتی ناک، بڑا سائز' },
      temperament: 'چست',
      care: { diet: 'چرائی', housing: 'صاف جگہ', climate: 'میدانی' },
      growthRate: 'درمیانی-تیز',
      breedingInfo: 'باقاعدہ افزائش۔',
      specialTraits: ['عید قربان کے لیے مقبول', 'خوبصورت آنکھیں']
    }
  },
  {
    id: 'damani',
    nameEn: 'Damani',
    nameUr: 'دامانی',
    aliases: ['Lama'],
    type: 'Sheep',
    en: {
      origin: 'D.I. Khan, KPK',
      purpose: 'Milk & Meat',
      weight: 'Male: 35-40kg, Female: 30kg',
      milk: { daily: '1.0-1.2 Liters', lactation: '100 Liters', fat: '4%' },
      appearance: { color: 'White/Black head', structure: 'Small size, thin tail' },
      temperament: 'Docile',
      care: { diet: 'Scanty grazing', housing: 'Simple', climate: 'Hot/Arid' },
      growthRate: 'Slow',
      breedingInfo: 'Good dairy sheep.',
      specialTraits: ['Heat tolerant', 'Dairy purpose sheep']
    },
    ur: {
      origin: 'ڈی آئی خان، خیبر پختونخوا',
      purpose: 'دودھ اور گوشت',
      weight: 'نر: 35-40 کلوگرام، مادہ: 30 کلوگرام',
      milk: { daily: '1.0-1.2 لیٹر', lactation: '100 لیٹر', fat: '4%' },
      appearance: { color: 'سفید/سیاہ سر', structure: 'چھوٹا سائز، پتلی دم' },
      temperament: 'شریف',
      care: { diet: 'کم خوراک', housing: 'سادہ', climate: 'گرم/خشک' },
      growthRate: 'سست',
      breedingInfo: 'دودھ دینے والی بھیڑ۔',
      specialTraits: ['گرمی برداشت', 'دودھ کے لیے موزوں']
    }
  },
  {
    id: 'balkhi',
    nameEn: 'Balkhi',
    nameUr: 'بلخی',
    aliases: ['Afghan Sheep'],
    type: 'Sheep',
    en: {
      origin: 'Afghanistan / KPK',
      purpose: 'Meat (Fat)',
      weight: 'Male: 70-90kg, Female: 50-60kg',
      milk: { daily: 'Low', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'Black/Brown/Grey', structure: 'Huge fat tail, large body' },
      temperament: 'Hardy',
      care: { diet: 'Grazing', housing: 'Open', climate: 'Cold' },
      growthRate: 'Fast',
      breedingInfo: 'Seasonal.',
      specialTraits: ['Massive fat tail', 'Delicious meat']
    },
    ur: {
      origin: 'افغانستان / خیبر پختونخوا',
      purpose: 'گوشت (چربی)',
      weight: 'نر: 70-90 کلوگرام، مادہ: 50-60 کلوگرام',
      milk: { daily: 'کم', lactation: 'N/A', fat: 'N/A' },
      appearance: { color: 'سیاہ/بھورا/گرے', structure: 'بہت بڑی چکتی دم، بڑا جسم' },
      temperament: 'سخت جان',
      care: { diet: 'چرائی', housing: 'کھلا', climate: 'سرد' },
      growthRate: 'تیز',
      breedingInfo: 'موسمی۔',
      specialTraits: ['بہت بڑی دم', 'لذیذ گوشت']
    }
  }
];