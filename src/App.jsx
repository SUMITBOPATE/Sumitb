import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Experiments from './pages/Experiments';
import Head from './components/Head';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./styles/global.css"
import "./App.css"

function App() {
  return (
    <>
      <div className="main">
        <div className="app-grid-background">
          <div className="container">
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <Head />
                  <div className="section-divider" />
                  <Projects />
                  <div className="section-divider" />
                  <Skills />
                  <div className="section-divider" />
                  <Footer />
                  <div className="section-divider" />
                  <p className="footer-bottom-text">&copy; {new Date().getFullYear()} Sumit Bopate. Built with care.</p>
                </>
              } />
              <Route path="/about" element={
                <About />
              } />
              <Route path="/experiments" element={
                <Experiments />
              } />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
