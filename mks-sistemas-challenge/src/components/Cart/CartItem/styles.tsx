import styled from "styled-components";

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #222;
  gap: 10px;
  margin: 28px 55px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  img {
    max-width: 80px;
    max-height: 70px;
    margin-left: 10px;
  }

  .product-name {
    font-family: "Montserrat";
    font-size: 13px;
    font-weight: 400;
    width: 100px;
  }

  .cart-product-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .product-qtt {
    font-size: 5px;
  }

  .cart-product-button-container {
    display: flex;
    align-items: center;
    border: 1px solid var(--grey);
    border-radius: 4px;
  }

  .cart-product-button {
    font-size: 13px;
    border: none;
    padding: 4px 8px;
    background: none;
    cursor: pointer;
  }

  .cart-product-amount {
    font-size: 8px;
    padding: 4px 8px;
    border-left: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-product-price {
    width: 120px;
  }
`;

export default CartItemContainer;
