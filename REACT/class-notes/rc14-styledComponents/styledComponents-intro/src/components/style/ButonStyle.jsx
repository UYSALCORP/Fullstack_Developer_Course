import styled from 'styled-components';

const Button = styled.button`
    color: ${({bengisu})=> bengisu ? "black" : "yellow"};
    background-color: ${({bengisu, uysal}) => bengisu ? "lightblue" : uysal ? "blue" : "navy"};

    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    cursor: pointer;
    &:hover{
        transform: scale(0.90)
    }
`;

export const TomatoButton=styled(Button)`
    background-color: ${({apo})=> apo ? "aqua" : "green"};
    color: white;
    width: 250px;
    border-radius: 5px;
`


export default Button;
