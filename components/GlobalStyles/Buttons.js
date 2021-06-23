
import styled from 'styled-components';

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white


export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Btn = styled.button`
    border: 0;
    background-color: ${primary};
    color: ${white};
    padding: 5px;
`;
