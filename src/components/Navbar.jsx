import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = ({ scrollTo, sections }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollTo(sections[section]);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          Mohammed Javeed A
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a 
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(name.toLowerCase());
                  }}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="#contact" 
          className="contact-btn group"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('contact');
          }}
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Navbar;