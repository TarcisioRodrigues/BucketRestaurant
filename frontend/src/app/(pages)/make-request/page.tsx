"use client";
import { useAppContext } from "@/Context";
import PrivateRoute from "@/app/components/PrivateRouter";
import { SecondaryItemBanner } from "@/app/components/SecondaryItemBanner";
import { api } from "@/infra/api/api";
import { IProps } from "@/interfaces/IProps";

import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function MakeRequest() {
  const { products, setProducts, setLoading } = useAppContext();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
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
  useEffect(() => {
    if (!searchText) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchText, products]);
  return (
    <PrivateRoute>
      <div className="w-full flex flex-col items-center justify-center">
        <div className=" relative text-gray-600 mb-5">
          <input
            type="search"
            name="search"
            placeholder="Pesquisar..."
            className="bg-stone-50 w-250 h-10 px-6 pr-10 rounded-full text-sm focus:outline-none w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 ">
            <AiOutlineSearch className="text-gray-600 h-5 w-5" />
          </button>
        </div>
        <div className="max-w-screen-xl mx-auto">
          {filteredProducts.map((product: IProps) => (
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
