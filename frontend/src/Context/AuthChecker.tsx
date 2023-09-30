import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthChecker({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (userToken) {
      router.push("/home");
    }
  }, []);

  return <>{children}</>;
}

export default AuthChecker;
