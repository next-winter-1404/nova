import { RiMoonLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";

interface ModeChangerButtonProps{
    onChange:() => void;
    isChecked: boolean
}

const ModeChangerButton = ({onChange,isChecked}:ModeChangerButtonProps) => {

 

  return (
    <span className="fixed left-7 bottom-8 z-150">
      <label
        htmlFor="modeChanger"
        className="w-13 h-13 rounded-xl bg-dark-900-transparent-64 border border-dark-900 flex-center"
      >
        <input
          type="checkbox"
          className="absolute opacity-0"
          id="modeChanger"
          checked={isChecked}
          onChange={onChange}
        />
        <RiSunLine className="sun" />
        <RiMoonLine className="moon" />
        {/* <span className="animateBg"></span> */}
      </label>
    </span>
  );
};

export default ModeChangerButton;
