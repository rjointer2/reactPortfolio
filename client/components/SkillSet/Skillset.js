
import { Container, Row, Column1, Wrapper } from "../GlobalStyles/Aligment"
import { TextWrapper, Title } from "../GlobalStyles/Text"



const Skillset = ({ lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading, text }) => {
   
    return (
        <Container lightBackground={lightBackground}>
               <Wrapper>
                <Row>
                    <Column1>
                        <TextWrapper>
                            <Title lightText={lightText}>
                                Title
                            </Title>
                        </TextWrapper>
                    </Column1>
                </Row>
               </Wrapper>
        </Container>
    )
}

export default Skillset;