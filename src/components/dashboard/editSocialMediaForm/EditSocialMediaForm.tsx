'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import { updateSocialMedia } from "@/src/utils/sevices/api/socialMedia/editSocial";


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
    } catch (error) {
        toast.error(
            "خطایی رخ داد"
        );
    }
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8"
        >
        <Input
            name="platform"
            value={formData.platform}
            onChange={(e) =>
            setFormData((prev) => ({
                ...prev,
                platform: e.target.value,
            }))
            }
            labelText="پلتفرم"
        />

        <Input
            name="url"
            value={formData.url}
            onChange={(e) =>
            setFormData((prev) => ({
                ...prev,
                url: e.target.value,
            }))
            }
            labelText="لینک"
        />

        <LoginButton
            type="submit"
            buttonText="ذخیره تغییرات"
            loadingText="در حال ذخیره..."
        />
        </form>
    );
};

export default EditSocialMediaForm;