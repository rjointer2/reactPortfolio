import About from "../components/About/About";
import Landing from "../components/Landing/Landing";


const Index = () => {
    return (
        <div>
            <Landing />
            <About />
            <h1>Hello World</h1>
            <p>Testing...!!</p>
        </div>
    )
}

// next will use pages/index to build a new .next folder and serve static folder 
// of our application and recomplie each change on the localhost
// WE ARE IGNORING .next FOLDER PATH TO PUSH LESS CODE

export default Index;