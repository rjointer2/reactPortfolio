
import { Column1, Column2, ContactCol1, ContactCol2, Container, FlexWrapper, Row, Wrapper } from "../GlobalStyles/Aligment"
import { Heading, SubTitle, Text, TextWrapper, Title } from "../GlobalStyles/Text"


const Contact = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading, text
}) => {
    return (

        <Container lightBackground={lightBackground}>
            <Wrapper>
                <Row>
                    <FlexWrapper>
                        <ContactCol1>
                            <TextWrapper>
                                <Title lightText={lightText}>
                                    Contact Form
                                </Title>
                                <SubTitle lightText={lightText}>
                                    Keep up with me on the following below
                                    or sign up for email notifications and 
                                    much more!
                                </SubTitle>
                                <Text lightText={lightText}>
                                <i class="fas fa-envelope-square"></i>
                                <i class="fab fa-twitter-square"></i>
                                <i class="fas fa-podcast"></i>
                                </Text>
                            </TextWrapper>
                        </ContactCol1>
                        <ContactCol2>
                            Test
                        </ContactCol2>
                    </FlexWrapper>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Contact;