"use client";
import Input from "@/src/components/common/input/Input";
import toast from "react-hot-toast";
import LoginButton from "@/src/components/login/button/LoginButton";
import { PostSocialMedia } from "@/src/utils/sevices/api/socialMedia/postSocialMedia";
import { useState } from "react";


const CreateSocialMediaPage= () => {
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
    <form  className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}> 
      <div className="w-1/4 mt-5">
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
      
      <div className="w-1/2">
        <Input
          name="url"
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="لینک"
          value={formData.url}
          onChange={handleChange}
        />
      </div>
      <div className="w-1/4 ">
      <LoginButton
        buttonText="ساخت پلتفرم"
        loadingText=" درحال ساخت ..."
        type="submit"
        buttonStyle="w-full bg-primary-accent-green"
      />
      </div>      
    </form>
  );
};

export default CreateSocialMediaPage;
