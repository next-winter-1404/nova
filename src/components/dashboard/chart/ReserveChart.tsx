'use client';
import { IBookingResponse } from '@/src/core/types/IBooking';
import React, { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ReserveChart: FC<IBookingResponse> = ({ data }) => {
  const chartData = (data || [])
    .filter(b => b?.created_at)
    .map(b => ({
      تاریخ: new Date(b.created_at!).toLocaleDateString('fa-IR'),
      قیمت: Number(b.house?.price) || 0,
    }))
    

  const maxPrice = Math.max(...chartData.map(d => d.قیمت), 0);

  if (chartData.length === 0) {
    return <div className="text-center text-gray-400 py-10 text-lg">رزروی وجود ندارد</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4E4E4E" />
        <XAxis dataKey="تاریخ" stroke="#AAAAAA" />
        <YAxis 
          stroke="#AAAAAA" 
          domain={[0, maxPrice]} 
          tickFormatter={(value) => value.toLocaleString()}
        />
        <Tooltip  />
        <Line type="monotone" dataKey="قیمت" stroke="#8CFF45" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReserveChart;