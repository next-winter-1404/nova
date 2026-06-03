'use client'
import Input from '@/src/components/common/input/Input';
import { postPayment } from '@/src/utils/sevices/api/processReserve/postPayment';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'



const Payment = () => {
    const router = useRouter();
    const searchParams = useSearchParams();  
    const bookingId = searchParams.get("bookingId")
    const amount = searchParams.get("amount")

    const [cardNumber, setCardNumber] = useState("");
    const [cvv2, setCvv2] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [dynamicPassword, setDynamicPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);

    useEffect(() => {
        initPayment();
    },[bookingId,amount])

    const initPayment = async () => {
        setLoading(true)
        setError(null)
        try{
            const payload = {
                amount : Number(amount),
                callbackUrl : `${window.location.origin}/processreserve/ticket/`,
                description : 'پرداخت رزرو هتل',
                bookingId : Number(bookingId)
            };
            try {
                const response = await postPayment(payload);
            }
            catch (error: any) {
            console.log(error.response);
            }
            setIsPaymentInitiated(true);
        }catch(error){
            console.error(error)
        } finally{
            setLoading(false)
        }
    }

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        setCardNumber(value.replace(/(\d{4})(?=\d)/g, '$1 '));
    };
    const validateForm = () => {
    if (cardNumber.replace(/\s/g, '').length !== 16) return 'شماره کارت باید ۱۶ رقم باشد.';
    if (cvv2.length < 4 || cvv2.length > 5) return 'CVV2 باید بین ۴ تا ۵ رقم باشد.';
    if (!year || !month) return 'تاریخ انقضا الزامی است.';
    if (dynamicPassword.length !== 5 || !/^\d+$/.test(dynamicPassword)) return 'رمز پویا باید ۵ رقم باشد.';
    return true;
    };

    const handleFinalPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
    
        const validationMsg = validateForm();
            if (validationMsg !== true) {
                setError(validationMsg);
                return;
            }   
        setLoading(true);    
        try {   
            const currentStep = searchParams.get('step') || "payment";
            const nextStep = 'ticket';
            router.push(`/processreserve/ticket?bookingId=${bookingId}&amount=${amount}&step=${nextStep}`);    
        } catch (err: any) {
            setError('خطا در پردازش نهایی. لطفاً دوباره تلاش کنید.');
            setLoading(false);
        }
    };
    return(
        <div className='flex mt-[130px] flex-col items-center md:gap-[36px] gap-[26px] w-[1683px] md:h-[950px] h-[1900px]' dir='rtl'>
            <div className="bg-dark-600 rounded-2xl shadow-xl w-2/5 overflow-hidden">
                <div className="bg-primary-accent-green p-6 text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">پرداخت امن</h2>
                    <p className="text-gray-600">مبلغ: {Number(amount).toLocaleString()} تومان</p>
                </div>

                <form onSubmit={handleFinalPayment} className="p-6 space-y-12" >
                    <div>
                        <Input 
                            dir='rtl'
                            tagBgStyle={{background: "var(--color-dark-600)"}}
                            labelText='شماره کارت'
                            InputHeight={'h-[50px]'}
                            labelTextSize='text-[16px]'
                            textSize='md:text-[16px] text-[12px]'
                            borderColor='border-gray-300'
                            textColor='text-gray-300'
                            labelTextColor='text-gray-300'
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeHolder="XXXX XXXX XXXX XXXX"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"                           
                        />
                    </div>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <Input
                                dir='rtl'
                                tagBgStyle={{background: "var(--color-dark-600)"}}
                                labelText='CVV2'
                                InputHeight={'h-[50px]'}
                                labelTextSize='text-[16px]'
                                textSize='md:text-[16px] text-[12px]'
                                borderColor='border-gray-300'
                                textColor='text-gray-300'
                                labelTextColor='text-gray-300'
                                type="text"
                                value={cvv2}
                                onChange={(e) => setCvv2(e.target.value.replace(/\D/g, '').slice(0, 5))}
                                placeHolder = 'CVV2'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                            />
                        </div>
                        <div className="flex w-2/5 gap-2.5">
                            <Input
                                dir='rtl'
                                tagBgStyle={{background: "var(--color-dark-600)"}}
                                labelText='ماه :'
                                InputHeight={'h-[50px]'}
                                labelTextSize='text-[16px]'
                                textSize='md:text-[16px] text-[12px]'
                                borderColor='border-gray-300'
                                textColor='text-gray-300'
                                labelTextColor='text-gray-300'
                                type="text"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                name='month'
                                placeHolder="MM"
                                className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg outline-none"
                            />
                            <Input
                                dir='rtl'
                                tagBgStyle={{background: "var(--color-dark-600)"}}
                                labelText='سال'
                                InputHeight={'h-[50px]'}
                                labelTextSize='text-[16px]'
                                textSize='md:text-[16px] text-[12px]'
                                borderColor='border-gray-300'
                                textColor='text-gray-300'
                                labelTextColor='text-gray-300'
                                type="text"
                                value={year}
                                name='year'
                                onChange={(e) => setYear(e.target.value)}
                                placeHolder="YY"
                                className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <Input
                            dir='rtl'
                            tagBgStyle={{background: "var(--color-dark-600)"}}
                            labelText='رمز پویا'
                            InputHeight={'h-[50px]'}
                            labelTextSize='text-[16px]'
                            textSize='md:text-[16px] text-[12px]'
                            borderColor='border-gray-300'
                            textColor='text-gray-300'
                            labelTextColor='text-gray-300'
                            type="text"
                            value={dynamicPassword}
                            onChange={(e) => setDynamicPassword(e.target.value.replace(/\D/g, '').slice(0, 5))}
                            placeHolder="۵ رقم"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                        />
                    </div>
                    {error && (
                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200">
                        {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all ${
                        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-accent-green hover:bg-primary-accent-green-transparent-64 shadow-lg'
                        }`}
                    >
                        {loading ? 'در حال پردازش...' : 'پرداخت و تکمیل رزرو'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Payment