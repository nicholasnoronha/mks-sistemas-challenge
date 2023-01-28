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
      <div>
        <p>Qtd.</p>
        <div>
          <button onClick={decrementHandler}>-</button>
          <p>{product.amount}</p>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
      <p>{price}</p>
    </CartItemContainer>
  );
};

export default CartItem;
