
import React from 'react'
import { SideBarContainer ,CloseMenu, Menu , SideBarBtnWrapper, SideBarLink, SideBarWrapper, SideBarBtnLink } from './SideBarStyles'

const SideBar = () => {
    return (
        <SideBarContainer>
            <Menu>
                <CloseMenu />
            </Menu>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink href="about">
                        About 
                    </SideBarLink>
                    <SideBarLink href="about">
                        Skill Set 
                    </SideBarLink>
                    <SideBarLink href="about">
                        Projects 
                    </SideBarLink>
                    <SideBarLink href="about">
                        Inquiry
                    </SideBarLink>
                    <SideBarLink href="about">
                        Learn More 
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrapper>
                    <SideBarBtnLink href="#">
                        Sign Up
                    </SideBarBtnLink>
                </SideBarBtnWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
