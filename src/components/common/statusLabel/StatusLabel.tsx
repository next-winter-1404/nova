import React, { FC } from "react";
import { 
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaBan,
  FaRegCheckCircle
} from "react-icons/fa";

export enum BookingStatus {
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
  CANCELLED = "cancelled",
  CONFIRMED = "confirmed",
}

interface IStatus {
  status?: string;
}

const StatusLabel: FC<IStatus> = ({ status }) => {
  console.log("booking status", status);
  
  const getStatusStyle = (status?: string) => {
    switch (status) {
      case BookingStatus.PENDING:
        return "bg-[#FAC100] text-black";
      case BookingStatus.SUCCESS:
      case BookingStatus.CONFIRMED:
        return "bg-green-500 text-black";
      case BookingStatus.ERROR:
      case BookingStatus.CANCELLED:
        return "bg-[#FF989A] text-black";
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
        return "تایید شده";
      case BookingStatus.ERROR:
        return "خطا";
      case BookingStatus.CANCELLED:
        return "لغو شده";
      default:
        return status || "نامشخص";
    }
  };

  // تابع تعیین آیکون بر اساس وضعیت با استفاده از react-icons/fa
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case BookingStatus.PENDING:
        return <FaClock className="w-3 h-3 ml-1" />;
      case BookingStatus.SUCCESS:
        return <FaCheckCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.CONFIRMED:
        return <FaRegCheckCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.ERROR:
        return <FaTimesCircle className="w-3 h-3 ml-1" />;
      case BookingStatus.CANCELLED:
        return <FaBan className="w-3 h-3 ml-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${getStatusStyle(
        status
      )} w-[90px] h-[22px] rounded-4xl text-center text-sm flex items-center justify-center gap-1`}
    >
      {getStatusIcon(status)}
      {getPersianText(status)}
    </div>
  );
};

export default StatusLabel;