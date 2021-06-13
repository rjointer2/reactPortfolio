
import styled from 'styled-components';

/* 


Color #d45d84 has RGB values of R:212, G:93, B:132 background


*/

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const LandingBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: pink;
`;

export const LandingContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items center;
`;

export const LandingH1 = styled.h1`
    color: ${white};
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }

`;

export const LandingP = styled.p`
    margin-top: 24px;
    color: ${white};
    font-size: 24px;
    text-align: center;
    max-width: 24px;
    max-width: 600px;

    @media screen and (max-width: 760px) {
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

