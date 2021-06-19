import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItem, FooterLinkTitle, FooterLinkWrapper, FooterTextSmall, FooterWrapper } from "./FooterStyle"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                About This Site
                            </FooterLinkTitle>
                            <FooterLink href="#">Learn More</FooterLink>
                            <FooterLink href="#">Inspiration</FooterLink>
                            <FooterLink href="#">Fair Usage</FooterLink>
                            <FooterLink href="#">View Source</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink href="#">Twitter</FooterLink>
                            <FooterLink href="#">LinkedIn</FooterLink>
                            <FooterLink href="#">Archor</FooterLink>
                            <FooterLink href="#">Github</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>
                                Contact Me
                            </FooterLinkTitle>
                            <FooterLink href="#">Hire Me</FooterLink>
                            <FooterLink href="#">Report An Issue</FooterLink>
                            <FooterLink href="#">Looking to Connect</FooterLink>
                            <FooterLink href="#">Free Lancing</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <FooterTextSmall>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </FooterTextSmall>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;