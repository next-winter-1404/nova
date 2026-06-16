import BlureLightCircle from "../../common/BlureLightCircle";
import Container from "../../common/Container";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { recommendation } from "@/src/utils/sevices/api/recommendation/recommendation";
import SimilarHouseItems from "../../reserveHouse/similarHouse/SimilarHouseItems";
import ScrollFloat from "../../animations/ScrollFloat/ScrollFloat";

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
              <h2 className="text-32-medium">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.1}
                >
                  ✨ خانه‌های پیشنهادی برای شما
                </ScrollFloat>
              </h2>
              <p className="text-16-medium text-center text-white">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.1}
                >
                  بر اساس علاقه‌مندی‌ها و رفتار شما، این خانه‌ها پیشنهاد شده‌اند
                </ScrollFloat>
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
