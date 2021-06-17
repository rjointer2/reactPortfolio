
import { Container, Wrapper } from "../GlobalStyles/Aligment"
import { Heading, SubTitle, Text, TextWrapper, Title } from "../GlobalStyles/Text"


const Contact = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading, text
}) => {
    return (

        <Container lightBackground={lightBackground}>
            <Wrapper>
                <ContactContainer>
                    <ContactInfo>
                        <>
                            <Title>
                                Contact Info
                            </Title>
                            <InfoList>
                                <InfoItem>
                                    <Span><Img/></Span>
                                    <Span>
                                        Lorem Lopsi
                                    </Span>
                                </InfoItem>
                            </InfoList>
                            <InfoList>
                                <InfoItem>
                                    <Span><Img/></Span>
                                    <Span>
                                        Lorem Lopsi
                                    </Span>
                                </InfoItem>
                            </InfoList>
                            <InfoList>
                                <InfoItem>
                                    <Span><Img/></Span>
                                    <Span>
                                        Lorem Lopsi
                                    </Span>
                                </InfoItem>
                            </InfoList>
                            <InfoList>
                                <ContactForm>
                                    <Title>
                                        Send Message
                                    </Title>
                                    <FormBox>
                                        <InputBox>
                                            <Input />
                                            <Span>
                                                First Name
                                            </Span>
                                        </InputBox>
                                        <InputBox>
                                            <Input />
                                            <Span>
                                                Last Name
                                            </Span>
                                        </InputBox>
                                        <InputBox>
                                            <Input />
                                            <Span>
                                                Email Address
                                            </Span>
                                        </InputBox>
                                        <InputBox>
                                            <Input />
                                            <Span>
                                                Mobile Number
                                            </Span>
                                        </InputBox>
                                        <InputBoxWide>
                                            <TextArea />
                                            <Span>
                                                Write Message
                                            </Span>
                                        </InputBoxWide>
                                        <InputBoxWide>
                                            <Input />
                                            <BtnWrapper>
                                                <Button />
                                            </BtnWrapper>
                                        </InputBoxWide>
                                    </FormBox>
                                </ContactForm>
                            </InfoList>
                        </>
                    </ContactInfo>
                </ContactContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact;