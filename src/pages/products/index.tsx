import { ApiProduct } from "@/@types/interfaces";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import ProductContainer from "../../styles/styles";
import { fetchProducts } from "../api/fetchProducts";

export default function Products() {
  const [products, setProducts] = useState<ApiProduct[] | []>([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.products);
    });
  }, []);

  return (
    <ProductContainer>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </ProductContainer>
  );
}
