"use client";
import { useAppContext } from "@/Context";
import PrivateRoute from "@/app/components/PrivateRouter";
import { SecondaryItemBanner } from "@/app/components/SecondaryItemBanner";
import { api } from "@/infra/api/api";

import { useEffect } from "react";

export default function MakeRequest() {
  const { products, setProducts, setLoading } = useAppContext();

  useEffect(() => {
    // const response = api.get("/listfood");
    // console.log(response);
    // setProducts([response]);

    setLoading(false);
  }, [products]);
  return (
    <PrivateRoute>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-screen-xl mx-auto">
          {products.map((product) => (
            <SecondaryItemBanner
              key={product.id}
              id={product.id}
              descricao={product.descricao}
              imagem={product.imagem}
              nome={product.nome}
              preco={product.preco}
            />
          ))}
        </div>
      </div>
    </PrivateRoute>
  );
}
