"use client";
import { useState } from "react";
import ToolTip from "../../common/tooltip";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { addToFavorites } from "@/src/utils/sevices/api/favorites/addToFavorite";
import { removeFromFavorites } from "@/src/utils/sevices/api/favorites/deleteFavorite";

interface IAddToFavoriteProps {
  houseId?: number;
  isFavorite?: boolean;
  favoriteId?: number;
  onSuccess?: () => void;
}

const AddToFavorite = ({
  houseId,
  isFavorite,
  favoriteId,
  onSuccess,
}: IAddToFavoriteProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = async () => {
    if (isLoading || !houseId) return;

    setIsLoading(true);
    try {
      if (isFavorite) {
        if (favoriteId) {
          await removeFromFavorites(favoriteId);
          toast.success("از علاقه‌مندی‌ها حذف شد");
        }
      } else {
        await addToFavorites(Number(houseId));
        toast.success("به علاقه‌مندی‌ها اضافه شد");
      }

      onSuccess?.();
    } catch (error: any) {
      toast.error(error.message || "خطا در انجام عملیات");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ToolTip
      mainContent={
        <div
          onClick={handleToggleFavorite}
          className={`flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-primary-accent-green transition cursor-pointer ${
            isLoading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {isFavorite ? (
            <FaHeart className="w-4 h-4 text-red-600" />
          ) : (
            <FiHeart className="w-4 h-4 text-gray-300 hover:text-black" />
          )}
        </div>
      }
      tooltipText={
        isLoading
          ? "در حال پردازش..."
          : isFavorite
          ? "حذف از علاقه‌مندی‌ها"
          : "افزودن به علاقه‌مندی‌ها"
      }
    />
  );
};

export default AddToFavorite;
