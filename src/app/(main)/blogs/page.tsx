import BlogCard from "@/src/components/common/blogCard/blogCard";
import { Breadcrumb } from "@/src/components/common/breadCrumbs";
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg";
import Image from "next/image";
import { getBlogs } from "@/src/utils/sevices/api/blogs/getBlogs";
import BlogCategories from "@/src/components/blogs/categories";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import SimilarNavbarItem from "@/src/components/reserveHouse/similarHouse/navbarItem";
import { formatDateTime } from "@/src/utils/hooks/formDates";
import Slide from "@/src/components/animations/Slide";
import ScrollFloat from "@/src/components/animations/ScrollFloat/ScrollFloat";

export const revalidate = 30;
const BlogPage = async () => {
  const items = [{ label: "مقالات" }];
  const result = await getBlogs();
  const blogs = result?.data;
  const CategoryResult = await getCategory();
  const category = CategoryResult?.data;
  const blogLength = blogs?.length;

  return (
    <Slide direction="right">
      <div className="flex w-full justify-center p-3 ">
        <div className="mt-25 xl:w-[1376px] lg:w-[1090px]  w-[80%] flex items-end flex-col gap-6">
          <Breadcrumb items={items} />
          <div className="flex flex-col gap-6" dir="rtl">
            <div className="flex items-center gap-2">
              <span className="text-primary-accent-green">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.1}
                >
                  همیشه خودتو بروز نگه دار
                </ScrollFloat>
              </span>
              <Image src={LeftTriangle} alt="." className="max-w-none mb-1" />
            </div>

            <span className="text-32-semibold text-white-pure">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
                در بالاترین سطح دانش با مقالات دلتا
              </ScrollFloat>
            </span>
            <p className="text-white-pure">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
                در این قسمت می توانید بروز ترین مقالات دنیای ملک و مکان های
                تفریحی را پیدا کنید و از جدید ترین مطالب ما لذت ببرید !
              </ScrollFloat>
            </p>
          </div>
          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-6 mt-10">
            {blogs?.slice(0, 4).map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog?.id}
                caption={blog.caption}
                created_at={formatDateTime(blog.created_at)}
                estimated_reading_time={blog.estimated_reading_time}
                title={blog.title}
              />
            ))}
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-10 w-full">
            {blogs?.slice(4, 6).map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog?.id}
                caption={blog.caption}
                created_at={formatDateTime(blog.created_at)}
                estimated_reading_time={blog.estimated_reading_time}
                title={blog.title}
              />
            ))}
          </div>
          <div className=" w-full">
            <BlogCategories data={category} />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 p-4 w-[500px] gap-6  mt-10 w-full">
            {blogs?.slice(6, blogLength).map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog?.id}
                caption={blog.caption}
                created_at={formatDateTime(blog.created_at)}
                estimated_reading_time={blog.estimated_reading_time}
                title={blog.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default BlogPage;
