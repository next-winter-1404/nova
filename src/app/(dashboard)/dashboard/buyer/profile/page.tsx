import FadeIn from "@/src/components/animations/FadeIn";
import UserInfoPage from "@/src/components/dashboard/userInfoPage/userInfoPage";

const BuyerInformationPage = () => {
  return (
    <FadeIn>
      <UserInfoPage />
    </FadeIn>
  );
};

export default BuyerInformationPage;
