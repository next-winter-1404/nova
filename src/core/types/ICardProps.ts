import { CSSProperties, ReactNode } from "react";

export interface CardContainerProps {
  labelSize: "md" | "lg";
  cavity: "sharp" | "round";
  labelContent:ReactNode
  mainContent:ReactNode
  width?:string,
  mainBackground:string,
  labelBackground?:string,
  parentExtraStyle?:CSSProperties,
  mainExtraStyle?:CSSProperties,
  labelExtraStyle?:CSSProperties,
}

  