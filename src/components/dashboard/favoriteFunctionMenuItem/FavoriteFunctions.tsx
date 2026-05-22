"use client";

import { removeFromFavorites } from "@/src/utils/sevices/api/favorites/deleteFavorite";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import toast from "react-hot-toast";

interface IProps {
  favoriteId: number;
  houseId?: number;
}
const FavoriteFunctions: FC<IProps> = ({ favoriteId, houseId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = async () => {
    if (isLoading || !houseId) return;

    setIsLoading(true);
    try {
      if (favoriteId) {
        await removeFromFavorites(favoriteId);
        toast.success("از علاقه‌مندی‌ها حذف شد");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.message || "خطا در انجام عملیات");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button
        className="border"
        onClick={() => {
          router.push(`/reserve-house/${houseId}`);
        }}
      >
        detail
      </button>
      <button
        className="border"
        onClick={() => {
          handleToggleFavorite()
        }}
      >
        delete
      </button>
    </div>
  );
};

export default FavoriteFunctions;
