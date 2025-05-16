import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lottie from "lottie-react";
import spaceboy from "../components/models/spaceboy.json";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-20 md:pt-0">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <img 
          src="/images/bg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-5 md:px-10 lg:px-20 h-[90vh] md:h-screen flex flex-col md:flex-row items-center justify-center md:justify-between relative z-20 pt-16 md:pt-0">
        {/* LEFT: Hero Content */}
        <header className="md:w-1/2 w-full flex flex-col justify-center">
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="hero-text">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Shaping
                <span className="slide inline-block ml-2">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 p-1 md:p-2 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">into Real Projects</h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">that Deliver Results</h1>
            </div>

            <p className="text-white-50 text-base md:text-lg lg:text-xl relative z-10">
            Hi, I'm Javeed. Passionate about coding, learning, and pushing tech boundaries.
            </p>
          </div>
          <button 
  type="button"
  onClick={() => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  }} 
 className="pt-5 relative lg:-left-24 md:-left-16 sm:-left-8 -left-4"
>
  <div className="cta-button group transform scale-90" style={{ transform: 'scale(0.8)' }}> {/* Reduced scale */}
    <div className="bg-circle" />
    <p className="text">More About ME!</p>
    <div className="arrow-wrapper">
      <img 
        src="/images/arrow-down.svg" 
        alt="arrow" 
        style={{ width: '14px', height: '14px', transform: 'rotate(90deg)' }}
      />
    </div>
  </div>
</button>
      
  

        </header>
        



       

        {/* RIGHT: Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center -mt-4 md:-mt-0  ">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl mr-11 mb-20"
          >
            <Lottie
              animationData={spaceboy}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;