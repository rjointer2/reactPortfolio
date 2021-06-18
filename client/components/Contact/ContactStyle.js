
import styled from 'styled-components';


import back from '../../assets/background-prog.png'

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const ContactBackground = styled.div`
    background: url(${back});
    background-size: contain;
    background-repeat: no-repaeat;
`;

export const ContactContainer = styled.div`
    margin-top: 200px;
    min-height: 550px;
    display: flex;
    width: 100%;
    background: url('../../assets/background-prog.png');

    @media screen and (max-width: 710px) {
        display: grid;
        justify-content: center;
    }

`;

export const ContactCard = styled.div`
    height: 365px;
    width: 200px;
    background-color: ${primary};
    transform: translate(20%, 7%);
    transition-duration: .4s;
    transition-timing-function: linear;
    z-index: 1;

    @media screen and (max-width: 710px) {
        transform: ${({ reveal }) => (reveal ? 'translate(7%, 110%)' : 'translate(7%, 7%)')};
    }
    
`;

export const ContactSheet = styled.div`
    height: 420px;
    width: 100%;
    background-color: ${secondary};
    transform: translateX(-10%);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 710px) {
        transform: none;
        filter: ${({reveal}) => ( reveal ? 'blur(1px)' : 'blur(0px)' )};
    }
`;

export const ContactWrapper = styled.div`
    margin: 30px;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 710px) {
        padding: 20px;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
`;

export const Input = styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    border-bottom-color: ${primary};
`;

export const Textarea = styled.textarea`
    width: 98%;
    outline: none;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: ${primary};
`;