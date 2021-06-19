
import styled from 'styled-components';

import picture from '../../assets/background-prog.png'

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white


export const ProjectContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${picture});
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 3000px;
    }
`;

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grip-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div`
    background: ${white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    margin: 10px;
    transition: all 0.2s ease=in-out;
    border: 2px solid ${primary};

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease=in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 365px) {
        padding: 5%;
        margin: 20px 0 20px 0;
    }
`;

export const ProjectImg = styled.img`
    height: 100px;
    margin-bottom: 10px;
    
    @media screen and (max-width: 365px) {
        padding: 5%;
        margin: 20px 0 20px 0;
        width: 100px;
    }
`;

export const ProjectTitle = styled.h1`
    font-size: 2.5rem;
    color: ${primary};
    margin-bottom: 64px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectSubTitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;


export const ProjectP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

