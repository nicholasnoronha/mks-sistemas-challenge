import { Product } from "@/interfaces/Product";
import { itemsCounterActions } from "@/store";
import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import CardContainer from "./styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    if (!product.amount) product.amount = 1;

    dispatch(itemsCounterActions.increment());
    dispatch(itemsCounterActions.incrementProduct(product));
  };

  return (
    <div
      style={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.135216)",
        borderRadius: 8,
      }}
    >
      <CardContainer>
        <div className="teste">
          <div className="img-container">
            <img src={product.photo} />
          </div>
          <div className="card-title">
            <p>{product.name}</p>
            <p className="product-price">R${product.price}</p>
          </div>
          <p className="product-description">{product.description}</p>
        </div>
      </CardContainer>
      <Button onClick={incrementHandler}>
        <Icon icon="ri:shopping-bag-3-line" width="17" height="17" />
        COMPRAR
      </Button>
    </div>
  );
};

export default ProductCard;
