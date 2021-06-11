
import React from 'react';
import { NavLogo, NavMenu, MobileMenu, Nav, NavContainer, NavLinks } from './NavbarStyles';


const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="#">
                    Logo
                </NavLogo>
                <MobileMenu>
                    
                </MobileMenu>
                <NavMenu>
                    <NavLinks href="#">
                        Hi
                    </NavLinks>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
