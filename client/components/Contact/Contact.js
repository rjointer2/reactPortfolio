
import { useCallback, useEffect, useRef, useState } from "react";
import { Column1, Column2, Container, Icon, Row, Wrapper } from "../GlobalStyles/Aligment"
import { FlexImgPosition, Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, SubTitle, Text, TextWrapper, Title, UnderLineW } from "../GlobalStyles/Text";
import { ContactContainer, ContactCard, ContactSheet, ContactWrapper, Input, InputContainer, Form, Textarea, ContactBackground } from "./ContactStyle";


const Contact = ({
    lightText, lightBackground, img, alt, swapImagePlacement, id, title, heading, text, reveal
}) => {

    const row = useRef();

    const useToggle = ( initVal = false ) => {
        const [ value, setValue ] = useState(initVal);
        const toggle = useCallback(() => {
            setValue( val => !val);
        }, []);

        return [value, toggle];
    }

    const [clicked, setClicked] = useToggle();

    return (

        <ContactBackground>
            <ContactContainer>
                <ContactCard ref={row} reveal={reveal = clicked ? false : true }>
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
                                {text}
                            </Text>
                            <button onClick={setClicked}>
                                { clicked ? 'Hide Message' : 'Send Message' }
                            </button>
                        </TextWrapper>
                    </ContactWrapper>
                </ContactCard>
                <ContactSheet reveal={reveal} >
                    <Form>
                        <Row>
                        <Column1>
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
                        <InputContainer>
                            <Title>
                                Write Here
                            </Title>
                            <Textarea />
                        </InputContainer>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img}/>
                            </ImgWrapper>
                        </Column2>
                        </Row>
                    </Form>
                </ContactSheet>
            </ContactContainer>
        </ContactBackground>
    )
}

export default Contact;