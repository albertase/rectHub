import styled, {css} from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: space-between;
  padding: ${props => props.pad};
  gap: ${props => props.gapy};
  flex-wrap: ${props => props.wraps};
  

  ${props => props.carouselContent && css`
    justify-content: left;
  `}
  
  
  ${props => props.card && css`
    justify-content: center;
  `}

  


  ${props => props.aiHeroDirection && css`
    justify-content: center;
  `}




  ${props => props.star && css`
    justify-content: center;
  `}

  ${props => props.sec && css`
    justify-content: initial;
  `}

  ${props => props.trust && css`
    justify-content: space-around;
  `}

  @media(max-width: ${({theme}) => theme.breakpoints.lg}) {
  ${props => props.serviceDirection && css`
      flex-direction: column;
    row-gap: 56px;
    `}

}

  @media(max-width: ${({theme}) => theme.breakpoints.md}){
    flex-direction: column;

    ${props => props.row && css`
      flex-direction: row;
    `}

    ${props => props.wraps && css`
    flex-wrap: nowrap;
      gap: 1px;
  `}


    ${props => props.card && css`
      flex-direction: row;
    `}

    ${props => props.star && css`
      flex-direction: row;
    `}

    ${props => props.aiHero && css`
      //margin-right: 77px;
    `}

    ${props => props.trust && css`
      flex-direction: row;
      justify-content: space-between;
    `}
  }

  @media(max-width: ${({theme}) => theme.breakpoints.sm}){
      ${props => props.card && css`
        flex-direction: column;
      `}

      ${props => props.sidebar && css`
        flex-direction: row;
      `}
  }
`


export default Flex