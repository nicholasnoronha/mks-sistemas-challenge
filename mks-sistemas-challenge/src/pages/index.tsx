import React, { Fragment } from "react";
import axios, { AxiosError } from "axios";

const Home: React.FC = (props: any) => {
  return (
    <Fragment>
      <div>Home</div>
      {props.products.map((product: any) => {
        return (
          <p key={product.id}>
            {product.id}, {product.name}, {product.description}, {product.photo}
            , {product.price}, {product.brand}
          </p>
        );
      })}
    </Fragment>
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
