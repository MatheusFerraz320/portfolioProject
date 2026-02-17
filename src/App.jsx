
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer  from './components/Footer'
import Navbar from './components/NavBar'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="">
      <Navbar />
      <SocialLinks />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  )
}


export default App
