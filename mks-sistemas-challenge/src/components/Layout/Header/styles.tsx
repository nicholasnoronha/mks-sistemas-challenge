import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: var(--white);
  background-color: var(--blue);
  padding: 28px 65px;

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Header;
