"use client";
import { useAppContext } from "@/Context";
import Link from "next/link";
import { useState } from "react";
interface Credentials {
  email: string;
  password: string;
}

export default function Login() {
  const { signin, navigate } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="bg-slate-100 p-4 rounded-md w-2/6 h-90">
        <h2 className="text-2xl font-semibold mb-4">Faça login</h2>
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Nome de usuário:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-300"
            onClick={handleLogin}
          >
            Entrar
          </button>
          <div className="flex justify-end">
            <Link href="/register" className="text-blue-500 mt-4">
              Cadastre-se já
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
