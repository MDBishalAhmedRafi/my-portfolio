
import AboutMe from './Components/AboutMe'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import './index.css'

function App() {

  return (
    <>
       <header>
        <Navbar></Navbar>
       </header>
       <main className='lg:w-11/12 lg:mx-auto mx-2 space-y-10'>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
       </main>
    </>
  )
}

export default App
