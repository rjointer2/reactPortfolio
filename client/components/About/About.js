
import { Button } from "react-scroll";
import { Item, Container, Wrapper, Column1, Column2, Row } from "../GlobalStyles/Aligment"
import { BtnWrapper } from "../GlobalStyles/Buttons"
import { Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, SubTitle, TextWrapper, Title } from "../GlobalStyles/Text";
import aboutMe from '../../assets/aboutMe.svg';
import me from '../../assets/me.png'

const About = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading
}) => {
    return (

        <Container lightBackground={lightBackground} id={id}>
            <Wrapper>
                <Row swapImagePlacement={swapImagePlacement} >
                    <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText} >
                                {heading}
                            </Heading>
                            <Title>
                                {title}
                            </Title>
                            <UnderLine />
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default About;