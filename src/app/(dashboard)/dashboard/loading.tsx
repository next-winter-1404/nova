import { Spinner } from '@heroui/react'
import React from 'react'

const DashboardLoading = () => {
  return (
    <div className="w-full flex-center h-screen">
      <Spinner size="md" className="w-[100px] h-[100px] text-primary-accent-green" />
    </div>
  )
}

export default DashboardLoading
