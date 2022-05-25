import styled from "styled-components";

interface IProps {
  image: string;
}

export const Spotlight = styled.div<IProps>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 500px;
  margin: 25px auto;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Details = styled.div`
  width: 30%;
  height: 50%;
  margin: 0 0 0 50px;
  background-color: green;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Type = styled.p`
  color: ${(props) => props.theme.colors.primary};
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0 5px 0 5px;
  width: fit-content;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Star = styled.div`
  position: relative;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid ${(props) => props.theme.colors.text};
  border-left: 0.3em solid transparent;

  font-size: 8px;

  :before,
  :after {
    content: "";

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid ${(props) => props.theme.colors.text};
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  :after {
    transform: rotate(35deg);
  }
`;
