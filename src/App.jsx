import About from "./components/About"
import Head from "./components/Head"
import Skills from "./components/Skills"
import "./App.css"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
 

  return (
    <>
    <div className="container">
     <Head/>
     <About/>
     <Skills/>
     <Projects/>
     <Footer/>
     </div>
    </>
  )
}

export default App
