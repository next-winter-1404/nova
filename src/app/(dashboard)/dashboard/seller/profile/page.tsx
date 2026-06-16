import FadeIn from "@/src/components/animations/FadeIn";
import UserInfoPage from "@/src/components/dashboard/userInfoPage/userInfoPage";

const SellerInformationPage = () => {
  return (
    <FadeIn>
      <UserInfoPage />
    </FadeIn>
  );
};

export default SellerInformationPage;
