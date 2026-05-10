"use client"
import StarRate from '@/src/utils/hooks/star';
import React, { useState } from 'react'
const StarRatingContainer = () => {
    const [userRating, setUserRating] = useState(0);

    const handleRating = (rate: number) => {
      console.log("کاربر امتیاز داد:", rate);
      setUserRating(rate);
    };
  return (
    <div>
      <StarRate 
        initialRateNumber={userRating}
        onRate={handleRating}
        size={24}
      />
      

    </div>
  )
}

export default StarRatingContainer
