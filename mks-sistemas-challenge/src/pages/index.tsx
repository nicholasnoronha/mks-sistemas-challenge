import React from "react";
import axios from "axios";
import Header from "@/components/Layout/Header";
import Products from "@/components/Products/Products";
import { Product } from "@/interfaces/Product";
import Cart from "@/components/Cart";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ProductsProps {
  products: Product[];
}

const Home: React.FC<ProductsProps> = ({ products }) => {
  const show = useSelector<RootState>(
    (state) => state.itemsCounterReducer.showCart
  );

  return (
    <>
      <Header />
      <Products products={products} />
      {show && <Cart />}
    </>
  );
};

export async function getStaticProps() {
  const url =
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

  const response = await axios.get(url);

  return {
    props: {
      products: response.data.products,
    },
  };
}

export default Home;
