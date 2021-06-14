
import styled from 'styled-components';

// palette

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const Container = styled.div`
    color: ${white};
    background: ${({lightBackground}) => ( lightBackground ? '' : '#7a49a5' )};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max=width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-item: center;
    grid-template-areas: ${({imgSpread}) => ( imgSpread ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgSpread}) => ( imgSpread ? `'col1 col2'` : `'col1 col1 col2 col2'` )};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;