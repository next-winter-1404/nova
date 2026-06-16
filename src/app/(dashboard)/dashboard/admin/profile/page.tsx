import FadeIn from '@/src/components/animations/FadeIn'
import UserInfoPage from '@/src/components/dashboard/userInfoPage/userInfoPage'
import React from 'react'

const AdminProfilePage = () => {
  return (
   <FadeIn> <UserInfoPage/></FadeIn>

  )
}

export default AdminProfilePage
