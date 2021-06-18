

import { Button } from "react-scroll";
import { Container, Wrapper } from "../GlobalStyles/Aligment"
import { BtnWrapper } from "../GlobalStyles/Buttons"
import { Img, ImgWrapper } from "../GlobalStyles/Img";
import { Heading, SubTitle, Text, TextWrapper, Title } from "../GlobalStyles/Text";
import aboutMe from '../../assets/aboutMe.svg';

import Carousel from 'react-elastic-carousel';
import { CarouselContainer, CarouselImg, CarouselTextWrapper } from "./ProjectStyles";
import { useRef } from "react";


const Projects = () => {

    const items =[
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 6, title: 'item #5'}
      ]

    return (

        <Container>
            <Carousel>
                {items.map(item => <CarouselContainer>
                    <CarouselImg>

                    </CarouselImg>
                    <CarouselTextWrapper>
                        <TextWrapper>
                            <Title>
                                Title
                            </Title>
                            <SubTitle>
                                SubTitle
                            </SubTitle>
                            <Text>
                               
                            </Text>
                        </TextWrapper>
                    </CarouselTextWrapper>
                </CarouselContainer>)}
            </Carousel>
        </Container>
    )
}

export default Projects;