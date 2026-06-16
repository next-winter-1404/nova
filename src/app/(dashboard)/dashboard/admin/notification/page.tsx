import FadeIn from "@/src/components/animations/FadeIn";
import NotificationPage from "@/src/components/dashboard/notification/notificationPage/notificationPage";

const AdminNotificationPage = async ({
  searchParams,
}: {
  searchParams: Promise<any>;
}) => {
  return (
    <FadeIn>
      <NotificationPage searchParams={searchParams} />
    </FadeIn>
  );
};

export default AdminNotificationPage;
