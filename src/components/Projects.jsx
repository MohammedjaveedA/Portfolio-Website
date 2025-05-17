import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
           <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300">Here are some of my recent works</p>
        </div>
        <div className="showcaselayout">

          <div ref={rydeRef} className="first-project-wrapper transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 group">
            <div className="image-wrapper">
              <img src="/images/movie-app.png" alt="Movie App Interface" />
            </div>
            <div className="text-content">
              <h2>
               A React Native Expo movie app for browsing, searching, and viewing movie details
              </h2>
              <a 
                  href={"https://github.com/MohammedjaveedA/React-Native-Projects/tree/main/movie-app"}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300
                  group-hover:translate-x-1 transition-transform duration-300"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 group" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/restate-app.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>A React Native Expo real estate app for browsing properties with ease</h2>
               <a 
                  href={"https://github.com/MohammedjaveedA/React-Native-Projects/tree/main/restate"}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300
                  group-hover:translate-x-1 transition-transform duration-300 pt-3"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

            </div>

            <div className="project transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 group" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/currency.png" alt="YC Directory App" />
              </div>
              <h2>A currency converter built with React offering exchange rates</h2>
               <a 
                  href={"https://github.com/MohammedjaveedA/Pratice-Projects/tree/main/ReactJS/currency-converter"}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300
                  group-hover:translate-x-1 transition-transform duration-300 pt-3"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects