import { editUser } from "@/src/utils/sevices/api/admin/users/editUser/editUser";
import Input from "../input/Input";
import { Modal } from "../modal";

interface EditFormDataProps {
  email: string;
  password: string;
}

interface EditFormModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: EditFormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<EditFormDataProps>>;
  userId: number;
}  

const EditFormModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  formData,
  setFormData,
  userId,
}: EditFormModalProps) => {
  const handleEdit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    await editUser(userId, formData);
    setIsEditModalOpen(!isEditModalOpen);
  };
  return (
   
  );
};

export default EditFormModal;
