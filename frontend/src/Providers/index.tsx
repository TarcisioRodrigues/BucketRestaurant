"use client";
import { AppProvider } from "@/Context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>;
};
