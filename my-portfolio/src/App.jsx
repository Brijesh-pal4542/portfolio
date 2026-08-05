import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Loader from "../components/Loader"
import Journey from "../components/Journey"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function App() {

  return (
   <div>
    <Loader></Loader>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects/>
      <Journey/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App
