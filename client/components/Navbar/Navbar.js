
import React from 'react';
import { NavLogo, NavMenu, MobileMenu, Nav, NavContainer, NavLinks, CreateAccount, CreateAccountBtn } from './NavbarStyles';

// icons

import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="#">
                    Logo
                </NavLogo>
                <MobileMenu>
                    <FaBars/>
                </MobileMenu>
                <NavMenu>
                    <NavLinks href="about">
                        About 
                    </NavLinks>
                    <NavLinks href="about">
                        Skill Set 
                    </NavLinks>
                    <NavLinks href="about">
                        Projects 
                    </NavLinks>
                    <NavLinks href="about">
                         Inquiry
                    </NavLinks>
                    <NavLinks href="about">
                        Learn More 
                    </NavLinks>
                </NavMenu>
                <CreateAccount>
                    <CreateAccountBtn href="#">Sign Up</CreateAccountBtn>
                </CreateAccount>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
