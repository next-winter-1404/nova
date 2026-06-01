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
    <Modal
      open={isEditModalOpen}
      onOpenChange={setIsEditModalOpen}
      modalBtn={<div></div>}
      contentClassName=" bg-dark-900"
      width="w-[55%]"
      mainContent={
        <div className="flex-center padding-section">
          <form
            onSubmit={handleEdit}
            className="w-full bg-white flex-col-center gap-6"
          >
            <div className="w-full flex items-center justify-center gap-5">
              <div className="w-full flex flex-col text-right">
                <Input
                  htmlFor="password"
                  labelText="رمز"
                  type="password"
                  InputHeight="h-[40px]"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-full flex flex-col justify-end">
                <Input
                  htmlFor="email"
                  labelText="ایمیل"
                  type="email"
                  InputHeight="h-[40px]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      }
    />
  );
};

export default EditFormModal;
