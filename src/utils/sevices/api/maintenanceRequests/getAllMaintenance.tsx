import { IVisit } from "@/src/core/types/IVisit";
import instance from "../../interseptor"
import { IMaintenanceRequest } from "@/src/core/types/IMaintenance";

export const getAllMaintenance = async():Promise<IMaintenanceRequest[]>=>{

        const response= await instance.get("/api/maintenance-requests")
        return response.data
   
}