import { ReactNode } from "react";

export interface CardContainerProps {
    color: string;
    labelSize: "md" | "lg";
    cavity: "sharp" | "round";
    labelContent:ReactNode
    mainContent:ReactNode
    width:string
  }
  