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
import { getAllHouses } from "@/src/utils/sevices/api/admin/houses/getAllHouses/getAllHouses";
import { getSellerHouses } from "@/src/utils/sevices/api/seller/houses/getHouses";
import { FC } from "react";
import { RiBuildingLine } from "react-icons/ri";
interface IProp {
  searchParams: Promise<{ houseId: string }>;
}
const AdminQAManagement: FC<IProp> = async ({ searchParams }) => {
  const items = ["نام کاربر","پاسخ توسط", "سوال کاربر", "تاریخ ایجاد ", "اخرین ویرایش"];
  const params = await searchParams;
  const houseId = params.houseId;
  const result = await getAllHouses();
  const sellerHouse = result.data || [];

  const parsedHouseId = Number(houseId);
  const hasValidHouseId = houseId && !isNaN(parsedHouseId);

  const houseQA = hasValidHouseId ? await getHouseQA(parsedHouseId) : [];
  return (
    <DashboardContentContainer
      title={`لیست سوالات کاربران (${houseQA.length})`}
      topSectionContent={
        <Modal
          contentClassName="bg-dark-900 text-white text-right"
          modalTitle="لیست املاک شما:"
          width="lg:w-[60%] overflow-y-auto h-[550px]"
          mainContent={<SellerHouse modalHouse={sellerHouse.slice(0,6)} />}
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
          houseQA.map((QA) => (
            <div
              key={QA.id}
              className="flex justify-between w-full items-center"
            >
              <div className="grid grid-cols-5 items-center text-white w-full text-[13px] md:text-base">
                <div className="md:px-10">
                  <UserName userId={Number(QA.userId)} />
                </div>
                {QA.answeredBy?
                    (<div className="px-10">
                    <UserName userId={Number(QA.answeredBy)} />
                  </div>):(<span className="text-center ">---</span>)
                }
                <ToolTip
                  mainContent={
                    <p className="truncate text-center">{QA.question}</p>
                  }
                  tooltipText={QA.question}
                />
                <p className="text-center">{formatDateTime(QA.created_at)}</p>
                <p className="text-center">{formatDateTime(QA.updated_at)}</p>
              </div>
              <QAItemsManagement
                questionId={Number(QA.id)}
                answer={QA.answer}
              />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-300 lg:text-3xl mt-5">
            هیچ سوالی برای این خانه وجود ندارد
          </div>
        )}
      </div>
    </DashboardContentContainer>
  );
};

export default AdminQAManagement;
