
import { z } from 'zod';

export const transaction_type = z.enum(['rental', 'mortgage', 'reservation','direct purchase']);
export const categories = z.enum(['apartment', 'villa', 'land', 'house', 'commercial']); 
export const yard_type = z.enum(['garden', 'terrace', 'none']);


export const houseFormSchema = z.object({
    title: z.string()
        .min(5, 'نام ملک باید حداقل ۵ کاراکتر باشد')
        .max(100, 'نام خیلی طولانی است'),

    price: z.string()
        .min(1, 'قیمت الزامی است')
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: 'قیمت باید یک عدد مثبت باشد',
    }),

    transaction_type: transaction_type, 

    categories: categories, 


    capacity: z.string()
        .refine((val) => !val || !isNaN(Number(val)), {
        message: 'ظرفیت باید عدد باشد',
        }),

    rooms: z.string()
        .min(1, 'تعداد اتاق الزامی است')
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: 'تعداد اتاق باید عدد باشد',
        }),

    bathrooms: z.string()
        .min(1, 'تعداد حمام الزامی است')
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: 'تعداد حمام باید عدد باشد',
        }),

    parking: z.string()
        .min(1, 'تعداد پارکینگ الزامی است')
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: 'تعداد پارکینگ باید عدد باشد',
        }),

    yard_type: yard_type,

    description: z.string()
        .min(10, 'توضیحات باید حداقل ۱۰ کاراکتر باشد')
        .max(2000, 'توضیحات خیلی طولانی است'),

    address: z.string()
        .min(5, 'آدرس باید حداقل ۵ کاراکتر باشد'),

    photos: z.array(z.instanceof(File))
        .min(1, 'لطفاً حداقل یک عکس انتخاب کنید')
        .max(10, 'حداکثر می‌توانید ۱۰ عکس آپلود کنید'),
});

export type HouseFormData = z.infer<typeof houseFormSchema>;
