"use client";
import Input from "@/src/components/common/input/Input";
import toast from "react-hot-toast";
import LoginButton from "@/src/components/login/button/LoginButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminPostLocation } from "@/src/utils/sevices/api/locations/postLocation/postLocation";
import FadeIn from "@/src/components/animations/FadeIn";


const CreateLocationsPage= () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
      areaName: "",
      lat: "",
      lng : ""
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await adminPostLocation({
        areaName : formData.areaName,
        lat : formData.lat,
        lng : formData.lng
      })
      toast.success("موقعیت شما با موفقیت ساخته شد!");
      setFormData({ areaName: "", lat: "", lng: "" });
      router.push("/dashboard/admin/locations")
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
      <div className="w-full mt-5">
        <Input
          name="areaName"
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="موقعیت"
          value={formData.areaName}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-3">
      <div className="md:w-1/4 w-1/2">
        <Input
          name="lat"
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="عرض جغرافیایی"
          value={formData.lat}
          onChange={handleChange}
        />
      </div>
      <div className="md:w-1/4 w-1/2">
        <Input
          name="lng"
          InputHeight="md:h-[50px] h-[35px] text-white"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
          labelText="طول جغرافیایی"
          value={formData.lng}
          onChange={handleChange}
        />
      </div>
      </div>
      
      <LoginButton
        buttonText="ساخت موقعیت"
        loadingText=" درحال ساخت ..."
        type="submit"
      />    
    </form>
    </FadeIn>
  );
};

export default CreateLocationsPage;
