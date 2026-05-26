import NotificationPage from '@/src/components/dashboard/notification/notificationPage/notificationPage'

const BuyerNotificationPage = async({ searchParams }: { searchParams: Promise<any> }) => {
  return (
    <NotificationPage searchParams={searchParams}/>
  )
}

export default BuyerNotificationPage
