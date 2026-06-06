import instance from "../../../interseptor";

export const sendSellerUpgradeRequest = async (
    prevState: any,
    formData: FormData) => {
  try {
    const response = await instance.post(
        "/api/seller-upgrade/request",
        {
            message: String(formData.get("message")),
        }
      );
      return {
          success: true,
          message:"درخواست  شما با موفقیت ارسال شد",
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
 
