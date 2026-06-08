'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import { updateSocialMedia } from "@/src/utils/sevices/api/socialMedia/editSocial";
import { useRouter } from "next/navigation";


interface IProps {
    social: {
        id: number;
        platform: string;
        url: string;
    };
}

const EditSocialMediaForm = ({
    social,
}: IProps) => {
    const [formData, setFormData] = useState({
        platform: social.platform,
        url: social.url,
    });
    const router = useRouter();
    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

    try {
        await updateSocialMedia(
            social.id,
            formData
        );

        toast.success(
            "با موفقیت ویرایش شد"
        );
        router.push("/dashboard/admin/social-media")
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
            <div className="w-1/4 mt-5">
                <Input
                    name="platform"
                    InputHeight="md:h-[50px] h-[35px] text-white"
                    dir="rtl"
                    tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
                    value={formData.platform}
                    onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        platform: e.target.value,
                    }))
                    }
                    labelText="پلتفرم"
                />
            </div>
            <div className="w-1/2">
                <Input
                    name="url"
                    InputHeight="md:h-[50px] h-[35px] text-white"
                    dir="rtl"
                    tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
                    value={formData.url}
                    onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        url: e.target.value,
                    }))
                    }
                    labelText="لینک"
                />
            </div>
            <div className="w-1/4 ">
            <LoginButton
                type="submit"
                buttonText="ذخیره تغییرات"
                loadingText="در حال ذخیره..."
                buttonStyle="w-full bg-primary-accent-green"
            />
            </div>
        </form>
    );
};

export default EditSocialMediaForm;