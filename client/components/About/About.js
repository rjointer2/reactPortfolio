
import { useEffect, useRef } from "react";
import { Container, Wrapper, Column1, Column2, Row } from "../GlobalStyles/Aligment"
import { Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, Text, TextWrapper, Title, UnderLine } from "../GlobalStyles/Text";


const About = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading, text
}) => {

    const divs = useRef();

    useEffect(() => {

        // we want to get the css divs Heading, Title, and Underline, and the Img
        const divChildern = divs.current.childNodes
    })

    return (

        <Container lightBackground={lightBackground} id={id}>
            <Wrapper>
                <Row swapImagePlacement={swapImagePlacement} >
                    <Column1>
                        <TextWrapper ref={divs}>
                            <Heading lightText={lightText}>
                                {heading}
                            </Heading>
                            <Title>
                                {title}
                            </Title>
                            <UnderLine />
                            <Text lightText={lightText}>
                                {text}
                                <br/><br/>
                                {text}
                            </Text>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default About;