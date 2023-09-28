"use client";
import { useAppContext } from "@/Context";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, navigate } = useAppContext();

  const handleSignup = async () => {
    if (!email || !emailConf || !password) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = await signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <div className=" flex justify-center items-center h-[70vh]">
      <div className="bg-slate-100 p-4 rounded-md w-2/6  h-90">
        <h2 className="text-2xl font-semibold mb-4">Faça seu cadastro!</h2>
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Email:
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
            <label htmlFor="username" className="block font-semibold mb-1">
              Confirmar Email:
            </label>
            <input
              type="text"
              id="cemail"
              name="cemail"
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
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
            onClick={handleSignup}
          >
            Criar
          </button>
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
}
