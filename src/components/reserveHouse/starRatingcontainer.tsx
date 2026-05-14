"use client"
import StarRate from '@/src/utils/hooks/star';
import React, { useState } from 'react'

interface StarRatingContainerProps {
  onChange?: (rating: number) => void;
  initialRating?: number;
}

const StarRatingContainer = ({ onChange, initialRating = 0 }: StarRatingContainerProps) => {
  const [userRating, setUserRating] = useState(initialRating);

  const handleRating = (rate: number) => {
    console.log("کاربر امتیاز داد:", rate);
    setUserRating(rate);
    onChange?.(rate); 
  };
  
  return (
    <div className='flex-center'>
      <StarRate 
        initialRateNumber={userRating}
        onRate={handleRating}
        size={35}
      />
    </div>
  );
}

export default StarRatingContainer;