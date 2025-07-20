
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import MyProjects from './Components/MyProjects'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import './index.css'

function App() {

  // service_cutb9xd
  //template_a0ctr1n
  //qJqHgqiE4ylwG-OXi

  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900 text-emerald-300">
        <header>
        <Navbar></Navbar>
       </header>
       <main className='lg:w-11/12 lg:mx-auto mx-2 space-y-10'>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <MyProjects></MyProjects>
        <Contact></Contact>
       </main>
       <footer>
        <Footer></Footer>
       </footer>
       </div>
    </>
  )
}

export default App
