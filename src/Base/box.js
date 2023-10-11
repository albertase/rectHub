import styled, { css } from "styled-components";

const Box = styled.div`
  padding: ${(props) => props.pad};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  background: ${(props) => props.backg};
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.br};
  box-shadow: ${(props) => props.bs};
  overflow: hidden;
  text-align: ${(props) => props.align};
  border: ${(props) => props.bd};
  border-top: ${(props) => props.bt};
  margin-top: ${(props) => props.mt};
  background: ${(props) => props.backg};

  ${(props) =>
    props.colla &&
    css`
      overflow: visible;
    `}

  

  ${(props) =>
    props.sec &&
    css`
      overflow: visible;
    `}

  ${(props) =>
    props.review &&
    css`
      &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    `}

  ${(props) =>
    props.card &&
    css`
      border: 2px solid transparent;
      border-image: linear-gradient(to right, #6be1ba, #6e54ef) 5;
      background-clip: padding-box;
      background-color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      text-align: center;
      height: ${(props) => props.height};

      &:hover {
        transition: 2s;
        background: linear-gradient(51.85deg, #6be1ba -27.45%, #6e54ef 94.15%);
      }

      /* &:before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: 5px;
        border-radius: inherit;
        background: linear-gradient(to right, #6be1ba, #6e54ef) 5;
      } */
    `}

  ${(props) =>
    props.border &&
    css`
      border: 2px solid;
      border-radius: 20px;
      border-image: linear-gradient(to right, #6be1ba, #6e54ef) 5;
    `}

    ${(props) =>
    props.smallNav &&
    css`
      display: none;
    `}

    ${(props) =>
    props.fouriblue &&
    css`
      &:hover {
        background-color: #A1C3FC;
        transition: 1s;
      }
    `}

    ${(props) =>
    props.fourigreen &&
    css`
      &:hover {
        background-color: rgba(107, 225, 186, 0.15);
        transition: 1s;
      }
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${(props) =>
      props.hero &&
      css`
        padding: 20px 30px;
      `}

    ${(props) =>
      props.service &&
      css`
        margin: 40px 10px;
      `}

      ${(props) =>
      props.business &&
      css`
        padding: 50px 50px;
      `}

      ${(props) =>
      props.select &&
      css`
        padding: 0 50px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${(props) =>
      props.heroImg &&
      css`
        img {
          width: 80%;
        }
      `}

    ${(props) =>
      props.academyImg &&
      css`
        img {
          width: 100%;
        }
      `}

    ${(props) =>
      props.serviceGrid &&
      css`
        margin: 10px 0;
        width: 80%;
      `}

      ${(props) =>
      props.business &&
      css`
        padding: 50px 30px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${(props) =>
      props.trust &&
      css`
        margin: 0 0%;
      `}

    ${(props) =>
        props.heroImg &&
        css`
        img {
          width: 100%;
          margin: 20px 0;
        }
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${(props) =>
      props.heroImg &&
      css`
        img {
          width: 100%;
          margin: 20px 0;
        }
      `}


    ${(props) =>
        props.slideBox &&
        css`
      padding: 5px;
    `}

    ${(props) =>
        props.homeAnimation &&
        css`
      padding: 200px 0;
    `}


    ${(props) =>
        props.slideBoxContainer &&
        css`
      padding: 10px 20px;
    `}


    ${(props) =>
        props.slideAlign &&
        css`
      text-align: center;
    `}



    ${(props) =>
        props.boxForm &&
        css`
      padding: 0;
          text-align: center;
    `}


    ${(props) =>
        props.fouriWidth &&
        css`
      width: 100%;
    `}


    ${(props) =>
      props.business &&
      css`
        padding: 100px 10px;
      `}

    ${(props) =>
        props.boxFormContainer &&
        css`
        padding: 5px 10px;
          //text-align: center;
      `}

      ${(props) =>
      props.card &&
      css`
        width: 100%;
      `}

      ${(props) =>
      props.fouri &&
      css`
        margin: 0px 20px;
        overflow: visible;
      `}

      ${(props) =>
      props.select &&
      css`
        padding: 0 10px;
      `}

      ${(props) =>
      props.trustCon &&
      css`
        padding: 20px;
      `}

    ${(props) =>
        props.carouselPad &&
        css`
          padding: 20px 10px;
      `}

    ${(props) =>
        props.aiHero &&
        css`
          width: 100%;
          padding: 5px 0;
      `}
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${(props) =>
      props.smallNav &&
      css`
        display: block;
      `}


    ${(props) =>
        props.boxFormContainer &&
        css`
        padding: 5px 10px;
          //text-align: center;
      `}


    ${(props) =>
        props.boxForm &&
        css`
      padding: 0;
          text-align: center;
    `}


    ${(props) =>
      props.nav &&
      css`
        display: none;
      `}

        /* ${(props) =>
      props.hero &&
      css`
        padding: 20px 20px;
        margin: 0px 20px;
      `} */

        ${(props) =>
      props.business &&
      css`
        padding: 100px 50px;
      `}

        ${(props) =>
      props.flexCard &&
      css`
        margin: 35px 0;
      `}

        ${(props) =>
      props.fouri &&
      css`
        margin: 0px 50px;
      `}

        ${(props) =>
      props.colla &&
      css`
        margin: 20px 0;
      `}

        ${(props) =>
      props.join &&
      css`
        margin: 0 5%;
        margin-top: 60px;
      `}

        ${(props) =>
      props.about &&
      css`
        padding: 80px 20px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${(props) =>
      props.smallNav &&
      css`
        padding: 20px;
      `}

    ${(props) =>
        props.boxFormContainer &&
        css`
        padding: 5px 10px;
          //text-align: center;
      `}


    ${(props) =>
        props.boxForm &&
        css`
      padding: 0;
          text-align: center;
    `}


    ${(props) =>
      props.hero &&
      css`
        margin: 0;
        padding: 20px 15px;
      `}

        ${(props) =>
      props.card &&
      css`
        h1 {
          font-size: 24px;
        }
      `}

        ${(props) =>
      props.business &&
      css`
        padding: 50px 20px;
      `}

        ${(props) =>
      props.fouri &&
      css`
        margin: 0px 20px;
      `}

        ${(props) =>
      props.fouricon &&
      css`
        margin: 0;
      `}

        ${(props) =>
      props.border &&
      css`
        padding: 50px 20px;
      `}

        ${(props) =>
      props.footer &&
      css`
        padding: 20px 0;
      `}

        ${(props) =>
      props.about &&
      css`
        margin: 0;
      `}

      ${props => props.trustCon && css`
          margin: 0;
      `}
  }
`;

export default Box;
