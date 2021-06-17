
import styled from 'styled-components';
import Link from 'next/link';

// Palette

const primary = "#d45d83" // light Pink
const secondary = "#f0cccc" // biege
const white = "#fff" // white

export const HoverArhcor = styled.div.attrs()`
    position: absolute;
    height: 4px;
    left: 0;
    width: 0;
    background: #f6a3d1;
    bottom: 1em;
    transition: .6s;
    border-radius: 4px;
    transform: translateY(.7em);
`;

export const Nav = styled.nav`
    background: ${primary};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
   
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

// not sure why the link from next not converting to a a tag

export const NavLogo = styled.div`
    color: ${white};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%)
        font-size: 1.8rem;
        cursor: pointer;
        color: ${white};
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: ${white};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    /* &:hover {
        height: 80px;
        border-bottom: 3px solid ${secondary};
    } */
   
`

export const CreateAccount = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`   

export const CreateAccountBtn = styled(Link)`
    border-radius: 50px;
    background: ${secondary};
    white-space:  nowrap;
    padding: 10px 22px;
    color: ${white};
    font-soze: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${white};
        color: ${primary};
    }
`