
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
    transform: translateY(-150px);
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
    font-size: 45px;
    text-align: center;
    height: 55px;
    overflow: hidden;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    

`;

export const LandingScroll = styled.div`
    line-height: 60px;

    &:nth-child(1) {
        animation: scrolltext 15s infinite;
    }

    @keyframes scrolltext {
        0%{
          margin-top: 0;
        }
        12%{
            margin-top: -60px;
        }
        22%{
            margin-top: -120px;
        }
        33%{
            margin-top: -180px;
        }
        50%{
            margin-top: -240px;
        }
        62%{
            margin-top: -180px;
        }
        75%{
            margin-top: -120px;
        }
        83%{
            margin-top: -60px;
        }
        100%{
            margin-top: 0;
        }
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


/* 

    smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-80}

*/
