import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
import Footer from './components/Footer'

function App() {
    const [pages] = useState([
        { name: 'about me' },
    ])


// set up useState with currentPage and setCurrentPage giving the default state to be the landing page

// example - pages[0] would show the about me page first

//SET UP RETURN
return (
    //container
        //header component wrapping the Nav 
        //Nav- give the Nav component some props- pages={pages},
        //setCurrentPage={setCurrentPage}, currentPage={currentPage}
        //close the header

        //main tag wrapping the page component
            //Page component with the prop of currentPage={currentPage}
            //close main
        //footer component
        //close container
    )
}

export default App