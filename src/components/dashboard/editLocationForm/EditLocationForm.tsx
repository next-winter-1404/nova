'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import { useRouter } from "next/navigation";
import { adminEditLocation } from "@/src/utils/sevices/api/locations/editLocation/editLocation";


interface IProps {
    location: {
        id: number;
        areaName: string;
        lat: string;
        lng : string;
    };
}

const EditLocationForm = ({
    location,
}: IProps) => {
    const [formData, setFormData] = useState({
        areaName: location.areaName,
        lat: location.lat,
        lng : location.lng,
    });
    const router = useRouter();
    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

    try {
        await adminEditLocation(
            location.id,
            formData
        );

        toast.success(
            "با موفقیت ویرایش شد"
        );
        router.push("/dashboard/admin/locations")
    } catch (error) {
        toast.error(
            "خطایی رخ داد"
        );
    }
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-full"
        >
            <div className="w-full mt-5">
                <Input
                    name="areaName"
                    InputHeight="md:h-[50px] h-[35px] text-white"
                    dir="rtl"
                    tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
                    value={formData.areaName}
                    onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        areaName: e.target.value,
                    }))
                    }
                    labelText="موقعیت"
                />
            </div>
            <div className="flex gap-3">
                <div className="md:w-1/4 w-1/2">
                    <Input
                        name="lat"
                        InputHeight="md:h-[50px] h-[35px] text-white"
                        dir="rtl"
                        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
                        value={formData.lat}
                        onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            lat: e.target.value,
                        }))
                        }
                        labelText="عرض جغرافیایی"
                    />
                </div>
                <div className="w-1/2 md:w-1/4">
                    <Input
                        name="lng"
                        InputHeight="md:h-[50px] h-[35px] text-white"
                        dir="rtl"
                        tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
                        value={formData.lat}
                        onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            lng: e.target.value,
                        }))
                        }
                        labelText="طول جغرافیایی"
                    />
                </div>
            </div>
            <LoginButton
                type="submit"
                buttonText="ذخیره تغییرات"
                loadingText="در حال ذخیره..."
            />
        </form>
    );
};

export default EditLocationForm;