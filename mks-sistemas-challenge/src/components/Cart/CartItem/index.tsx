import { Product } from "@/interfaces/Product";
import { itemsCounterActions } from "@/store";
import parseCurrencyToBRL from "@/utils/parseCurrencyToBRL";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CartItemContainer from "./styles";

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(itemsCounterActions.increment());
    dispatch(itemsCounterActions.incrementProduct(product));
  };

  const decrementHandler = () => {
    dispatch(itemsCounterActions.decrement());
    dispatch(itemsCounterActions.decrementProduct(product));
  };

  const amount = product.amount ? product.amount : 1;

  const tempPrice = Number(product.price) * amount;

  useEffect(() => {
    setPrice(parseCurrencyToBRL(tempPrice));
  }, [product.amount]);

  return (
    <CartItemContainer>
      <img src={product.photo} />
      <p className="product-name">{product.name}</p>
      <div className="cart-product-container">
        <p className="product-qtt">Qtd.</p>
        <div className="cart-product-button-container">
          <button onClick={decrementHandler} className="cart-product-button">
            -
          </button>
          <p className="cart-product-amount">{product.amount}</p>
          <button onClick={incrementHandler} className="cart-product-button">
            +
          </button>
        </div>
      </div>
      <p className="cart-product-price">{price}</p>
    </CartItemContainer>
  );
};

export default CartItem;
