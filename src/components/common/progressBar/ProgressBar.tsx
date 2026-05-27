"use client"
import { Flat } from '@alptugidin/react-circular-progress-bar';

import React, { FC } from 'react'
interface IProp{
  additionalPercentage?:number
}
const ProgressBar:FC<IProp> = ({additionalPercentage}) => {
  return (
    <Flat
  progress={additionalPercentage}
//   text="تکمیل پروفایل"
  showValue={false}
  sx={{
    strokeColor: '#8CFF45', 
    bgStrokeColor: '#4E4E4E', 
    barWidth: 5,
    valueColor: '#FFFFFF',
    textColor: '#AAAAAA',
    loadingTime: 1000,
    // shape: 'full',
    strokeLinecap: 'round'
  }}
/>
  )
}

export default ProgressBar
