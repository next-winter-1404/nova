"use client";
import { useEffect, useState } from "react";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import Image from "next/image";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
interface UserNameProps {
  userId: number;
}

const UserName = ({ userId }: UserNameProps) => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState<string | null | undefined>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUsersDetail(userId);
    
        const fullName = [
          user?.user?.firstName,
          user?.user?.lastName,
        ]
          .filter(Boolean)
          .join(" ");
    
        setName(fullName);
        setPic(user?.user?.profilePicture);
      } catch (error) {
        setName("");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <span className="text-gray-400">در حال بارگذاری...</span>;
  return (
    <div className="flex gap-1 items-center py-1">
      <ImageFallback
        fallbackSrc={userPlaceHolder}
        alt="prof"
        src={pic || userPlaceHolder}
        width={50}
        height={50}
        className="rounded-lg border border-gray-300 hidden md:block"
      />
      <span className="mr-3 text-center ">{name || "نام کاربر"}</span>
    </div>
  );
};

export default UserName;
