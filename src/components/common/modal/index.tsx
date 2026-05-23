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
  contentClassName="bg-white",
  width="w-[90vw] max-w-md"
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className='cursor-pointer'>{modalBtn}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 " />

        <Dialog.Content className={`${contentClassName } ${width} z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg  max-h-[85vh] p-6 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200`}>
          {/* modal title */}
          <Dialog.Title className="text-lg font-semibold text-gray-900">
            {modalTitle}
          </Dialog.Title>

          {/* modal description */}
          <Dialog.Description className="text-sm text-gray-500 mt-1.5">
            {modalDescription}
          </Dialog.Description>

          {/* main content*/}
          <div className="mt-4 mb-6">{mainContent}</div>

          {/* close button (it will appear at the bottom of the modal. you can also replace it with other buttons like submit button) */}
          <div className="flex justify-end cursor-pointer">
            <Dialog.Close asChild>{closeBtn}</Dialog.Close>
          </div>

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
