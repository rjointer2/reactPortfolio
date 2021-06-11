
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
`;