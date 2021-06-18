import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import Projects from "../components/Projects/Projects";
import Skillset from "../components/SkillSet/SkillSet";

import { SkillSetConfig } from "../components/SkillSet/SkillSetConfig";
import { contactConfig } from "../components/Contact/ContactConfig";
import { aboutConfig } from "../components/About/AboutConfig";
import { projectConfig } from "../components/Projects/projectConfig";


const Index = () => {
    return (
        <div>
            <Landing />
            <About {...aboutConfig} />
            <Skillset {...SkillSetConfig}/>
            <Contact {...contactConfig} />
            <Projects {...projectConfig} />

        </div>
    )
}

// next will use pages/index to build a new .next folder and serve static folder 
// of our application and recomplie each change on the localhost
// WE ARE IGNORING .next FOLDER PATH TO PUSH LESS CODE

export default Index;