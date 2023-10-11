import styled, { css } from "styled-components";

export const P = styled.p`
  color: #060219;
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => props.lh};
  font-size: ${(props) => props.fs};
  width: ${(props) => props.width};
  padding: ${(props) => props.pad};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  
  
  word-break: break-word;

  ${(props) =>
    props.sec &&
    css`
      color: ${(props) => props.color};
      opacity: ${props => props.opacity};
    `}

  ${(props) =>
      props.aiHeroColor &&
      css`
      color: ${(props) => props.aiHeroColor};
    `}

  @media(max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${(props) =>
      props.academy &&
      css`
        width: 450px;
      `}

    ${(props) =>
      props.about &&
      css`
        width: 100%;
      `}

    ${(props) =>
        props.formP &&
        css`
        width: 100%;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${(props) =>
      props.business &&
      css`
        width: 100%;
      `}

    ${(props) =>
        props.formP &&
        css`
        width: 100%;
      `}
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${(props) =>
            props.serviceWidth &&
            css`
              width: 100%;
              font-size: 22px;
              line-height: 27px;
            `}

  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    /* width: 100%; */
    ${(props) =>
      props.fouri &&
      css`
        margin: 0 auto;
        font-size: 25px;
      `}

    ${(props) =>
        props.slideText &&
        css`
        font-size: 20px;
          margin-top: -40px;
      `}

    ${(props) =>
        props.serviceAlign &&
        css`
        padding: 65px 0;
          font-size: 24px;
          z-index: 99;
      `}

    ${(props) =>
        props.slideHeader &&
        css`
        font-size: 25px;
      `}

    ${(props) =>
        props.formP &&
        css`
        width: 100%;
          font-size: 16px;
          padding: 0;
      `}

    ${(props) =>
      props.abouthero &&
      css`
        width: 100%;
      `}

    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;

    ${(props) =>
      props.fouri &&
      css`
        width: 90%;
        padding: 50px 20px;
      `}

      ${props => props.trust && css`
        width: 20px;
        font-size: 12px;
      `}

      ${(props) =>
          props.formP &&
          css`
        width: 100%;
            font-size: 15px;
            padding: 0;
      `}

      ${props => props.aiHero && css`
        font-size: 16px;
      `}
      
      
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${(props) =>
      props.collatext &&
      css`
        font-size: 14px;
      `}

    ${(props) =>
      props.join &&
      css`
        font-size: 18px;
      `}

    ${(props) =>
        props.formP &&
        css`
        width: 100%;
          font-size: 18px;
          padding: 0;
      `}

    ${(props) =>
        props.aiHero &&
        css`
        font-size: 18px;
      `}

  }
`;

export const H = styled.h1`
  color: #060219;
  font-weight: 600;
  font-style: normal;
  font-size: ${(props) => props.fs};
  width: ${(props) => props.width};
  padding: ${(props) => props.pad};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  line-height: ${(props) => props.lh};
  opacity: ${(props) => props.opac};
  

  ${(props) =>
    props.fouri &&
    css`
      background: linear-gradient(88.84deg, #6be1ba 0%, #6e54ef 100%);
    `}
  


  ${(props) =>
    props.sec &&
    css`
      color: ${(props) => props.color};
    `}

  ${(props) =>
      props.aiHeroColor &&
      css`
      color: ${(props) => props.aiHeroColor};
    `}


  ${(props) =>
    props.loader &&
    css`
      background: linear-gradient(88.84deg, #6be1ba 0%, #6e54ef 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${(props) =>
      props.about &&
      css`
        width: 100%;
      `}
    ${(props) =>
        props.formH &&
        css`
        width: 100%;
          font-size: 50px;
          
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${(props) =>
      props.hero &&
      css`
        font-size: 48px;
        width: 90%;
      `}
    ${(props) =>
        props.formH &&
        css`
        width: 100%;
          font-size: 40px;
      `}
    
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${(props) =>
        props.serviceWidth &&
        css`
          width: 100%;
          line-height: 47px;
        `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;

    ${(props) =>
      props.hero &&
      css`
        font-size: 54px;
      `}

    ${(props) =>
        props.formH &&
        css`
        width: 100%;
          font-size: 30px;
          line-height: 40px;
          padding: 0;
      `}

    ${(props) =>
      props.about &&
      css`
        font-size: 32px;
      `}

      ${props => props.review && css`
        font-size: 28px;
        padding: 20px;
        width: 413px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${(props) =>
      props.acquire &&
      css`
        font-size: 32px;
      `}
    ${(props) =>
        props.hero &&
        css`
        font-size: 30px;
      `}

    ${(props) =>
        props.formH &&
        css`
        width: 100%;
          font-size: 20px;
          line-height: 35px;
          padding: 0;
      `}

  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${(props) =>
      props.hero &&
      css`
        font-size: 24px;
      `}

    ${(props) =>
      props.fouriheader &&
      css`
        font-size: 28px;
      `}

      ${props => props.review && css`
        font-size: 28px;
        padding: 20px;
        width: 243px;
      `}
  }
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 0.1px;
  background: #463f3f;
`
