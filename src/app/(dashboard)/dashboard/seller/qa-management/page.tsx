import FadeIn from "@/src/components/animations/FadeIn";
import Button from "@/src/components/common/button/page";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import { Modal } from "@/src/components/common/modal";
import ToolTip from "@/src/components/common/tooltip";
import QAItemsManagement from "@/src/components/dashboard/QAItemsManagement/QAItemsManagement";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import SellerHouse from "@/src/components/dashboard/sellerHouse/SellerHouse";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import { getHouseQA } from "@/src/utils/sevices/api/QA/gettHouseQA";
import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";
import { FC } from "react";
import { RiBuildingLine } from "react-icons/ri";
interface IProp {
  searchParams: Promise<{ houseId: string }>;
}
const SellerQAManagement: FC<IProp> = async ({ searchParams }) => {
  const items = ["نام کاربر", "سوال کاربر", "تاریخ ایجاد ", "اخرین ویرایش", "پاسخ ها"];
  const params = await searchParams;
  const houseId = params.houseId;
  const result = await getSellerHouses();
  const sellerHouse = result.houses || [];

  const parsedHouseId = Number(houseId);
  const hasValidHouseId = houseId && !isNaN(parsedHouseId);

  const houseQA = hasValidHouseId ? await getHouseQA(parsedHouseId) : [];
  return (
    <FadeIn>
      <DashboardContentContainer
        title={`لیست سوالات کاربران (${houseQA.length})`}
        topSectionContent={
          <Modal
            contentClassName="bg-dark-900 text-white text-right"
            modalTitle="لیست املاک شما:"
            width="lg:w-[60%] overflow-y-auto h-[550px]"
            mainContent={<SellerHouse modalHouse={sellerHouse} />}
            modalBtn={
              <Button
                text={"انتخاب ملک"}
                buttonStyle={{
                  background: "var(--color-primary-accent-green)",
                  color: "black",
                }}
                icon={<RiBuildingLine className="w-4 h-4" />}
              />
            }
          />
        }
      >
      <div className="flex flex-col gap-5">
  <ItemNavbar colsNumber={5} items={items} />

  {!houseId ? (
    <div className="w-full text-blue-300 text-center text-2xl mt-5">
      هنوز ملکی انتخاب نشده است. برای مشاهده سوالات مربوط به ملک، روی
      «انتخاب ملک» کلیک کنید.
    </div>
  ) : houseQA.length > 0 ? (
    <div className="flex flex-col gap-3 w-full">
      {houseQA.map((QA) => (
        <div
          key={QA.id}
          className="
            grid
            grid-cols-5
            items-center

            w-full
            bg-dark-800
            rounded-xl

            px-2 md:px-3
            py-2

            text-white-pure
            text-[11px] md:text-[15px]

            transition-all
            duration-300
            ease-out
            transform-gpu

            hover:-translate-y-1
            hover:scale-[1.01]
            hover:bg-dark-700
            hover:shadow-xl
            hover:shadow-black/30

            border
            border-transparent
            hover:border-white/10
          "
        >
          {/* USER */}
          <div className="px-2 truncate">
            <UserName userId={Number(QA.userId)} />
          </div>

          {/* QUESTION */}
          <div className="text-center truncate">
            <ToolTip
              mainContent={
                <span className="truncate block">
                  {QA.question}
                </span>
              }
              tooltipText={QA.question}
            />
          </div>

          {/* CREATED DATE */}
          <p className="text-center truncate">
            {formatDateTime(QA.created_at)}
          </p>

          {/* UPDATED DATE */}
          <p className="text-center truncate">
            {formatDateTime(QA.updated_at)}
          </p>

          {/* ACTIONS */}
          <div className="flex justify-center">
            <QAItemsManagement
              questionId={Number(QA.id)}
              answer={QA.answer}
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-300 lg:text-3xl mt-5">
      هیچ سوالی برای این خانه وجود ندارد
    </div>
  )}
</div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default SellerQAManagement;
