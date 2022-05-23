import styled from "styled-components";

import { FlexContainer } from "../Styles";

export const Navbar = styled(FlexContainer)`
  height: 100%;
  flex-direction: column;
  width: 60px;
`;

export const Button = styled.button`
  background-color: transparent;
  margin: 20px 0;
  cursor: pointer;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img {
    width: 26px;
    height: 26px;
  }

  :first-child {
    margin: 40px 0 64px 0;
  }
`;
