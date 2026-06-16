"use client";
import Input from "@/src/components/common/input/Input";
import toast from "react-hot-toast";
import LoginButton from "@/src/components/login/button/LoginButton";
import { PostSocialMedia } from "@/src/utils/sevices/api/socialMedia/postSocialMedia";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/src/components/animations/FadeIn";


const CreateSocialMediaPage= () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
      platform: "",
      url: ""
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await PostSocialMedia({
        platform : formData.platform,
        url : formData.url
      })
      toast.success("پلتفرم شما با موفقیت ساخته شد!");
      setFormData({ platform: "", url: "" });
      router.push("/dashboard/admin/social-media")
    }catch (error: any) {
      console.log(error.response?.data);
      console.log(error.response?.status);
    }
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setFormData((prev) => ({
        ...prev,
        [name] : value
      }));
    };
  return (
    <FadeIn>
    <form  className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}> 
      <div className=" w-1/2 mt-5">
        <Input
          name="platform"
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="پلتفرم"
          value={formData.platform}
          onChange={handleChange}
        />
      </div>
      
        <Input
          name="url"
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="لینک"
          value={formData.url}
          onChange={handleChange}
        />
      <LoginButton
        buttonText="ساخت پلتفرم"
        loadingText=" درحال ساخت ..."
        type="submit"
      />     
    </form>
    </FadeIn>
  );
};

export default CreateSocialMediaPage;
