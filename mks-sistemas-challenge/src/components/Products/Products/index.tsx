import { Product } from "@/interfaces/Product";
import React from "react";
import ProductCard from "../ProductCard";
import ProductsContainer from "./styles";

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const productsList = products.map((product: Product) => {
    return <ProductCard product={product} key={product.id} />;
  });
  return (
    <section
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProductsContainer>{productsList}</ProductsContainer>
    </section>
  );
};

export default Products;
