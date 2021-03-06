
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

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
            if (y >= 1300 && y <= 2800) hoverUnder(archorTags[1])
            if( y >= 3010 && y <= 4000 ) hoverUnder(archorTags[2])
            if( y >= 4110 && y <= 5000 ) hoverUnder(archorTags[3])

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
                    <i class="fas fa-bug"></i>
                    </NavLogo>
                </Link>
                <MobileMenu onClick={toggle} >
                    <FaBars style={{transform: 'translateY(-25px)'}}/>
                </MobileMenu>
                <NavMenu>
                    {/* here we reference this DOM element so we can use it later */}
                    <HoverArhcor ref={hover}></HoverArhcor>
                    <Link href="#">
                        <NavLinks>
                            About
                        </NavLinks>
                    </Link>
                    <Link href="#">
                        <NavLinks>
                            Skill Set 
                        </NavLinks>
                    </Link>
                    <Link href="#">
                        <NavLinks>
                            Contact
                        </NavLinks>
                    </Link>
                    <Link href="#">
                        <NavLinks>
                            Projects
                        </NavLinks>
                    </Link>
                </NavMenu>
                <CreateAccount>
                    <Link href="#">
                        <CreateAccountBtn>Sign Up</CreateAccountBtn>
                    </Link>
                </CreateAccount>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
