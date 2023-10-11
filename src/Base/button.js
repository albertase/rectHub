import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 15px 22px;
  margin: ${props => props.margin};
  border: none;
  font-size: 17px;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  width: ${props => props.width};
  
  
  &:hover {
    ${(props) =>
        props.serviceBtn &&
        css`
      background-image: linear-gradient(89.86deg, #6be1ba, #6e54ef 185.63%);
    `}
  }
  ${(props) =>
    props.primary &&
    css`
      background-image: linear-gradient(89.86deg, #6be1ba, #6e54ef 185.63%);
    `}

  ${(props) => props.nav && css`
    background-color: transparent;
  `}

  ${props => props.card && css`
    background-color: black;
    color: white;
    margin-top: ${props => props.mt};
    padding: 15px 18px;
    font-size: 15px;
    position: absolute;
    bottom: 20px;
  `}

  ${props => props.select && css`
    background-color: ${props => props.bg};
    border-radius: 20px;
    transition: 1s;
  `}

  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    ${props => props.sec && css`
      display: none;
    `}

    ${props => props.select && css`
      margin: 0 5px;
    `}
  }

  @media(max-width: ${({theme}) => theme.breakpoints.sm}){
    ${props => props.select && css`
      font-size: 12px;
      padding: 15px 18px;
    `}

    ${props => props.nav && css`
      display: block;
      margin: 20px 0;
      font-size: 24px;
    `}
  }
`;
