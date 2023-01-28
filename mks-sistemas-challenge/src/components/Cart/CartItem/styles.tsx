import styled from "styled-components";

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #222;
  gap: 10px;
  margin: 28px 55px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  img {
    max-width: 80px;
    max-height: 70px;
    margin-right: 11px;
  }

  .product-name {
    font-family: "Montserrat";
    font-size: 13px;
    font-weight: 400;
  }
`;

export default CartItemContainer;
