import MaintenanceRequestComponent from "@/src/components/dashboard/maintenanceRequestComponent/MaintenanceRequestComponent";
import { getAllMaintenance } from "@/src/utils/sevices/api/maintenanceRequests/getAllMaintenance";

const AdminMaintenanceManagement = async () => {
  const items = ["نام کاربر", "توضیحات خرابی", " ایجاد شده در تاریخ", "وضعیت"];

  const allMaintenance = await getAllMaintenance();

  return <MaintenanceRequestComponent allMaintenance={allMaintenance || []} />;
};

export default AdminMaintenanceManagement;
