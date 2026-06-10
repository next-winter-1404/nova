"use client";

import { useEffect, useState } from "react";
import ModeChangerButton from "../modeChangerButton/ModeChangerButton";

interface ThemeProviderProp {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProp) => {
  const [isLight, setIsLight] = useState<boolean>(false);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isLight ? "light" : "dark"
    );
  }, [isLight]);

  const hanndleChange = () => {
    setIsLight(!isLight);
  };
  return <div >
    {children}
    <ModeChangerButton onChange={hanndleChange} isChecked={isLight}/>
    </div>;
};

