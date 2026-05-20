'use client';
import React from 'react'


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'فروردین', فروش: 4000 },
  { name: 'اردیبهشت', فروش: 3000 },
  { name: 'خرداد', فروش: 5000 },
];

export default function MyLineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        {/* خطوط شبکه پشت زمینه */}
        <CartesianGrid strokeDasharray="3 3" stroke="#4E4E4E" />
        {/* محور X ها */}
        <XAxis dataKey="name" stroke="#AAAAAA" />
        {/* محور Y ها */}
        <YAxis stroke="#AAAAAA" />
        {/* راهنمای شناور (Tooltip) */}
        <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: 'none' }} />
        {/* خود خط نمودار */}
        <Line type="monotone" dataKey="فروش" stroke="#8CFF45" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
export const ReserveChart = () => {
  return (
    <>
      {MyLineChart()}
    </>
  )
}


