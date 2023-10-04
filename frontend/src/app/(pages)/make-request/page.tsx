"use client";
import { useAppContext } from "@/Context";
import PrivateRoute from "@/app/components/PrivateRouter";
import { SecondaryItemBanner } from "@/app/components/SecondaryItemBanner";
import { api } from "@/infra/api/api";

import { useEffect } from "react";

export default function MakeRequest() {
  const { products, setProducts, setLoading } = useAppContext();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const userToken = localStorage.getItem("user_token");
        const response = await api.get("/listfood", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
        setLoading(false);
      }
    }

    // Chame a função para buscar os produtos
    fetchProducts();
  }, [setProducts, setLoading]);

  return (
    <PrivateRoute>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-screen-xl mx-auto">
          {products.map((product) => (
            <SecondaryItemBanner
              key={product.id}
              id={product.id}
              description={product.description}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </PrivateRoute>
  );
}
