
import React from 'react'
import { Nav, NavContainer, NavLogo } from './NavbarStyles';

import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavContainer>
                    <Link href="#">
                        Logo
                    </Link>
                </NavContainer>
            </Nav>
        </div>
    )
}

export default Navbar
