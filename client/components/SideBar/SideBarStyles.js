
import styled from 'styled-components';
import { Link as LinkN } from 'next/link';

import { FaTimes } from 'react-icons/fa';

// Palette

const primary = "#f7dada" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const SideBarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    background: ${secondary};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
`;

export const CloseMenu = styled(FaTimes)`
    color: ${white};
    top
`