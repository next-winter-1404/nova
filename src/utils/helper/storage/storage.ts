import { HouseFormDraft } from "@/src/app/(dashboard)/dashboard/seller/estate-management/processcreate/validation";

const STORAGE_KEY = "houseFormData";

export const saveToLocalStorage = (
    data: HouseFormDraft
    ) => {
    try {
        localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
        );
    } catch (error) {
        console.error("خطا در ذخیره سازی:", error);
    }
};

export const loadFromLocalStorage = (): HouseFormDraft => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("خطا در خواندن:", error);
    return {};
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};