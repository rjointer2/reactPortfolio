
import useToggle from '../../hooks/useToggle';
import { Column1, Column2, Container, Row, Wrapper } from '../GlobalStyles/Aligment';
import { Btn, BtnWrapper } from '../GlobalStyles/Buttons';
import { Img, ImgWrapper } from '../GlobalStyles/Img';
import { Heading, SubTitle, Text, TextWrapper, Title } from '../GlobalStyles/Text';
import { ContactSheet, Form, Input, InputContainer, Textarea } from './ContactStyles';



const Contact = ({
    lightText, img, alt, id, title, heading, text, reveal, lightBackground
}) => {

    const [clicked, setClicked] = useToggle();

    return (
       <Container lightBackground>
           <Wrapper>
               <Row>
                   <Column1>
                        <TextWrapper>
                            <Title>
                                {title}
                            </Title>
                            <Heading>
                                {heading}
                            </Heading>
                            <SubTitle lightText={lightText}>
                                {text}
                            </SubTitle>
                            <BtnWrapper>
                                <Btn onClick={setClicked}>
                                    {clicked ? 'Close Form' : 'Send a Message'}
                                </Btn>
                            </BtnWrapper>
                            { clicked ? <Form>
                            <ContactSheet>
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
                                    </Row>
                                </Form>
                            </ContactSheet>
                                        </Form> : ''}
                                    </TextWrapper>
                            </Column1>
                            <Column2>
                        <ImgWrapper>
                            <Img src={img} />
                        </ImgWrapper>
                   </Column2>
               </Row>
           </Wrapper>
       </Container>
    )
}

export default Contact;