
import Link from 'next/link'
import React, { useState } from 'react'
import { SideBarMenu ,SideBarContainer ,CloseMenu, Menu , SideBarBtnWrapper, SideBarLink, SideBarWrapper, SideBarBtnLink } from './SideBarStyles'

// isOpen is drilled from the app's SideBar component
// toggle is drileld form the app's Navbar component 

const SideBar = ({ isOpen, toggle }) => {


    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle} >
            <Menu onClick={toggle} >
                <CloseMenu />
            </Menu>
            <SideBarWrapper>
                <SideBarMenu>
                    <Link href="about">
                        <SideBarLink href="about">
                            About
                        </SideBarLink>
                    </Link>
                    <Link href="skillset">
                        <SideBarLink href="skillset" onClick={toggle} >
                                Skill Set 
                        </SideBarLink>
                    </Link>
                    <Link href="projects">
                        <SideBarLink href="projects" onClick={toggle} >
                            Projects 
                        </SideBarLink>
                    </Link>
                   <Link href ="contact">
                    <SideBarLink href="inquiry" onClick={toggle} >
                            Inquiry
                        </SideBarLink>
                   </Link>
                    <Link href="learnmore">
                        <SideBarLink href="laernmore" onClick={toggle} >
                            Learn More 
                        </SideBarLink>
                    </Link>
                </SideBarMenu>
                <SideBarBtnWrapper>
                    <SideBarBtnLink href="#" onClick={toggle} >
                        Sign Up
                    </SideBarBtnLink>
                </SideBarBtnWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
