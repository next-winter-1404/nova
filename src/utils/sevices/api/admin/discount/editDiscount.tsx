
import instance from "@/src/utils/sevices/interseptor";

export async function adminEditDiscount(
    id: number,
    prevState: any,
    formData: FormData
) {
  try {
    const response = await instance.put(
      `/api/discount-codes/${id}`,
      {
        code: String(formData.get("code")),
        discount_percentage:String(formData.get("discount_percentage")),
        valid_until:formData.get("valid_until")
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