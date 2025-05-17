import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import TitleHeader from "../components/TitleHeader";
import aboutanimation from "../components/models/aboutanimation.json";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    // Animation for text content
    gsap.fromTo(
      ".about-text",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        }
      }
    );

    // Animation for Lottie animation
    gsap.fromTo(
      ".about-animation",
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".about-animation",
          start: "top 80%",
        }
      }
    );

    // Scale effect on hover for the entire section
  }, []);

  return (
    <section 
      className="about-section min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-10 md:py-10 overflow-hidden"
      id="about"
    >
      <div className="md:w-1/2 w-full flex flex-col items-start about-text pt-10">
        <TitleHeader title="About ME!" />
        <p className="text-lg md:text-xl max-w-xl text-left pt-5">
          I'm a passionate software developer with a strong foundation in building responsive websites and mobile applications. I specialize in using modern JavaScript frameworks like React.js for web development and React Native with Expo for cross-platform mobile apps.
          <br /><br />
          During my academic journey, I strengthened my programming foundation by learning C and Python. Over time, I've grown into a developer who enjoys crafting user-friendly digital experiences that are both functional and visually engaging.
          <br /><br />
          I'm always eager to learn, explore new technologies, and build impactful solutions that make a difference.
        </p>
      </div>
      <div className="about-animation md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <Lottie
            animationData={aboutanimation}
            loop={true}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}