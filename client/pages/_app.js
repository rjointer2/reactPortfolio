
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import './style.css'

const App = ({Component, pageProps}) => {
    // we will psss the components and pages as props 

    return (
        <>
            <Navbar />
            <SideBar />
            <Component {...pageProps}/>
        </>
    )

}

export default App