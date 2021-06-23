

import { Container, Row, Wrapper } from "../GlobalStyles/Aligment"
import { Heading, SubTitle, Text, TextWrapper, Title } from "../GlobalStyles/Text";

import { ProjectCard, ProjectContainer, ProjectImg, ProjectP, ProjectTitle, ProjectWrapper } from "./ProjectStyles";
import { Img, ImgWrapper } from "../GlobalStyles/Img";


const Projects = ({
    id, lightBackground, lightText, projectData
}) => {

    

    return (

        <ProjectContainer>
            <ProjectTitle>
                Some Projects
            </ProjectTitle>
            <ProjectWrapper>
                {
                    projectData.map(project => <ProjectCard>
                        <ProjectImg src={project.img}/>
                        <Title>
                            {project.title}
                        </Title>
                        <Text>
                            {project.summary}
                        </Text>
                    </ProjectCard>)
                }
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects;