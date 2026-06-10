import instance from "@/src/utils/sevices/interseptor";


export const getLocationById = async(id:number) => {
    const res = await instance.get(
        `/api/locations/${id}`, 
    );
      console.log("API RES =", res);
    
    return res.data
}