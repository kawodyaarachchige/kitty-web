import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-pink-500 text-white py-6 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com/your-username" className="text-white text-2xl hover:text-pink-200 transition transform hover:scale-110" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/your-username" className="text-white text-2xl hover:text-pink-200 transition transform hover:scale-110" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="#" className="text-white text-2xl hover:text-pink-200 transition transform hover:scale-110" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a href="#" className="text-white text-2xl hover:text-pink-200 transition transform hover:scale-110" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="#" className="text-white text-2xl hover:text-pink-200 transition transform hover:scale-110" aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
            <div className="mt-4">
                <p>&copy; {new Date().getFullYear()} Tharushi Kawodya. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
