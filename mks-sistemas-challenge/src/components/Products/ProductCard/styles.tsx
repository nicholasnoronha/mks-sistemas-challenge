import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  height: 285px;
  max-width: 217px;

  .teste {
    display: flex;
    flex-direction: column;
    padding: 15px 15px 7px 15px;
    height: 100%;
  }

  .img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
  }

  img {
    max-height: 138px;
    max-width: 217px;
  }

  .card-title {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 5px;
    min-height: 60px;
    // background: red;
  }

  .product-price {
    background-color: black;
    color: white;
    padding: 4px 6px;
    font-weight: 700;
    font-size: 15px;
    border-radius: 5px;
  }

  .product-description {
    font-weight: 400;
    font-size: 10px;
    color: var(--gray);
    overflow-y: auto;
  }
`;

export default CardContainer;
