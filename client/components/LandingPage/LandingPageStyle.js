
import styled from 'styled-components';

export const Bubbles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transform: translateY(720px);
`;

export const BubbleItems = styled.li`
    position: absoulte;
    list-style: none;
    display: block;
    /* Will be pink soon */
    background-color: rgba(255, 205, 205, 1);
    bottom: -100px;
    

    &:nth-child(1) {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        transform: translateX(30%);
        animation: circle1 20s infinite;
        transition-timing-function: linear;
    };

    &:nth-child(2) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        left: 400%;
        animation-delay: 2s;
        animation-duration: 17s;
        animation: circle2 20s infinite;
        transition-timing-function: linear;
    };

    &:nth-child(3) {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: 46;
        animation-delay: 4s;
        animation-duration: 13s;
        animation: circle3 20s infinite;
        transition-timing-function: linear;
    };

    &:nth-child(4) {
        width: 10px;
        height: 10px;
        left: 50%;
        border-radius: 50%;
        animation-delay: 1s;
        animation-duration: 12s;
        animation: circle4 20s infinite;
        transition-timing-function: linear;
    };

    &:nth-child(5) {
        width: 100px;
        height: 100px;
        right: -80%;
        animation-delay: 1s;
        animation-duration: 22s;
        border-radius: 50%;
        animation: circle5 20s infinite;
        transition-timing-function: linear;
    };


    @keyframes circle1 {
        0% {
            -webkit-transform: transform(0, -100);
            transform: translate(0, -100);
        }
        100% {
            -webkit-transform: transform(-100px, -1580px) rotate(360deg);
            transform: translate(500px, -1580px) rotate(360deg)
        }
    }

    @keyframes circle2 {
        0% {
            -webkit-transform: translate(0, 100px);
            transform: translate(0px, 100px)
        }
        100% {
            -webkit-transform: translate(-1580px);
            transform: translate(-1590px, -1580px);
        }
    }

    @keyframes circle3 {
        0% {
            -webkit-transform: transformY(0);
            transform: translateY(0)
        }
        100% {
            -webkit-transform: transformY(-1580px) rotate(360deg);
            transform: translateY(-1580px) rotate(360deg)
        }
    }

    @keyframes circle4 {
        0% {
            -webkit-transform: transformY(0);
            transform: translateY(0)
        }
        100% {
            -webkit-transform: transformY(-1580px) rotate(360deg);
            transform: translateY(-1580px) rotate(360deg)
        }
    }

    @keyframes circle5 {
        0% {
            -webkit-transform: transformY(0);
            transform: translateY(0)
        }
        100% {
            -webkit-transform: transformY(-1580px) rotate(360deg);
            transform: translateY(-1580px) rotate(360deg)
        }
    }

`;

export const BubbleContainer = styled.div`
    height: 1080px;
    background-color: pink;
    z-index: 1
`;
