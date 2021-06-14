
import React from 'react';
import { useEffect, useState } from 'react'

import { NavLogo, NavMenu, MobileMenu, Nav, NavContainer, NavLinks, CreateAccount, CreateAccountBtn, HoverArhcor } from './NavbarStyles';

// icons

import { FaBars } from 'react-icons/fa'
import Link from 'next/link';

// toggle is drilled from the app's Navbar component

const Navbar = ({ toggle }) => {

    useEffect(() => {
        
        // ReatDOM ins't working? But after the side effect loaded the componenment mounts
        const hoverLine = document.querySelector('.emRAOx');

        // now let's select all the archor tags from the nav

        const items = document.querySelectorAll('nav a');

        function hoverUnder(a){
            hoverLine.style.left = a.offsetLeft+"px";
            hoverLine.style.width = a.offsetWidth+"px";
        }
        
        items.forEach(link => {
            link.addEventListener('mouseenter', (a)=>{
                hoverLine.style = 'red'
                hoverUnder(a.target);
            })
        })

    }, [])
    
    return (
        <Nav>
            <NavContainer>
                {/* 
                    not sure why the link from next not converting to a a tag
                    so for now we'll import the link componnet form next and 
                    style the Navlogo as a div
                */}
                <Link href="#">
                    <NavLogo>
                        logo
                    </NavLogo>
                </Link>
                <MobileMenu onClick={toggle} >
                    <FaBars/>
                </MobileMenu>
                <NavMenu>
                    <HoverArhcor></HoverArhcor>
                    <NavLinks href="/">
                        About
                    </NavLinks>
                    <NavLinks href="/">
                        Skill Set 
                    </NavLinks>
                    <NavLinks href="/">
                        Projects 
                    </NavLinks>
                    <NavLinks href="/">
                         Inquiry
                    </NavLinks>
                    <NavLinks href="/">
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
