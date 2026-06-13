'use client';

import { useMemo, useState } from 'react';
import Input from '../input/Input';

const DepositRentCalculator = () => {
    const [deposit, setDeposit] = useState('');
    const [rent, setRent] = useState('');

    const result = useMemo(() => {
        const depositValue = Number(deposit) || 0;
        const rentValue = Number(rent) || 0;

        const depositToRent = depositValue / 30000000;
        const rentToDeposit = rentValue * 30000000;

        return {
            depositToRent,
            rentToDeposit,
        };
    }, [deposit, rent]);

    return (
        <div className="w-full bg-dark-700 rounded-xl flex flex-col gap-5" dir='rtl'>
        <h3 className="text-white text-[16px] ">
            ماشین حساب تبدیل رهن و اجاره
        </h3>

        <div className="flex flex-col gap-2">
            <Input
                labelText="مبلغ رهن (تومان)"
                InputHeight="h-[45px]"
                tagBgStyle={{
                background: "var(--color-dark-700)",
                }}
                borderColor="border-white-pure border"
                textColor="text-white-pure text-[14px]"
                placeHolder="مثال: 100000000"
                parentWidth="w-full"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
                type='number'
                dir='rtl'
                labelTextSize='text-[15px]'
            />

            {deposit && (
            <p className="text-primary-accent-green text-[15px]">
                معادل اجاره:
                {' '}
                {result.depositToRent.toFixed(1)}
                {' '}
                میلیون تومان
            </p>
            )}
        </div>
        <div className="border border-dark-600" />

        <div className="flex flex-col gap-2">
            <Input
                labelText="مبلغ اجاره ماهانه (تومان)"
                InputHeight="h-[45px]"
                tagBgStyle={{
                background: "var(--color-dark-700)",
                }}
                borderColor="border-white-pure border"
                textColor="text-white-pure text-[14px]"
                placeHolder="مثال: 5000000"
                parentWidth="w-full"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                type='number'
                dir='rtl'
                labelTextSize='text-[15px]'
            />

            {rent && (
            <p className="text-primary-accent-green text-[15px]">
                معادل رهن:
                {' '}
                {result.rentToDeposit.toLocaleString()}
                {' '}
                تومان
            </p>
            )}
        </div>
        </div>
    );
};

export default DepositRentCalculator;