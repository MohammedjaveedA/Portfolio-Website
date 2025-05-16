import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-container">
        
                <div className="socials">
                    <div className="icon">
                        <a href="https://github.com/MohammedjaveedA" target='_blank' rel="noopener noreferrer">
                            <FaGithub style={{height:25, width:25}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/mohammed-javeed-a-0a454b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin style={{height:25, width:25}} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Mohammed Javeed A. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
