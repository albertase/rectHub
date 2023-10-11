import styled, {css} from "styled-components";

export const Forms = styled.form`
  width: 100%;
  //  display: grid;
  // grid-template-rows: ${props => props.gtc}

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

export const Input = styled.input`
  width: 90%;
  padding: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}){
    ${props => props.input && css`
            width: 100%;
        `}
  }
`

export const Label = styled.label`
  font-size: 17px;
  line-height: 21.69px;
`

export const Selects = styled.select`
  -webkit-appearance: none; /* For Safari (iOS) */
  appearance: none;
    width: 100%;
  padding: 14px;
  
`
export const Option = styled.option`
  -webkit-appearance: none; /* For Safari (iOS) */
  appearance: none;
`