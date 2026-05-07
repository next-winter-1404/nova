import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper/page";

const SetPasswordAndPhonePage = () => {
  return (
    <form className="md:w-1/2 w-full  flex flex-col gap-9" dir="rtl">
      <LoginWrapper
        content={
          <div className="flex gap-9">
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"email"}
              id={"email"}
              labelText={"شماره تماس شما * :"}
              parentWidth={"w-1/2"}
              placeHolder={".......0911"}
              type={"email"}
            />
            <div className="flex flex-col gap-4 w-1/2">
              <Input
                InputHeight={"h-[43px]"}
                htmlFor={"password"}
                id={"password"}
                labelText={"کلمه عبور * :"}
                parentWidth={"w-full"}
                type={"password"}
              />
            </div>
          </div>
        }
        ButtonSection={
          <LoginButton
            buttonText="ارسال اطلاعات"
            width="w-full"
            loadingText="loading"
          />
        }
      />
    </form>
  );
};

export default SetPasswordAndPhonePage;
