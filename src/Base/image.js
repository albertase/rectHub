import styled, {css} from "styled-components";

export const Image = styled.img`
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    left: ${props => props.left};

    ${props => props.primary && css`
        position: static;
        width: ${props => props.width};
        margin: ${props => props.margin};
        margin-top: ${props => props.mt};
        /* z-index: 1; */
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}){
        ${props => props.trust && css`
            margin: 0 20px;
        `}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${props => props.trusts && css`
            width: 80px;
        `}

        ${props => props.trust && css`
            width: 30px;
        `}
    }
`