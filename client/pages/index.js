import About from "../components/About/About";
import { aboutConfig } from "../components/About/AboutConfig";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import LeanrMore from "../components/LearnMore/LearnMore";
import Skillset from "../components/SkillSet/Skillset";


const Index = () => {
    return (
        <div>
            <Landing />
            <About {...aboutConfig} />


        </div>
    )
}

// next will use pages/index to build a new .next folder and serve static folder 
// of our application and recomplie each change on the localhost
// WE ARE IGNORING .next FOLDER PATH TO PUSH LESS CODE

export default Index;