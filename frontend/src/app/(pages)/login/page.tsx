"use client";
import Link from "next/link";
import React from "react";

interface Credentials {
  username: string;
  password: string;
}

export default function Login() {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="bg-slate-100 p-4 rounded-md w-2/6 h-90">
        <h2 className="text-2xl font-semibold mb-4">Faça login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Nome de usuário:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-300"
          >
            Entrar
          </button>
          <div className="flex justify-end">
            <Link href="/register" className="text-blue-500 mt-4">
              Cadastre-se já
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
