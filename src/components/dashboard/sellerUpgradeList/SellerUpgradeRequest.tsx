"use client";
import React, { FC, useState } from "react";
import Button from "../../common/button/page";
import StatusLabel from "../../common/statusLabel/StatusLabel";
import { Modal } from "../../common/modal";
import SimpleDropdown from "../../common/dropDown";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";
import instance from "@/src/utils/sevices/interseptor";
import { useRouter } from "next/navigation";
import { SellerUpgradeRequest } from "@/src/core/types/SellerUpgradeRequest";
import PaginationClient from "../../common/pagination/page";
interface IProp {
  allSellerRequest: SellerUpgradeRequest[];
  totalPages?: number;
  totalCount?: number;
}
const SellerUpgradeRequest: FC<IProp> = ({
  allSellerRequest,
  totalCount,
  totalPages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const [notes, setNotes] = useState<Record<number, string>>({});

  const statusOptions = [
    { value: "pending", label: "در انتظار" },
    { value: "approved", label: "تایید شده" },
    { value: "rejected", label: "رد شده" },
  ];

  const handleRequest = async (
    id: number,
    action: "approve" | "reject",
    adminNote: string
  ) => {
    try {
      await instance.put(`/api/seller-upgrade/admin/requests/${id}/${action}`, {
        adminNote,
      });

      toast.success(
        action === "approve" ? "درخواست تایید شد" : "درخواست رد شد"
      );

      router.refresh();
    } catch (error) {
      toast.error("خطا در انجام عملیات");
    }
  };

  return (
    <div>
      <Button
        text={"لیست فروشندگان"}
        icon={<FiUser className="w-4 h-4" />}
        buttonStyle={{
          background: "var(--color-primary-accent-green)",
          color: "black",
        }}
        onClick={() => setIsModalOpen(true)}
      />

      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        contentClassName="bg-dark-900 text-white text-right "
        modalTitle="لیست درخواست‌های فروشندگی"
        width="overflow-y-auto h-[550px] min-w-[400px]"
        mainContent={
          <div className="flex flex-col gap-5">
            <SimpleDropdown
              options={statusOptions}
              paramKey="status"
              placeholder="مرتب سازی"
              labelText="مرتب سازی"
              tagBg="bg-dark-900"
            />

            {allSellerRequest.length > 0 ? (
              allSellerRequest.map((request) => (
                <div
                key={Number(request.id)}
                className="bg-dark-600 p-5 rounded-xl border border-gray-700"
                dir="rtl"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FiUser />
                    <span>{request.user?.fullName}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiMail />
                    <span>{request.user?.email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiPhone />
                    <span>{request.user?.phoneNumber || "ثبت نشده"}</span>
                  </div>

                  <div className="border-t border-gray-500 pt-3">
                    <p className="text-sm text-gray-400">متن درخواست:</p>
                    <p className="break-words">{request.message}</p>
                  </div>

                  <div className="flex-col flex gap-5">
                    <div className="flex items-center  justify-between pt-3 ">
                      <StatusLabel status={request.status} />

                      {request.status === "pending" && (
                        <div className="flex  justify-between gap-5  w-1/2">
                          <button
                            onClick={() =>
                              handleRequest(
                                Number(request.id),
                                "approve",
                                notes[Number(request.id)] || ""
                              )
                            }
                            className="px-3 py-2 bg-green-500 text-black rounded w-full"
                          >
                            تایید
                          </button>

                          <button
                            onClick={() =>
                              handleRequest(
                                Number(request.id),
                                "reject",
                                notes[Number(request.id)] || ""
                              )
                            }
                            className="px-3 py-2 bg-red-500 text-white rounded w-full"
                          >
                            رد
                          </button>
                        </div>
                      )}
                    </div>
                    {request.status === "pending" && (
                      <div className="w-full">
                        <textarea
                          value={notes[Number(request.id)] || ""}
                          onChange={(e) =>
                            setNotes((prev) => ({
                              ...prev,
                              [Number(request.id)]: e.target.value,
                            }))
                          }
                          className="p-2 bg-dark-700 rounded text-sm w-full"
                          placeholder="یادداشت ادمین..."
                        />
                      </div>
                    )}
                  </div>
                </div>
                
              </div>
              ))
            ) : (
              <div className="w-full text-center text-gray-300 text-2xl">
                درخواستی وجود ندارد
              </div>
            )}
            <PaginationClient
                    totalCount={Number(totalCount)}
                    totalPages={Number(totalPages)}
                  />
          </div>
        }
      />
    </div>
  );
};

export default SellerUpgradeRequest;
