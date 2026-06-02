"use client";
import { useEffect, useState } from "react";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import Image from "next/image";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
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
        setName(`${user?.user?.firstName} ${user?.user?.lastName}`);
        setPic(user?.user?.profilePicture);
      } catch (error) {
        setName(`کاربر`);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <span className="text-gray-400">در حال بارگذاری...</span>;
  return (
    <div className="flex gap-1 items-center py-1">
      <Image
        alt="prof"
        src={pic || userPlaceHolder}
        width={50}
        height={50}
        className="rounded-lg border border-gray-300"
      />
      <span className="mr-3 text-center ">{name}</span>
    </div>
  );
};

export default UserName;
