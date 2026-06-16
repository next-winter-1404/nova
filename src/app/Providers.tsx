"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/sevices/configs/ReactQueryConfig";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster  toastOptions={{
          style: {
            fontFamily: "var(--font-vazir)",
          },
        }}/>
    </QueryClientProvider>
  );
};

export default Providers;
