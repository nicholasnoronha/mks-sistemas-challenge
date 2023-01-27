import React from "react";
import HeaderCartButton from "../HeaderCartButton";
import HeaderContainer from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="title">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      <HeaderCartButton />
    </HeaderContainer>
  );
};

export default Header;
