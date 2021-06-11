import Navbar from "../components/Navbar/Navbar";

const Index = () => {
    return (
        <>
            <Navbar/>
            <h1>Hello World</h1>
            <p>Testing...</p>
        </>
    )
}

// next will use pages/index to build a new .next folder and serve static folder 
// of our application and recomplie each change on the localhost
// WE ARE IGNORING .next FOLDER PATH TO PUSH LESS CODE

export default Index;