import FadeIn from "@/src/components/animations/FadeIn";
import MaintenanceRequestComponent from "@/src/components/dashboard/maintenanceRequestComponent/MaintenanceRequestComponent";
import { getAllMaintenance } from "@/src/utils/sevices/api/maintenanceRequests/getAllMaintenance";

const AdminMaintenanceManagement = async () => {
  const items = ["نام کاربر", "توضیحات خرابی", " ایجاد شده در تاریخ", "وضعیت","عملیات"];

  const allMaintenance = await getAllMaintenance();

  return (
    <FadeIn>
      <MaintenanceRequestComponent allMaintenance={allMaintenance || []} />
    </FadeIn>
  );
};

export default AdminMaintenanceManagement;
