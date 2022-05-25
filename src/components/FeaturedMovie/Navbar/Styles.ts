import styled from "styled-components";

import { FlexContainer } from "../Styles";

export const Navbar = styled(FlexContainer)`
  height: 100%;
  width: 60px;
  flex-direction: column;
  margin: 5px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    height: 50px;
    margin: 0;
    :nth-child(1) {
      margin-top: 5px;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  margin: 20px 0;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img {
    width: 26px;
    height: 26px;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.secundary};
  }

  @media (max-width: 768px) {
    margin: 0;
    height: 30px;
  }
`;
