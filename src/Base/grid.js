import styled,{css}from "styled-components";

export const Container = styled.div`
        grid-column: ${props => props.gridColumn};
        margin: 16px 0;

        @media(max-width: ${({theme}) => theme.breakpoints.md}){
                ${props => props.appForms && css`
              grid-column: 1 / span 2;
                        width: 100%;
        `}
        }

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gtc};
    /* height: 373px; */
    gap: ${props => props.gap};

    @media(max-width: ${({theme}) => theme.breakpoints.xl}){
        ${props => props.service && css`
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
        `}

        ${props => props.business && css`
            gap: 30px;

            h1{
                width: 90%;
                padding: 60px 0;
            }
        `}

        ${props => props.business && css`
            gap: 10px;
        `}

        ${props => props.about && css`
            gap: 10px;
        `}

        ${props => props.imgs && css`
            img{
                width: 100%;
            }
        `}
    }

    @media(max-width: ${({theme}) => theme.breakpoints.md}){
        ${props => props.about && css`
            grid-template-columns: repeat(1, 1fr);
        `}

        ${props => props.appForm && css`
            grid-template-columns: repeat(1, 1fr);
        `}
    
            ${props => props.formGap && css`
            gap: 20px;
        `}

    }

    @media(max-width: ${({theme}) => theme.breakpoints.sm}){
        ${props => props.business && css`
            grid-template-columns: repeat(1, 1fr);
            gap: 40px;
        `}

        ${props => props.formGap && css`
            gap: 20px;
        `}


        ${props => props.footer && css`
            grid-template-columns: repeat(3, 1fr);
        `}

        ${props => props.imgs && css`
            grid-template-columns: repeat(1, 1fr);
        `} 
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${props => props.service && css`
            grid-template-columns: repeat(1, 1fr);
        `}

        ${props => props.formGap && css`
            gap: 20px;
        `}


    }
`

