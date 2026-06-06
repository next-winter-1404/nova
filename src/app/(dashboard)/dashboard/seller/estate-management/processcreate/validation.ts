
import { z } from "zod";

export const transaction_type = z.enum([
    "rental",
    "mortgage",
    "reservation",
    "direct purchase",
]);

export const categories = z.enum([
    "apartment",
    "villa",
    "land",
    "house",
    "commercial",
]);

export const yard_type = z.enum([
    "garden",
    "terrace",
    "null",
]);

export const houseFormSchema = z.object({
    title: z.string()
        .min(5, "نام ملک باید حداقل 5 کاراکتر باشد")
        .max(100),

    price: z.string()
        .min(1)
        .refine(
        val => !isNaN(Number(val)) && Number(val) > 0,
        { message: "قیمت باید عدد مثبت باشد" }
        ),

    transaction_type,
    categories,

    capacity: z.coerce.number()
        .min(1, "ظرفیت الزامی است"),

    rooms: z.coerce.number()
        .min(0),

    bathrooms: z.coerce.number()
        .min(0),

    parking: z.coerce.number()
        .min(0),

    yard_type,

    caption: z.string()
        .min(10, "توضیحات باید حداقل 10 کاراکتر باشد"),

    address: z.string()
        .min(5, "ادرس باید حداقل 5 کاراکتر باشد"),

    photos: z.array(z.instanceof(File))
        .min(1, "لطفاً حداقل یک عکس انتخاب کنید")
        .max(10, "حداکثر می‌توانید 10 عکس آپلود کنید"),
});

export const firstStepSchema =
    houseFormSchema.pick({
        title: true,
        price: true,
        transaction_type: true,
        categories: true,
        capacity: true,
        caption: true,
    });

export const secondStepSchema =
houseFormSchema.pick({
    address: true,
    });

export const thirdStepSchema =
houseFormSchema.pick({
    rooms: true,
    bathrooms: true,
    parking: true,
    yard_type: true,
})

export const forthStepSchema =
    houseFormSchema.pick({
        photos: true,
    });

export type HouseFormData =
z.infer<typeof houseFormSchema>;
  
export type HouseFormDraft =
Partial<HouseFormData>;