
import { Container, Icon, Row, Wrapper } from "../GlobalStyles/Aligment"
import { BtnWrapper } from "../GlobalStyles/Buttons";
import { Img } from "../GlobalStyles/Img";
import { Heading, SubTitle, Text, TextWrapper, Title, UnderLineW } from "../GlobalStyles/Text";
import { ContactContainer, ContactCard, ContactSheet, ContactWrapper } from "./ContactStyle";



const Contact = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading, text
}) => {
    return (

        <Container lightBackground={lightBackground}>
                <ContactContainer>
                    <ContactCard>
                        <ContactWrapper>
                            <Title lightText={lightText}>
                                Contact Info
                            </Title>
                            <UnderLineW/>
                            <Icon>
                                <i class="fab fa-twitter"></i>
                                &nbsp;rjointer2
                            </Icon>
                            <Icon>
                                <i class="fab fa-linkedin-in"></i>
                                &nbsp;Example
                            </Icon>
                            <Icon>
                                <i class="fab fa-git"></i>
                                &nbsp;Example
                            </Icon>
                            <Icon>
                                <i class="fas fa-podcast"></i>
                                &nbsp;Example
                            </Icon>
                            <Icon>
                                <i class="fas fa-envelope"></i>
                                &nbsp;Example
                            </Icon>
                            <TextWrapper>
                                <Text lightText={lightText}>
                                    Feel free to peek and speak! Let's catch up and
                                    network!
                                </Text>
                            </TextWrapper>
                            <UnderLineW/>
                        </ContactWrapper>
                    </ContactCard>
                    <ContactSheet>

                    </ContactSheet>
                </ContactContainer>
        </Container>
    )
}

export default Contact;