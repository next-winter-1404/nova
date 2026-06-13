
import instance from "@/src/utils/sevices/interseptor";

export async function adminCreateDiscount(
    prevState: any,
    formData: FormData
) {
  try {
    const response = await instance.post(
      `/api/discount-codes`,
      {
        code: String(formData.get("code")),
        discount_percentage:String(formData.get("discount_percentage")),
        valid_until:formData.get("valid_until"),
        house_id:formData.get("houseId")
      }
    );

    return {
      success: true,
      message:"با موفقیت اپدیت شد",
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "خطایی رخ داد",
    };
  }
}