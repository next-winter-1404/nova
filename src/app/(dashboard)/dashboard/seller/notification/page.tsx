import NotificationPage from '@/src/components/dashboard/notification/notificationPage/notificationPage'

const SellerNotificationPage = async({ searchParams }: { searchParams: Promise<any> }) => {
  return (
    <NotificationPage searchParams={searchParams}/>
  )
}

export default SellerNotificationPage
