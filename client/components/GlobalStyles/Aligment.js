
import styled from 'styled-components';

// palette

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const Container = styled.div`
    color: ${primary};
    background: ;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 780px;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    margin: 1em;
`;


/* display: grid;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    grid-template-areas: 
        col1 col2
    ; */