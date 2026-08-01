import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Test from "../components/Test"

function App() {

  return (
   <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Test></Test>
      <div className="h-100"></div>
   </div>
  )
}

export default App
