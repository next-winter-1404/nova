import MaintenanceRequestComponent from "@/src/components/dashboard/maintenanceRequestComponent/MaintenanceRequestComponent";
import { getAllMaintenance } from "@/src/utils/sevices/api/maintenanceRequests/getAllMaintenance";
import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";

const SellerMaintenanceManagement = async () => {
  const allMaintenance = await getAllMaintenance();
  const sellerHouses = await getSellerHouses();
  const sellerHouseIds = sellerHouses.houses?.map(
    (sellerHouse) => sellerHouse.id
  );
  const filteredRequests = allMaintenance.filter((req) =>
    sellerHouseIds?.includes(req.houseId)
  );
  return (
    <MaintenanceRequestComponent allMaintenance={filteredRequests || []} />
  );
};

export default SellerMaintenanceManagement;
