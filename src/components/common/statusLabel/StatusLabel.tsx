import React, { FC } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaBan,
  FaRegCheckCircle,
} from "react-icons/fa";

export enum BookingStatus {
  PENDING = "pending",
  SUCCESS = "success",
  APPROVED = "approved",
  ERROR = "error",
  CANCELLED = "canceled",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  FAILED = "failed",
  REJECTED = "rejected",
}

interface IStatus {
  status?: string;
}

const StatusLabel: FC<IStatus> = ({ status }) => {
  const getStatusStyle = (status?: string) => {
    switch (status) {
      case BookingStatus.PENDING:
        return "bg-[#FAC100] text-black";
      case BookingStatus.SUCCESS:
      case BookingStatus.CONFIRMED:
      case BookingStatus.COMPLETED:
      case BookingStatus.APPROVED:
        return "bg-green-500 text-black";
      case BookingStatus.ERROR:
      case BookingStatus.CANCELLED:
      case BookingStatus.FAILED:
      case BookingStatus.REJECTED:
        return "bg-red-400 text-black";
      default:
        return "bg-gray-500 text-black";
    }
  };

  const getPersianText = (status?: string) => {
    switch (status) {
      case BookingStatus.PENDING:
        return "در انتظار";
      case BookingStatus.SUCCESS:
        return "موفق";
      case BookingStatus.CONFIRMED:
      case BookingStatus.COMPLETED:
      case BookingStatus.APPROVED:
        return "تایید شده";
      case BookingStatus.ERROR:
        return "خطا";
      case BookingStatus.CANCELLED:
      case BookingStatus.FAILED:
      case BookingStatus.REJECTED:
        return "لغو شده";
      default:
        return status || "نامشخص";
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case BookingStatus.PENDING:
        return <FaClock className="w-3 h-3 ml-1" />;
      case BookingStatus.SUCCESS:
        return <FaCheckCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.CONFIRMED:
      case BookingStatus.COMPLETED:
      case BookingStatus.APPROVED:
        return <FaRegCheckCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.ERROR:
        return <FaTimesCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.CANCELLED:
      case BookingStatus.FAILED:
      case BookingStatus.REJECTED:
        return <FaBan className="w-3 h-3 ml-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${getStatusStyle(
        status,
      )} md:w-[90px] w-[50px] md:h-[22px] text-[10px] rounded-4xl text-center whitespace-nowrap md:text-[14px] flex items-center justify-center p-px gap-px md:gap-1`}
    >
      {getStatusIcon(status)}
      {getPersianText(status)}
    </div>
  );
};

export default StatusLabel;
