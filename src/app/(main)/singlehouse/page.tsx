import Image from "next/image";
import Container from "@/src/components/common/Container"
import { Breadcrumb, BreadcrumbItem } from "@/src/components/common/breadCrumbs";
import HousePicture from "@/src/assets/images/singleHouse.png"

const SingleHousePage = () => {
  const items:BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رزرو هتل",
    },
    {
      label: `رزرو هتل ${"رشت"}`,
    },

  ];
  return (
    <div className="padding-section flex-col-center sm:mt-24 mt-15 bg-tomato-red">
        <div className="flex-col-center sm:gap-6 gap-3">
            <Breadcrumb items={items} twClassname="bg-white-pure w-full flex-center justify-start"/>
            <div className="flex-center justify gap-5 bg-amber-200">
                <div className="flex flex-1">LeftOne</div>
                <div className="flex-col-center gap-2.5 flex-1 rounded rounded-[32px]">
                    <div className="rounded rounded-[32px]"><Image src={HousePicture} className="h-[172px]" alt="home pic"/></div>
                    <div className=" rounded rounded-[32px] bg-dark-900-transparent-64">
                        <Image className="relative h-[172px]" src={HousePicture} alt="home pic"/>
                        <span className="bg-amber-500 absolute"> +12 عکس دیگر </span>
                    </div>
                </div>
                <div className="flex flex-2 rounded rounded-[32px] shadow-000-8">
                    <Image src={HousePicture} alt="home pic"/>
                </div>
            </div>
        </div>
      
      {/* <Container>
      </Container> */}
    </div>
  )
}

export default SingleHousePage
