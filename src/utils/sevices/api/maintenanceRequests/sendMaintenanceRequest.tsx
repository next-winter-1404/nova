import instance from "../../interseptor";

export const sendMaintenanceRequest = async ( id: number,
    prevState: any,
    formData: FormData) => {
  try {
    const response = await instance.post(
        "/api/maintenance-requests",
        {
          houseId: id,
          description: String(formData.get("description")),
        }
      );
      return {
          success: true,
          message:"گزارش شما با موفقیت ارسال شد",
        };
  } catch (error:any) {
    return {
        success: false,
        message:
          error.message ||
          "خطایی رخ داد",
      };
  }
  };
 
