
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import './style.css'

const App = ({Component, pageProps}) => {
    // we will psss the components and pages as props 

    // for the sidebar if the prop is a bool then the style will show
    const [isOpen, setIsOpen] = useState(false);

    // 
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Component {...pageProps}/>
        </>
    )

}

export default App