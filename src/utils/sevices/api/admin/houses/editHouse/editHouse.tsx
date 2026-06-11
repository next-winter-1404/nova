"use server";

import instance from "@/src/utils/sevices/interseptor";

export async function EditHouse(
    id: number,
    prevState: any,
    formData: FormData
) {
  try {
    const response = await instance.put(
      `/api/houses/${id}`,
      {
        title: String(formData.get("title")),
        address: String(formData.get("address")),
        price: Number(formData.get("price")),
        capacity: Number(formData.get("capacity")),
        rate: Number(formData.get("rate")),
        caption: String(formData.get("caption")),
        bathrooms: Number(formData.get("bathrooms")),
        rooms: Number(formData.get("rooms")),
        parking: Number(formData.get("parking")),
        yard_type: String(formData.get("yard_type")),
        transaction_type: String(
          formData.get("transaction_type")
        ),
        category: String(formData.get("category")),
        discount_id: Number(formData.get("discount_id"))
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



export async function addDiscountToHouse(
  houseId: number,
  discountId: number | null
) {
  try {
    await instance.put(`/api/houses/${houseId}`, {
      discount_id: discountId,
    });

    return {
      success: true,
      message: "تخفیف با موفقیت اعمال شد",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "خطا",
    };
  }
}