import { Spinner } from '@heroui/react';
import React from 'react'

const SpinnerComponent = () => {
  return (
    <div className="w-screen flex-center h-screen">
    <Spinner size="xl" className="w-[200px] h-[200px] text-primary-accent-green" />
  </div>
  )
}

export default SpinnerComponent
