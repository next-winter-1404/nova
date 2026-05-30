import EditHouseComponent from "@/src/components/dashboard/editHouseCompoenent/EditHouseCompoenent";
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
  console.log("categories", categories);
  const categoriesItems = categories.map((cat) => ({
    value: cat.id?.toString(),
    label: cat.name,
  }));
  return (
    <EditHouseComponent
      transactionItem={transactionItem}
      categoriesItems={categoriesItems}
      houseId ={id}
    />
  );
};

export default EditPageDetail;
