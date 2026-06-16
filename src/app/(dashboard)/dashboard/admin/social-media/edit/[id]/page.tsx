import FadeIn from "@/src/components/animations/FadeIn";
import EditSocialMediaForm from "@/src/components/dashboard/editSocialMediaForm/EditSocialMediaForm";
import { getSocialMedia } from "@/src/utils/sevices/api/socialMedia/getSocial";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

const EditSocialMediaPage = async ({ params }: IProps) => {
  const { id } = await params;

  const result = await getSocialMedia({
    page: 1,
    limit: 100,
  });

  const social = result.data.find((item) => item.id === Number(id));

  if (!social) {
    return <div>شبکه اجتماعی پیدا نشد</div>;
  }

  return (
    <FadeIn>
      <EditSocialMediaForm social={social} />
    </FadeIn>
  );
};

export default EditSocialMediaPage;
