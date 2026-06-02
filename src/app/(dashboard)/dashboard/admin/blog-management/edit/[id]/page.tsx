
import EditBlogComponent from "@/src/components/dashboard/editBlogComponent/EditBlogComponent";
import { getBlogsDetail } from "@/src/utils/sevices/api/blogs/getBlogDetail";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import { FC } from "react";
interface IProps {
  params: Promise<{ id: number }>;
}
const BlogEdit:FC<IProps> = async ({params}) => {
  const { id } = await params;
  const result = await getCategory();
  const categories = result.data || [];
  const categoriesItems = categories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));
  const blogDetails = await getBlogsDetail(Number(id))
  return (
    <div>
     <EditBlogComponent categoriesItems={categoriesItems} blogId={id} blogDetails={blogDetails}/>
    </div>
  );
};

export default BlogEdit;
