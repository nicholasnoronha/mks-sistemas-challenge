import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import { itemsCounterActions, RootState } from "@/store";
import { useDispatch } from "react-redux";
import CartContainer from "./styles";
import { useSelector } from "react-redux";
import { Product } from "@/interfaces/Product";
import CartItem from "./CartItem";
import parseCurrencyToBRL from "@/utils/parseCurrencyToBRL";

const Cart: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState("");

  const products: Product[] = useSelector(
    (state: RootState) => state.itemsCounterReducer.products
  );
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(itemsCounterActions.cartToggle());
  };

  useEffect(() => {
    const total = products.reduce(
      (acc, cur) => acc + Number(cur.price) * (cur?.amount || 1),
      0
    );

    setTotalPrice(parseCurrencyToBRL(total));
  }, [products]);

  const cartItems = (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <CartItem product={product} />
        </li>
      ))}
    </ul>
  );

  return (
    <CartContainer>
      <div>
        <div className="d-flex">
          <p className="title">Carrinho de compras</p>
          <button onClick={toggleCartHandler} className="close-button">
            <Icon icon="material-symbols:close" height={30} width={30} />
          </button>
        </div>
        <div className="cart-items-container">{cartItems}</div>
      </div>
      <div>
        <div>
          <span>Total: </span>
          <span>{totalPrice}</span>
        </div>
        <button className="complete-purchase">Finalizar Compra</button>
      </div>
    </CartContainer>
  );
};

export default Cart;
