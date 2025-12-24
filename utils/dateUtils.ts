import { CalendarSettings } from '../types';

export const DESI_MONTHS_EN = ["Chet", "Vaisakh", "Jeth", "Har", "Sawan", "Bhadon", "Assu", "Katik", "Maghar", "Poh", "Magh", "Phagan"];
export const DESI_MONTHS_UR = ["چیت", "بیساکھ", "جیٹھ", "ہاڑ", "ساون", "بھادوں", "اسوج", "کاتک", "مگھر", "پوہ", "ماگھ", "پھاگن"];

// Base Sangrand dates (Standard Solar Calendar / Nanakshahi)
const SANGRAND_BASE = [
  { month: 0, gMonth: 2, gDay: 14 }, // Chet -> March 14
  { month: 1, gMonth: 3, gDay: 14 }, // Vaisakh -> April 14
  { month: 2, gMonth: 4, gDay: 15 }, // Jeth -> May 15
  { month: 3, gMonth: 5, gDay: 15 }, // Har -> June 15
  { month: 4, gMonth: 6, gDay: 16 }, // Sawan -> July 16
  { month: 5, gMonth: 7, gDay: 16 }, // Bhadon -> Aug 16
  { month: 6, gMonth: 8, gDay: 15 }, // Assu -> Sep 15
  { month: 7, gMonth: 9, gDay: 15 }, // Katik -> Oct 15
  { month: 8, gMonth: 10, gDay: 14 }, // Maghar -> Nov 14
  { month: 9, gMonth: 11, gDay: 14 }, // Poh -> Dec 14
  { month: 10, gMonth: 0, gDay: 13 }, // Magh -> Jan 13
  { month: 11, gMonth: 1, gDay: 12 }, // Phagan -> Feb 12
];

export const getBikramiDate = (date: Date, offset: number) => {
  const adjDate = new Date(date);
  adjDate.setHours(0, 0, 0, 0);
  
  adjDate.setDate(adjDate.getDate() + offset);
  
  const gYear = adjDate.getFullYear();
  let bkYear = gYear + 57;

  const candidates: { mIndex: number, date: Date }[] = [];
  [-1, 0].forEach(yOffset => {
      SANGRAND_BASE.forEach(s => {
          const sDate = new Date(gYear + yOffset, s.gMonth, s.gDay);
          sDate.setHours(0, 0, 0, 0);
          candidates.push({ mIndex: s.month, date: sDate });
      });
  });

  const passed = candidates.filter(c => c.date <= adjDate);
  passed.sort((a, b) => b.date.getTime() - a.date.getTime());

  if (passed.length === 0) return { day: 1, monthEn: "Chet", monthUr: "چیت", year: bkYear };

  const currentSangrand = passed[0];
  const diffTime = adjDate.getTime() - currentSangrand.date.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
  const day = diffDays + 1; 
  
  const gMonth = adjDate.getMonth();
  const gDay = adjDate.getDate();
  
  if (gMonth < 2) bkYear = gYear + 56;
  else if (gMonth === 2 && gDay < 14) bkYear = gYear + 56;
  else bkYear = gYear + 57;

  return {
      day: day,
      monthEn: DESI_MONTHS_EN[currentSangrand.mIndex],
      monthUr: DESI_MONTHS_UR[currentSangrand.mIndex],
      year: bkYear
  };
};

export const getFullDateInfo = (date: Date, settings: CalendarSettings) => {
    const gregDay = date.getDate();
    const gregMonth = date.toLocaleDateString('en-US', { month: 'short' });
    
    const bikrami = getBikramiDate(date, settings.desiOffset);
    
    return {
        gregorian: { day: gregDay, month: gregMonth },
        bikrami: { day: bikrami.day, month: bikrami.monthEn, monthUr: bikrami.monthUr }
    };
};