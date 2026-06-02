import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRateProps {
  initialRateNumber?: number;
  onRate?: (rating: number) => void;
  size?: number;
  readonly?: boolean;
}

export default function StarRate({ 
  initialRateNumber = 0, 
  onRate, 
  size = 28 
}: StarRateProps) {
  const [rating, setRating] = useState(initialRateNumber);

  useEffect(() => {
    setRating(initialRateNumber);
  }, [initialRateNumber]);
  
  const handleClick = (star: number) => {
    setRating(star);
    if (onRate) {
      onRate(star);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={size}
          className={
            star <= rating
              ? "text-yellow-400 cursor-pointer"
              : "text-gray-400 cursor-pointer"
          }
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
}