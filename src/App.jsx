import { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer"
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      <Navbar scrollTo={scrollTo} sections={{
        home: homeRef,
        about: aboutRef,
        skills: skillsRef,
        projects: projectsRef,
        contact: contactRef
      }} />
      
      <div ref={homeRef} id="home">
        <Hero />
      </div>
      
      <div ref={aboutRef} id="about">
        <About />
      </div>
      
      <div ref={skillsRef} id="skills">
        <Skills/>
      </div>
      
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      
      <div ref={contactRef} id="contact">
        <Contact />
        <Footer/>
        
      </div>
    </div>
  );
}

export default App;