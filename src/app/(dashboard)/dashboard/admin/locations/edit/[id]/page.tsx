import EditLocationForm from "@/src/components/dashboard/editLocationForm/EditLocationForm";
import { getAllLocation } from "@/src/utils/sevices/api/locations/getAllLocations/getAllLocation";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

const EditLocationPage = async ({
  params,
}: IProps) => {
  const { id } =  await params;

  const result = await getAllLocation({
    page: 1,
    limit: 100,
  });

  const location = result.data.find(
    (item) => item.id === Number(id)
  );

  if (!location) {
    return <div> موقعیت مورد نظر پیدا نشد</div>;
  }

  return (
    <EditLocationForm location={location} />
  );
};

export default EditLocationPage;
