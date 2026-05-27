"use client";
import { useActionState, useEffect, useRef } from "react";
import LoginButton from "../../login/button/LoginButton";
import toast from "react-hot-toast";
import Button from "../../common/button/page";
import { uploadProfilePicture } from "@/src/utils/sevices/api/users/uploadPicture";

const ChoosePicture = ({ onSuccess }: { onSuccess?: () => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [state, formAction] = useActionState(uploadProfilePicture, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state?.message) return;
    if (state.success) {
      toast.success(state.message);
      onSuccess?.();
      window.location.reload();
    } else {
      toast.error(state.message);
    }
  }, [state, onSuccess]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("فایل انتخاب شده باید تصویر باشد");
      return;
    }

    const formData = new FormData();
    formData.append("picture", file);
    formAction(formData);
  };

//   const handleCancel = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//     onSuccess?.();
//   };

  return (
    <form action={formAction} className="flex gap-5">
      <div className="relative">
        <input
          type="file"
          name="picture"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          id="fileInput"
          onChange={handleFileChange} 
        />
        <label
          htmlFor="fileInput"
          className="w-[87px] h-10 bg-primary-accent-green rounded-xl outline-none text-center cursor-pointer flex items-center justify-center"
        >
          انتخاب فایل
        </label>
      </div>
      <Button
        text={"انصراف"}
        buttonStyle={{
          background: "transparent",
          border: "1px solid white",
          padding: 12,
          textAlign: "center",
          color: "white",
        }}
        // onClick={handleCancel}
      />
    </form>
  );
};

export default ChoosePicture;
