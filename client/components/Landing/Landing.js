
import React from 'react'
import { LandingContainer, LandingBackground, VideoBackground, LandingContent, LandingH1, LandingP } from './LandingStyles';
import video from '../../assets/bg.mp4'

const Landing = () => {
    return (
        <LandingContainer>
            <LandingBackground > 
                <VideoBackground autoPlay loop muted src={video} type="video/mp4" />
            </LandingBackground>
            <LandingContent>
                    <LandingP>
                        I'm a lot things...
                    </LandingP>
                    <LandingH1>
                        Full Stack Developer
                    </LandingH1>
                </LandingContent>
        </LandingContainer>
    )
}

export default Landing


