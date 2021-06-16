
import React, { useRef } from 'react';
import { useEffect, useState } from 'react'

import { NavLogo, NavMenu, MobileMenu, Nav, NavContainer, NavLinks, CreateAccount, CreateAccountBtn, HoverArhcor } from './NavbarStyles';

// icons

import { FaBars } from 'react-icons/fa'
import Link from 'next/link';

// toggle is drilled from the app's Navbar component

const Navbar = ({ toggle }) => {

    const hover = useRef()

    useEffect(() => {

        
        const hoverLine = document.querySelector(`.${hover.current.getAttribute("class").split(" ")[1]}`);

        const archorTags = document.querySelectorAll('nav a');

        const hoverUnder = (a) => {
            hoverLine.style.left = a.offsetLeft+"px";
            hoverLine.style.width = a.offsetWidth+"px";
        }
        
        archorTags.forEach(archorTag => {
            archorTag.addEventListener('mouseenter', (e)=>{
                hoverUnder(e.target);
            })
        })

        document.addEventListener('scroll', (e) => {
            const y = window.scrollY
            console.log(y)

            if(y >= 800 && y <= 1000) hoverUnder(archorTags[0]) 
            if (y >= 1300 && y <= 2000) hoverUnder(archorTags[1])
            if( y >= 3500 && y <= 4000 ) hoverUnder(archorTags[2])

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
                    {/* here we reference this DOM element so we can use it later */}
                    <HoverArhcor ref={hover}></HoverArhcor>
                    <NavLinks href="/">
                        About
                    </NavLinks>
                    <NavLinks href="/">
                        Skill Set 
                    </NavLinks>
                    <NavLinks href="/">
                        Contact
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
