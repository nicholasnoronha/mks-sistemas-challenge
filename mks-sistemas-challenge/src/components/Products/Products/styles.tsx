import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 217px 217px 217px 217px;
  position: relative;
  place-items: center;
  height: 100%;
  padding-top: 116px;

  @media (max-width: 1000px) {
    grid-template-columns: 217px 217px 217px;
  }
  @media (max-width: 750px) {
    grid-template-columns: 217px 217px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 217px;
  }
`;

export default ProductsContainer;
