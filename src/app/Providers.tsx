"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/sevices/configs/ReactQueryConfig";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>{children}</main>;
    </QueryClientProvider>
  );
};

export default Providers;
