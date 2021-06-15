
import { Button } from "react-scroll";
import { Item, Container, Wrapper } from "../GlobalStyles/Aligment"
import { BtnWrapper } from "../GlobalStyles/Buttons"
import { Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, SubTitle, Text5, TextWrapper, Title, OffSetText, RoodyText } from "../GlobalStyles/Text";
import aboutMe from '../../assets/aboutMe.svg';


const About = () => {
    return (

        <Container>
            <Wrapper>
                <Item>
                    <TextWrapper>
                        <OffSetText>
                            About
                        </OffSetText>
                        <RoodyText>
                            Roody
                        </RoodyText>
                    </TextWrapper>
                </Item>
                <Item>
                    <Img src={aboutMe} height="200px"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </Item>
            </Wrapper>
        </Container>
    )
}

export default About;