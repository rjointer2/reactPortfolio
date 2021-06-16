
import { Container, Row, Column1, Wrapper, Column2 } from "../GlobalStyles/Aligment"
import { Img, ImgWrapper } from "../GlobalStyles/Img"
import { Heading, Text, TextWrapper, Title } from "../GlobalStyles/Text"



const Skillset = ({ lightText, lightBackground, img1, img2, alt, swapImagePlacement, id, title, heading, text }) => {
   
    return (
        <>
            <Container lightBackground={lightBackground}>
               <Wrapper>
                    <Row swapImagePlacement={swapImagePlacement}>
                        <Column1>
                            <TextWrapper>
                                <Title lightText={lightText}>
                                    Experience with
                                </Title>
                                <Heading lightText={lightText}>
                                    Server Side Development
                                </Heading>
                                <Text lightText={lightText}>
                                    {text}
                                    <br/><br/>
                                    {text}
                                    <br/><br/>
                                    {text}
                                    
                                </Text>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img1} />
                            </ImgWrapper>
                        </Column2>
                    </Row>
               </Wrapper>
            </Container>

            <Container lightBackground={lightBackground}>
               <Wrapper>
                    <Row>
                        <Column1>
                            <TextWrapper>
                                <Title lightText={lightText}>
                                    Experience with
                                </Title>
                                <Heading lightText={lightText}>
                                    Client Side Development
                                </Heading>
                                <Text lightText={lightText}>
                                    {text}
                                    <br/><br/>
                                    {text}
                                    <br/><br/>
                                    {text}
                                </Text>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrapper>
                                <Img src={img2} />
                            </ImgWrapper>
                        </Column2>
                    </Row>
               </Wrapper>
            </Container>
        </>
    )
}

export default Skillset;