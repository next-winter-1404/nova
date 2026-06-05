import { IVisit } from "@/src/core/types/IVisit";
import instance from "../../interseptor"

export const getUserVisitAppointments = async():Promise<IVisit[]>=>{

        const response= await instance.get("/api/visit-appointments/user")
        return response.data
   
}