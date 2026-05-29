import './style.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App