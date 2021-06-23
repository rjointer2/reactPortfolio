
import React from 'react'
import { LandingContainer, LandingBackground, VideoBackground, LandingContent, LandingH1, LandingP, LandingScroll } from './LandingStyles';
import video from '../../assets/bg.mp4'

const Landing = () => {
    return (
        <LandingContainer>
            <LandingBackground > 
                <VideoBackground autoPlay loop muted src={video} type="video/mp4" />
            </LandingBackground>
            <LandingContent>
                    <LandingP>
                       Hello, I'm Roody
                    </LandingP>
                    <LandingH1>
                        <LandingScroll>
                            Web Designer
                        </LandingScroll>
                        <LandingScroll>
                            Web Developer
                        </LandingScroll>
                        <LandingScroll>
                            Problem Solver
                        </LandingScroll>
                        <LandingScroll>
                            Team Player
                        </LandingScroll>
                        <LandingScroll>
                            Hope You Enjoy!
                        </LandingScroll>
                    </LandingH1>
                </LandingContent>
        </LandingContainer>
    )
}

export default Landing


