import React from "react";
import { Icon } from "@iconify/react";
import Button from "./CartButton";

const HeaderCartButton: React.FC = () => {
  return (
    <Button>
      <Icon icon="material-symbols:shopping-cart" width="24" height="24" />
      <span>0</span>
    </Button>
  );
};

export default HeaderCartButton;
