"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (!userToken) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}
