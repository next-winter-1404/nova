import instance from "../../interseptor"

export const getVisitAppointments = async(houseId:number)=>{
    try {
        const response= await instance.get(`/api/visit-appointments/house/${houseId}`)
        return response.data
    } catch (error) {
        console.error("خطایی رخ داد",error);
    }
}