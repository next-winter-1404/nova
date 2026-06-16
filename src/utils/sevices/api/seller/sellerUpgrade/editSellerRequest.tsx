import instance from "../../../interseptor";

export const approvedSellerUpgradeRequest = async (
    id:number,
    prevState: any,
    formData: FormData) => {
  try {
    const response = await instance.put(
        `/api/seller-upgrade/admin/requests/${id}/approve`,
        {
            adminNote: String(formData.get("adminNote")),
        }
      );
      return {
          success: true,
          message:"تایید شد",
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
 
export const rejectSellerUpgradeRequest = async (
    id:number,
    prevState: any,
    formData: FormData) => {
  try {
    const response = await instance.put(
        `/api/seller-upgrade/admin/requests/${id}/reject`,
        {
            adminNote: String(formData.get("adminNote")),
        }
      );
      return {
          success: true,
          message:"تایید شد",
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
 
