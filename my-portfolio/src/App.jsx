import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Loader from "../components/Loader"

function App() {

  return (
   <div>
    <Loader></Loader>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects/>
      <div className="h-100"></div>
   </div>
  )
}

export default App
