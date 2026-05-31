"use client";

import { useState } from "react";
import ModeChangerButton from "../modeChangerButton/ModeChangerButton";

interface ThemeProviderProp {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProp) => {
  const [isLight, setIsLight] = useState<boolean>(false);
  const hanndleChange = () => {
    setIsLight(!isLight);
  };
  return <div data-theme={isLight ? "light" : ""}>
    {children}
    <ModeChangerButton onChange={hanndleChange} isChecked={isLight}/>
    </div>;
};

