import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
`

const StyledButton = styled.button`
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 10px 15px;
    &:focus {
        outline: none;
    }
    &:hover {
        animation: ${rotateAnimation} 1s infinite linear;
    }


    align-self: ${({align}) => align || 'stretch'};

    ${props => props.primary && css`
        color: ${props => props.color || 'white'};
        background: ${props => props.background || 'white'};
    `}

    ${props => props.outlined && css`
        color: ${props => props.color || 'white'};
        background: transparent;
        border: 1px solid ${props => props.color || 'white'};
    `}
`

// Расширение стилей
// const LargeButton = styled(Button)`
//     font-size: 32px;
// `

function Button(props) {
  return <StyledButton {...props} />
}

export default Button