import React, { Component } from 'react';
import About from './components/About'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Contact from './components/Contact'

class App extends Component {
    
//SET UP RETURN
    render(){
      return (
        <div className='App'>
            <Header />
            <About />
            <Contact />
            <Resume />
            <Portfolio />
            <Footer />
        </div>
      )
    }  
}

export default App