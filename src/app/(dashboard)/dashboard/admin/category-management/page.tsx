import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import CategoryItems from "@/src/components/dashboard/categoryManagement/categoryManagement";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import React, { Fragment } from "react";
import { TbDots } from "react-icons/tb";

const CategoryManagementPage = async () => {
  const result = await getCategory();
  const allCategory = result.data || [];
  return (
    <DashboardContentContainer title={`دسته بندی ها (${result.totalCount})`}>
      <div className="flex flex-col items-end">
        <div className="flex flex-col gap-5 w-full">
          <ItemNavbar colsNumber={2} items={["ایدی", "نام کتگوری"]} />
          <div>
            {allCategory.length > 0 ? (
             <div className=" text-white px-10">
             {allCategory.map((cat) => (
              <div className="flex w-full justify-between">
                 <div className="grid grid-cols-2 w-full mb-5" key={cat.id}>
                 <span className="px-20">{cat.id||"--"}</span>
                 <p className="px-7">{cat.name||"عنوانی وجود ندارد"}</p>
               </div>
                < CategoryItems categoryId={cat.id} categoryName={cat.name}/>
              </div>
             ))}
           </div>
            ) : (
              <p className="w-full text-3xl text-gray-300 text-center">
                دسته بندی وجود ندارد
              </p>
        
            )}
          </div>

        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default CategoryManagementPage;
