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
  ERROR = "error",
  CANCELLED = "cancelled",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  FAILED = "failed",
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
        return "bg-green-500 text-black";
      case BookingStatus.ERROR:
      case BookingStatus.CANCELLED:
      case BookingStatus.FAILED:
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
        return "تایید شده";
      case BookingStatus.ERROR:
        return "خطا";
      case BookingStatus.CANCELLED:
      case BookingStatus.FAILED:
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
        return <FaRegCheckCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.ERROR:
        return <FaTimesCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.CANCELLED:
      case BookingStatus.FAILED:
        return <FaBan className="w-3 h-3 ml-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${getStatusStyle(
        status
      )} md:w-[90px] w-[50px] md:h-[22px] text-[10px] rounded-4xl text-center whitespace-nowrap md:text-[14px] flex items-center justify-center p-px gap-px md:gap-1`}
    >
      {getStatusIcon(status)}
      {getPersianText(status)}
    </div>
  );
};

export default StatusLabel;
