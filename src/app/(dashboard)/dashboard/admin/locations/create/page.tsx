"use client";
import Input from "@/src/components/common/input/Input";
import toast from "react-hot-toast";
import LoginButton from "@/src/components/login/button/LoginButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminPostLocation } from "@/src/utils/sevices/api/locations/postLocation/postLocation";
import LocationPickerMap from "@/src/components/common/map/LocationPickerMap";

const CreateLocationsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    areaName: "",
    lat: "",
    lng: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await adminPostLocation({
        areaName: formData.areaName,
        lat: formData.lat,
        lng: formData.lng,
      });
      toast.success("موقعیت شما با موفقیت ساخته شد!");
      setFormData({ areaName: "", lat: "", lng: "" });
      router.push("/dashboard/admin/locations");
    } catch (error: any) {
      console.log(error.response?.data);
      console.log(error.response?.status);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
      <div className="w-full mt-5">
        <Input
          name="areaName"
          InputHeight="md:h-[50px] h-[35px] text-white-pure "
          borderColor="border-white-pure"
          dir="rtl"
          tagBgStyle={{ background: "var(--color-dark-900)", color: "var(--color-white-pure)" }}
          labelText="موقعیت"
          value={formData.areaName}
          onChange={handleChange}
        />
      </div>
      {/* <div className="flex gap-3">
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
      </div> */}
      <LocationPickerMap
        onLocationChange={(lat, lng) =>
          setFormData((prev) => ({
            ...prev,
            lat: lat.toString(),
            lng: lng.toString(),
          }))
        }
      />
      <div className="flex flex-col gap-2 text-white-pure text-sm mt-2">
        <p>عرض جغرافیایی: {formData.lat || "-"}</p>
        <p>طول جغرافیایی: {formData.lng || "-"}</p>
      </div>
      <LoginButton
        buttonText="ساخت موقعیت"
        loadingText=" درحال ساخت ..."
        type="submit"
      />
    </form>
  );
};

export default CreateLocationsPage;
