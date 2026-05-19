"use client"
import { Flat } from '@alptugidin/react-circular-progress-bar';

import React from 'react'

const ProgressBar = () => {
  return (
    <Flat
  progress={40}
//   text="تکمیل پروفایل"
  showValue={false}
  sx={{
    strokeColor: '#8CFF45',    // رنگ سبز دلتا
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
