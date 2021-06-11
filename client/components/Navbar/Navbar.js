
import React from 'react'
import { Nav, NavContainer, NavLogo } from './NavbarStyles';

import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavContainer>
                    <NavLogo href="#">
                        Logo
                    </NavLogo>
                </NavContainer>
            </Nav>
        </div>
    )
}

export default Navbar
