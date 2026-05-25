"use client";

import { removeFromFavorites } from "@/src/utils/sevices/api/favorites/deleteFavorite";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { TbCreditCard, TbDots } from "react-icons/tb";
import DropMenu from "../../common/dropMenu/DropMenu";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
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
  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => router.push(`/reserve-house/${houseId}`),
    },

    {
      label: "حذف",
      icon: <FaRegCircleXmark className="mt-px text-red-500" />,
      onClick: () => handleToggleFavorite(),
    },
  ];
  return (
    <div>
      <DropMenu
        trigger={
          <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition" />
        }
        items={menuItems}
        side="bottom"
        align="end"
      />
    </div>
  );
};

export default FavoriteFunctions;
