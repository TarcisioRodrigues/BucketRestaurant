"use client";
import { useAppContext } from "@/Context";
import { Banner } from "@/app/components/Banner";
import { ItemBanner } from "@/app/components/ItemBanner";
import { api } from "@/infra/api/api";
import { useEffect } from "react";

export default function Home() {
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
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 3);
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Banner inverted={false} />
      <div className="mt-4 text-center">
        <p className="text-green-950 text-4xl font-semibold font-'Fira Sans' leading-[74px]">
          Pratos do dia
        </p>
      </div>
      <div className="mt-4 space-x-5">
        {randomProducts.map((product) => (
          <ItemBanner
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
