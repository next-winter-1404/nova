import React from 'react'

export type AgeCategory = 'کودک' | 'نوجوان' | 'جوان' | 'بزرگسال' | 'سالمند';

const GetAgeCategory = (birthDate: string) : AgeCategory => {
    if (!birthDate) return 'بزرگسال'; 

    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    
      if (age < 0) return 'بزرگسال'; // تاریخ اشتباه
      if (age < 12) return 'کودک';
      if (age < 18) return 'نوجوان';
      if (age < 30) return 'جوان';
      if (age < 60) return 'بزرگسال';
      return 'سالمند';
};

export default GetAgeCategory