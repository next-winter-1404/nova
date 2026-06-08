import instance from "../../interseptor";

export async function predictPrice(prevState: any, formData: FormData) {
    try {
      const response = await instance.post(`/api/recommendations/predict`, {
        size: Number(formData.get("size")),
        rooms: Number(formData.get("rooms")),
        location: String(formData.get("location")), 
        amenities: formData.get("amenities"),
      });
  
      return {
        success: true,
        message: "موفقیت آمیز بود",
        predictedPrice: response.data?.predictedPrice, 
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "خطایی رخ داد",
      };
    }
  }