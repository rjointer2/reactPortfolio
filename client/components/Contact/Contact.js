
import { Column1, Column2, Container, Icon, Row, Wrapper } from "../GlobalStyles/Aligment"
import { Heading, SubTitle, Text, TextWrapper, Title, UnderLineW } from "../GlobalStyles/Text";
import { ContactContainer, ContactCard, ContactSheet, ContactWrapper, Input, InputContainer, Form } from "./ContactStyle";


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
                                <i className="fab fa-twitter"></i>
                                &nbsp;Twitter
                            </Icon>
                            <Icon>
                                <i className="fab fa-linkedin-in"></i>
                                &nbsp;linkedin
                            </Icon>
                            <Icon>
                                <i className="fab fa-git"></i>
                                &nbsp;Github
                            </Icon>
                            <Icon>
                                <i className="fas fa-podcast"></i>
                                &nbsp;Podcast
                            </Icon>
                            <Icon>
                                <i className="fas fa-envelope"></i>
                                &nbsp;Email
                            </Icon>
                            <TextWrapper>
                                <Text lightText={lightText}>
                                    Feel free to peek and speak! Let's catch up and
                                    network!
                                </Text>
                            </TextWrapper>
                        </ContactWrapper>
                    </ContactCard>
                    <ContactSheet>
                        <Form>
                            <Title>
                                Leave a Message
                            </Title>
                           <Row>
                           <Column1>
                                <InputContainer>
                                        <Text>
                                            First Name
                                        </Text>
                                        <Input />
                                    </InputContainer>
                                    <InputContainer>
                                        <Text>
                                            Last Name
                                        </Text>
                                        <Input />
                                    </InputContainer>
                                </Column1>
                                <Column2>
                                    <InputContainer>
                                        <Text>
                                            Email Address
                                        </Text>
                                        <Input />
                                    </InputContainer>
                                    <InputContainer>
                                        <Text>
                                            Subject of Message
                                        </Text>
                                        <Input />
                                    </InputContainer>
                                </Column2>
                           </Row>

                        </Form>
                    </ContactSheet>
                </ContactContainer>
        </Container>
    )
}

export default Contact;