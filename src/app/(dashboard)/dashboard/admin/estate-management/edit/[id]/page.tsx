import FadeIn from "@/src/components/animations/FadeIn";
import EditHouseComponent from "@/src/components/dashboard/editHouseCompoenent/EditHouseCompoenent";
import { EditHouse } from "@/src/utils/sevices/api/admin/houses/editHouse/editHouse";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import { FC } from "react";

interface IProps {
  params: Promise<{ id: number }>;
}
const EditPageDetail: FC<IProps> = async ({ params }) => {
  const { id } = await params;
  const transactionItem = [
    { value: "rental", label: "اجاره" },
    { value: "mortgage", label: "رهن" },
    { value: "reservation", label: "رزرو" },
    { value: "direct_purchase", label: "خرید مستقیم" },
  ];
  const result = await getCategory();
  const categories = result.data || [];
 const categoriesItems = categories.map((cat) => ({
    value: cat.name,
    label: cat.name,
  }));
  return (
    <FadeIn>
    <EditHouseComponent
    editAction={EditHouse}
      transactionItem={transactionItem}
      categoriesItems={categoriesItems}
      houseId ={id}
    />
    </FadeIn>
  );
};

export default EditPageDetail;
