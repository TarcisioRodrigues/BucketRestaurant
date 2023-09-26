"use client";
import { useAppContext } from "@/Context";
import { SecondaryItemBanner } from "@/app/components/SecondaryItemBanner";
import { comidas } from "@/infra/api/fetchProduts";
import { useEffect } from "react";

export default function MakeRequest() {
  const { products, setProducts, setLoading } = useAppContext();

  useEffect(() => {
    setProducts(comidas);

    setLoading(false);
  }, []);
  return (
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
  );
}
