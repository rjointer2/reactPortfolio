
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
                    <SideBarLink href="about">
                        About 
                    </SideBarLink>
                    <SideBarLink href="about" onClick={toggle} >
                        Skill Set 
                    </SideBarLink>
                    <SideBarLink href="about" onClick={toggle} >
                        Projects 
                    </SideBarLink>
                    <SideBarLink href="about" onClick={toggle} >
                        Inquiry
                    </SideBarLink>
                    <SideBarLink href="about" onClick={toggle} >
                        Learn More 
                    </SideBarLink>
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
