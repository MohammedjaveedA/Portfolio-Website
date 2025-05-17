import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperiance";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useGSAP(() => {
    // Form animation - more subtle to avoid interference
    gsap.from(".contact-form", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Title animation
    gsap.from(".contact-title", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%"
      }
    });

    // Input field animations (only on focus)
    const inputs = gsap.utils.toArray(".contact-input");
    inputs.forEach(input => {
      const field = input.querySelector("input, textarea");
      
      field.addEventListener("focus", () => {
        gsap.to(input, {
          y: -3,
          duration: 0.2,
          ease: "power1.out"
        });
      });
      
      field.addEventListener("blur", () => {
        gsap.to(input, {
          y: 0,
          duration: 0.2,
          ease: "power1.out"
        });
      });
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      // Simple success indication without animation
      const success = document.createElement("div");
      success.className = "fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md";
      success.textContent = "Message sent successfully!";
      document.body.appendChild(success);
      setTimeout(() => success.remove(), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding py-7">
      <div className="w-full h-full md:px-10 px-5">
        <div className="contact-title">
          <TitleHeader
            title="Get in Touch – Let's Connect"
            sub="💬 Have questions or ideas? Let's talk! 🚀"
          />
        </div>
        
        <div className="grid-12-cols mt-16">
          {/* Form Section */}
          <div className="xl:col-span-5">
            <div className="contact-form card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div className="contact-input transition-all duration-200">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    className="focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="contact-input transition-all duration-200">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="contact-input transition-all duration-200">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="transform hover:scale-[1.03] transition-transform"
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model Section - No animations here */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;