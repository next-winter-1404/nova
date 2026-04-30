import Button from "@/src/components/common/button/page";
import LoginImage from "@/src/components/login/LoginImage";
import LoginInstructions from "@/src/components/login/LoginInstructions";
import WelcomeText from "@/src/components/login/welcomeText";

const LoginPage = () => {
  return (
    <div className="flex-center w-full gap-24 p-8 ">
      <LoginImage />
      <div className="w-1/2 bg-amber-200 flex flex-col gap-9 " dir="rtl">
        <WelcomeText />
        <LoginInstructions />
        <div className="flex gap-8">
        <Button text={"google"} buttonStyle={{width:"50%"}} />
        <Button text={"ll"} buttonStyle={{width:"50%"}} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
