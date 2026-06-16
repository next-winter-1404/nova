import FadeIn from "@/src/components/animations/FadeIn";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import SocialMediaItemsManagement from "@/src/components/dashboard/socialMediaItemsManagement/SocialMediaItemsManagement";
import { getSocialMedia } from "@/src/utils/sevices/api/socialMedia/getSocial";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  searchParams: Promise<IFilters>;
}
interface IFilters {
  order?: string;
  platform?: string;
  page?: string | number;
  limit?: string | number;
}
const SocialMedia: FC<IProps> = async ({ searchParams }) => {
  const limit = 5;

  const params = await searchParams;
  const order = params.order;
  const platform = params.platform;
  const currentPage = Number(params.page) || 1;

  const filters: IFilters = {};
  if (order) filters.order = order;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;
  if (platform) filters.platform = platform;

  const result = await getSocialMedia(filters);
  const media = result.data || [];

  const totalPages = Math.ceil(Number(result?.totalCount) / limit);

  const orderItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];

  const platformItem = [
    { value: "instagram", label: "اینستاگرام" },
    { value: "telegram", label: "تلگرام" },
    { value: "linkedin", label: "لینکدین" },
    { value: "website", label: "وب سایت" },
  ];

  const items = ["پلتفرم", "لینک", "عملیات"];

  return (
    <FadeIn>
      <DashboardContentContainer
        title={`لیست شبکه های اجتماعی (${result.totalCount})`}
        twTopContent="w-1/2"
        topSectionContent={
          <div className="flex gap-4  w-full py-2">
            <SimpleDropdown
              options={orderItem}
              paramKey="order"
              placeholder="ترتیب نمایش"
              labelText="ترتیب نمایش"
              tagBg="bg-dark-600"
              triggerClassName="w-1/2 h-[50px]"
            />
            <SimpleDropdown
              options={platformItem}
              paramKey="platform"
              placeholder="انتخاب کنید"
              labelText=" پلتفرم "
              tagBg="bg-dark-600"
              triggerClassName="w-1/2 h-[50px]"
            />
          </div>
        }
      >
        <div className="flex flex-col gap-9 items-end">
          <div className="flex flex-col gap-3 w-full">
            <ItemNavbar colsNumber={3} items={items} />

            <div className="flex flex-col gap-3 w-full">
              {media?.map((item) => (
                <div
                  key={item.id}
                  className="
  grid
  grid-cols-3
  items-center

  w-full
  bg-dark-800
  rounded-xl

  px-5 md:px-8
  py-4

  text-white-pure
  text-[12px] md:text-[15px]

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

  cursor-pointer
"
                >
                  {/* PLATFORM */}
                  <p className="text-center truncate">
                    {item.platform || "پلتفرمی وجود ندارد"}
                  </p>

                  {/* URL */}
                  <p className="text-center truncate">
                    {item.url || "لینکی وجود ندارد"}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex justify-center">
                    <SocialMediaItemsManagement mediaId={item.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <Link
              href={"/dashboard/admin/social-media/create"}
              className="cursor-pointer text-black bg-primary-accent-green md:w-[150px] w-[100px] h-[33px] md:h-[43px] rounded-[16px] flex-center"
            >
              ساخت پلتفرم +
            </Link>

            <PaginationClient
              totalPages={totalPages}
              totalCount={Number(result?.totalCount)}
            />
          </div>
        </div>
      </DashboardContentContainer>
    </FadeIn>
  );
};

export default SocialMedia;
