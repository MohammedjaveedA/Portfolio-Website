import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    // Animation for tech cards
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          toggleActions: "play none none none", // Ensures animation only plays once
        },
      }
    );

    // Optional: Add a subtle scale effect on hover
    gsap.utils.toArray(".tech-card").forEach(card => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true,
        onComplete: () => gsap.to(card, { scale: 1, duration: 0.3 }),
      });

      card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.05, duration: 0.3 }));
      card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div id="skills" className="flex-center section-padding py-5">
      <div className="w-full h-full md:px-10 px-5 pt-20">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        
        <div className="tech-grid">
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img 
                    src={techStackIcon.imgPath} 
                    alt={techStackIcon.name}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="padding-x w-full">
                  <p className="font-medium text-center">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;