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
    platform ?: string;
    page?: string | number;
    limit?: string | number;
}
const SocialMedia : FC<IProps> = async({searchParams}) => {
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

    const result = await getSocialMedia(filters)
    const media = result.data || []

    const totalPages = Math.ceil(Number(result?.totalCount) / limit);

    const orderItem = [
        { value: "ASC", label: "صعودی" },
        { value: "DESC", label: "نزولی" },
    ];

    const platformItem = [
        {value : "instagram", label : "اینستاگرام"},
        {value : "telegram", label : "تلگرام"},
        {value : "linkedin", label : "لینکدین"},
        {value : "website", label : "وب سایت"},
    ]

    const items = ["پلتفرم", "لینک"]

    return (
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
                <div className="flex flex-col gap-5 w-full">
                    <ItemNavbar colsNumber={2} items={items} />
                    <div>
                        {media?.map((media) => (
                        <div
                            key={media.id}
                            className="flex justify-between w-full items-center"
                        >
                            <div className="grid grid-cols-2 text-white w-full md:px-10 items-center">
                                <p className="h-15 mr-[80px] flex items-center">
                                    {media.platform || "پلتفرمی وجود ندارد"}
                                </p>
                                <p className="mr-[40px]">
                                    {media.url || "لینکی وجود ندارد"}
                                </p>
                            </div>
                            <SocialMediaItemsManagement mediaId={media.id} />
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between w-full items-center">
                <Link
                    href={"/dashboard/admin/social-media/create"}
                    className="cursor-pointer bg-primary-accent-green w-[150px] h-[43px] rounded-[16px] flex-center"
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
    )
}

export default SocialMedia