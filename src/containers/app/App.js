import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Scroll from '../../components/Scroll'
import BodyParallax from '../../components/BodyParallax'
import About from '../../components/About'
import Technologies from '../../components/Technologies'
import SendEmail from '../../components/SendEmail'
import Footer from '../../components/Footer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='Website'>
        <NavBar />
        <Header />
        <Scroll>
        </Scroll>
        <BodyParallax />
        <About />
        <Technologies />
        <SendEmail />
        <Footer />
      </div>
    )
  }
}

export default App
