import { CSSProperties, ReactNode } from "react";

export interface CardContainerProps {
  labelSize: "md" | "lg";
  cavity: "sharp" | "round";
  labelContent:ReactNode
  mainContent:ReactNode
  width?:string,
  labelBackground?:string,
  parentExtraStyle?:CSSProperties,
  mainExtraStyle?:string,
  labelExtraStyle?:CSSProperties,
  color?:string,
  curveColor?:string,
  groupHoverStyle?:string
}

  