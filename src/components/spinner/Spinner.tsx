import { Spinner } from "@heroui/react";
import React from "react";

const SpinnerComponent = () => {
  return (
    <div className="w-full flex-center h-screen">
      <Spinner size="xl" className=" text-primary-accent-green" />
    </div>
  );
};

export default SpinnerComponent;
