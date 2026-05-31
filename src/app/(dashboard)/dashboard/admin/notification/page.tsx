import NotificationPage from '@/src/components/dashboard/notification/notificationPage/notificationPage'

const AdminNotificationPage = async({ searchParams }: { searchParams: Promise<any> }) => {
  return (
    <NotificationPage searchParams={searchParams}/>
  )
}

export default AdminNotificationPage
