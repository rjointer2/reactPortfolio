

import { Button } from "react-scroll";
import { Item, Container, Wrapper } from "../GlobalStyles/Aligment"
import { BtnWrapper } from "../GlobalStyles/Buttons"
import { Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, SubTitle, TextWrapper, Title } from "../GlobalStyles/Text";
import aboutMe from '../../assets/aboutMe.svg';


const Skillset = () => {
    return (

        <Container>
            <Wrapper>
                <Item>
                    <TextWrapper>
                        <Title>
                            Title
                        </Title>
                        <Heading>
                            Heading
                        </Heading>
                        <SubTitle>
                            SubTitle
                        </SubTitle>
                        <BtnWrapper>
                            <Button to="/" type="submit" value="Click"/>
                        </BtnWrapper>
                    </TextWrapper>
                </Item>
                <Item>
                    <Img src={aboutMe} height="200px"/>
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Skillset;