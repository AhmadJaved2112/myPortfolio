import { PiSunLight } from "react-icons/pi"
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import Generic from "./Generic"

const Main = () => {
  return (
    <div className="scroll-smooth">
      <Generic />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  )
}

export default Main