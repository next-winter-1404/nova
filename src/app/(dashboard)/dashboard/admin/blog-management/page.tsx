import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import BlogItemsManagement from "@/src/components/dashboard/blogItemsManagement/BlogItemsManagement";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import { getBlogs } from "@/src/utils/sevices/api/blogs/getBlogs";
import React from "react";
import { TbDots } from "react-icons/tb";

const AdminBlogManagementPage = async () => {
  const items = ["نام نویسنده", "عنوان", "تاریخ ایجاد"];
  const result = await getBlogs();
  const blogs = result.data || [];
  return (
    <DashboardContentContainer title={`لیست مقالات (${result.totalCount})`}>
      <div className="flex flex-col gap-5">
        <ItemNavbar colsNumber={3} items={items} />
        <div className="" >
          {blogs?.map((blog) => (
            <div  key={blog.id} className="flex justify-between w-full items-center">
              <div className="grid grid-cols-3 gap-5 text-white w-full md:px-10 items-center">
              <UserName userId={Number(blog.author_id)} />
              <p className="truncate">{blog.title || "عنوانی وجود ندارد"}</p>
              <p>{blog.created_at?.slice(0, 10) || "تاریخی وجود ندارد"}</p>
            </div>
            <BlogItemsManagement blogId={blog.id}/>
            </div>
          ))}
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default AdminBlogManagementPage;
