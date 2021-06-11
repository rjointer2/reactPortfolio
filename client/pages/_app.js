
import './style.css'

const App = ({Component, pageProps}) => {
    // we will psss the components and pages as props 

    return <Component {...pageProps}/>

}

export default App