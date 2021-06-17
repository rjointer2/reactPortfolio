
import styled from 'styled-components';


const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const ContactContainer = styled.div`
    margin-top: 200px;
    min-height: 550px;
    display: flex;
    width: 100%;

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }

`;

export const ContactCard = styled.div`
    height: 365px;
    width: 200px;
    background-color: ${primary};
    transform: translate(20%, 7%);
    z-index: 1;

    @media screen and (max-width: 400px) {
        transform: translate(30%, 7%);
    }
`;

export const ContactSheet = styled.div`
    height: 420px;
    width: 100%;
    background-color: ${secondary};
    transform: translateX(-10%);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 400px) {
        display: none;
    }

`;

export const ContactWrapper = styled.div`
    margin: 30px;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const InputContainer = styled.div`

`;

export const Input = styled.input`

`;