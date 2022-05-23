import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureSection = styled(FlexContainer)`
  width: 100vw;
  height: 500px;

  :nth-child(1) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`;
