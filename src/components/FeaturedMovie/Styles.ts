import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
`;

export const FeatureSection = styled(FlexContainer)`
  width: 100vw;
  height: 400px;

  @media (max-width: 768px) {
    height: 350px;
    flex-direction: column;
  }
`;
