import { IVisit } from "@/src/core/types/IVisit";
import instance from "../../interseptor"

export const getVisitAppointments = async(houseId:number):Promise<IVisit[]>=>{

        const response= await instance.get(`/api/visit-appointments/house/${houseId}`)
        return response.data
   
}