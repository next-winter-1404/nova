import BlureLightCircle from "../../common/BlureLightCircle";
import Container from "../../common/Container";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { recommendation } from "@/src/utils/sevices/api/recommendation/recommendation";
import SimilarHouseItems from "../../reserveHouse/similarHouse/SimilarHouseItems";

const Recommendation = async () => {
  const userId = await getServerSideCookie("userId");
  const result = await recommendation(Number(userId));

  return (
    <div className="relative flex-center items-start padding-section w-full h-186">
      <BlureLightCircle position="sm:right-8 top-5" />
      {/* <ContentContainerShape /> */}
      <div className="w-344 absolute flex flex-col gap-6 p-8">
        <div className="w-full flex flex-col gap-6 items-end justify-start">
          <div className="w-full flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-32-medium">✨ خانه‌های پیشنهادی برای شما</h2>
              <p className="text-16-medium text-center text-white">
                بر اساس علاقه‌مندی‌ها و رفتار شما، این خانه‌ها پیشنهاد شده‌اند
              </p>
            </div>
          </div>
        </div>
        <Container>
          <div className="w-full overflow-hidden flex-center gap-8">
            <SimilarHouseItems houses={result.recommendations} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Recommendation;
