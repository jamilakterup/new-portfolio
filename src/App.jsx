import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])


  return (
    <>
      {
        isLoading ?
          <div className="absolute h-screen w-full flex justify-center items-center">
            <PacmanLoader
              color="#12f7ff"
              loading={isLoading}
              size={30}
            />
          </div>
          :
          <BrowserRouter>
            <NavBar />
            <Home />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </BrowserRouter>
      }
    </>
  )
}

export default App
