"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { FaTimes } from "react-icons/fa";
import { useState, FC } from "react";
import { IModalProps } from "@/src/core/types/Imodal";

export const Modal: FC<IModalProps> = ({
  modalBtn,
  mainContent,
  modalDescription,
  modalTitle,
  closeBtn,
  contentClassName = "bg-white",
  width = "w-[90vw] max-w-md",
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const onOpenChange = controlledOnOpenChange || setInternalOpen;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {modalBtn && (
        <Dialog.Trigger asChild className="cursor-pointer">
          {modalBtn}
        </Dialog.Trigger>
      )}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className={`${contentClassName} ${width} z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg max-h-[85vh] p-6 focus:outline-none`}
        >
          <Dialog.Title className="text-lg font-semibold " dir="rtl">
            {modalTitle}
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500 mt-1.5">
            {modalDescription}
          </Dialog.Description>
          <div className="mt-4 mb-6">{mainContent}</div>
          {closeBtn && (
            <div className="flex justify-end cursor-pointer">
              <Dialog.Close asChild>{closeBtn}</Dialog.Close>
            </div>
          )}
          <Dialog.Close asChild>
            <button
              className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <FaTimes className="w-4 h-4 text-red-500 cursor-pointer" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
