import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";



function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <NavBar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
