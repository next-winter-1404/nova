"use client";

import { useActionState, useEffect, useRef, useTransition } from "react";
import toast from "react-hot-toast";
import Button from "../../common/button/page";
import { uploadProfilePicture } from "@/src/utils/sevices/api/users/uploadPicture";

const ChoosePicture = ({ onSuccess }: { onSuccess?: () => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

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

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="flex gap-5">
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
          className="w-[87px] h-10 bg-primary-accent-green rounded-xl flex items-center justify-center cursor-pointer"
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
          color: "white",
        }}
      />
    </div>
  );
};

export default ChoosePicture;