


import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Meta from '../components/Head/Head-SEO';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/SideBar/SideBar';

import './style.css'


const App = ({Component, pageProps}) => {
    // we will psss the components and pages as props 

    // for the sidebar if the prop is a bool then the style will show
    const [isOpen, setIsOpen] = useState(false);

    // 
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const test = async () => {
        const res = await fetch('http://localhost:3030/something');
        const data = await res.json();
        return data
    }

    //test().then((data) => console.log(data)).catch(err => console.log(err))

    return (
        <>
            <Meta />
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Component {...pageProps}/>
           <Footer/> 
        </>
    )

}

export default App