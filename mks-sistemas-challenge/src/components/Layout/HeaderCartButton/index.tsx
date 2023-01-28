import React from "react";
import { Icon } from "@iconify/react";
import Button from "./CartButton";

import { useDispatch } from "react-redux";
import { itemsCounterActions, RootState } from "@/store";
import { useSelector } from "react-redux";

const HeaderCartButton: React.FC = () => {
  const itemsCounter = useSelector(
    (state: RootState) => state.itemsCounterReducer.itemsCounter
  );
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(itemsCounterActions.cartToggle());
  };

  return (
    <Button onClick={toggleCartHandler}>
      <Icon icon="material-symbols:shopping-cart" width="24" height="24" />
      <span>{itemsCounter}</span>
    </Button>
  );
};

export default HeaderCartButton;
