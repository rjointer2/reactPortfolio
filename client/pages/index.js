import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import LeanrMore from "../components/LearnMore/LearnMore";
import Skillset from "../components/SkillSet/Skillset";
import Meta from "../components/Head/Head-SEO";


const Index = () => {
    return (
        <div>
            <Meta />
            <Landing />
            <About />
            <Contact/>
            <Skillset/>
            <LeanrMore/>
        </div>
    )
}

// next will use pages/index to build a new .next folder and serve static folder 
// of our application and recomplie each change on the localhost
// WE ARE IGNORING .next FOLDER PATH TO PUSH LESS CODE

export default Index;