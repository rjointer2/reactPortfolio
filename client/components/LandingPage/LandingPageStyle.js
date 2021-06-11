
import styled from 'styled-components';

export const Bubbles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transform: translateZ(0);
`;

export const BubbleItems = styled.li`
    position: absoulte;
    list-style: none;
    display: block;
    /* Will be pink soon */
    background-color: rgba(255, 255, 255, 0.15);
    bottom: -100px;
    animation: circle 20s infinite;
    transition-timing-function: linear;

    &:nth-child(1) {
        width: 40px;
        height: 40px;
        left: 20%;
    };

    &:nth-child(2) {
        width: 40px;
        height: 40px;
        left: 400%;
        animation-delay: 2s;
        animation-duration: 17s;
    };

    &:nth-child(3) {
        width: 10px;
        height: 10px;
        left: 46;
        animation-delay: 4s;
        animation-duration: 13s;
    };

    &:nth-child(4) {
        width: 10px;
        height: 10px;
        left: 50%;
        animation-delay: 1s;
        animation-duration: 12s;
    };

    &:nth-child(5) {
        width: 10px;
        height: 10px;
        left: 20%;
        animation-delay: 1s;
        animation-duration: 22s;
    };

    @keyframes circle {
        0% {
            -webkit-transform: transformY(0);
            transform: translateY(0)
        }
        100% {
            -webkit-transform: transformY(-1080px) rotate(360deg);
            transform: translateY(-1080px) rotate(360deg)
        }
    }

`;

export const BubbleContainer = styled.body`
    background-color: black;
    z-index: 1
`;