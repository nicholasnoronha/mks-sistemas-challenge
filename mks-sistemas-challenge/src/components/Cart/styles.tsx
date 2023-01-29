import styled from "styled-components";

const CartContainer = styled.div`
  font-family: "Montserrat";
  position: absolute;
  background-color: var(--blue);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  color: white;
  right: 0;
  top: 0;
  width: 486px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: tog 0.5s;
  animation-direction: normal;

  @keyframes tog {
    0% {
      transform: translate(100%);
    }
    100% {
      transform: translate(0);
    }
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
    padding: 35px 45px;
  }

  .title {
    font-size: 27px;
    font-weight: 700;
  }

  .close-button {
    border: none;
    background: none;
    color: var(--white);
    background-color: #000;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
  }

  .cart-items-container {
    height: 65vh;
    overflow-y: auto;
  }

  .cart-total-price,
  .complete-purchase {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 28px;
    padding: 40px;
  }

  .complete-purchase {
    display: flex;
    justify-content: center;
    border: none;
    width: 100%;
    color: #fff;
    background-color: #000;
  }
`;

export default CartContainer;
