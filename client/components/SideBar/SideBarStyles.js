
import styled from 'styled-components';
import Link from 'next/link';

import { FaTimes } from 'react-icons/fa';

// Palette

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const SideBarContainer = styled.aside`
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
`;

export const Menu = styled.div` 
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: ${white};
`;

export const SideBarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${white};

    &:hover {
        color: ${secondary};
        transition: 0.2s ease-in-out;
    }

`;

export const SideBarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBarBtnLink = styled.div`
    border-radius: 50px;
    background: ${secondary};
    white-space: nowrap;
    padding: 16px 64px;
    color: #434344;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    $:hover {
        transition: all 0.2s ease-in-out;
        background: ${white};
        color: #121211;
    }

`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
    }
`;