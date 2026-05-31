"use client";
import { useEffect, useState } from "react";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";

interface UserNameProps {
  userId: number;
}

const UserName = ({ userId }: UserNameProps) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUsersDetail(userId);
        setName(`${user?.user?.firstName} ${user?.user?.lastName}`);
      } catch (error) {
        setName(`کاربر`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]);

  if (loading) return <span className="text-gray-400">در حال بارگذاری...</span>;
  return <span className="mr-3 text-center">{name}</span>;
};

export default UserName;