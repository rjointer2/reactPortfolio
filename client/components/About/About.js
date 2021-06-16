
import { useEffect, useRef } from "react";
import { Item, Container, Wrapper, Column1, Column2, Row } from "../GlobalStyles/Aligment"
import { Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, SubTitle, TextWrapper, Title, UnderLine } from "../GlobalStyles/Text";


const About = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading
}) => {

    const divs = useRef();

    useEffect(() => {

        // we want to get the css divs Heading, Title, and Underline, and the Img

        const divChildern = divs.current.childNodes
        console.log(divChildern)

        // then add a fade in property function
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
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img />
                        </ImgWrapper>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default About;