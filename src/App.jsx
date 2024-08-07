import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/swiper.min.css';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import HeroSection from './sections/hero-section/Hero-section.jsx';
import AboutMeSection from './sections/about-section/About-section.jsx';
import ProjectsSection from './sections/project-section/Project-section.jsx';
import Contact from "./sections/contact/Contact.jsx";
import Blog from "./sections/blog/Blogs.jsx";
import Footer from "./sections/footer/Footer.jsx";
import GlobalStyle from "./GlobalStyles.jsx";
import Services from "./sections/service/Service.jsx";
import BlogSlider from "./sections/blogs/BlogSlider.jsx";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <GlobalStyle />
            <nav className="bg-white py-4 shadow-md fixed w-full z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="https://custom-doodle.com/wp-content/uploads/doodle/hello-kitty-waving/hello-kitty-waving-doodle.gif"
                            alt="Logo"
                            className="w-12 h-12 mr-2"
                        />
                        <Link to="hero" smooth={true} duration={500} className="text-pink-500 text-2xl no-underline">Tharu</Link>
                    </div>
                    <ul className="hidden md:flex space-x-5 list-none">
                        <li>
                            <Link to="hero" smooth={true} duration={500} className="text-gray-800 text-base no-underline hover:text-pink-700">Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className="text-gray-800 text-base no-underline hover:text-pink-700">About</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className="text-gray-800 text-base no-underline hover:text-pink-700">Projects</Link>
                        </li>
                        <li>
                            <Link to="Blog" smooth={true} duration={500} className="text-gray-800 text-base no-underline hover:text-pink-700">Blog</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="text-gray-800 text-base no-underline hover:text-pink-700">Contact</Link>
                        </li>
                    </ul>
                    <button className="md:hidden text-pink-500 text-2xl" onClick={handleNavToggle}>
                        <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-pink-200 shadow-lg transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-between items-center p-4">
                    <img
                        src="https://custom-doodle.com/wp-content/uploads/doodle/hello-kitty-waving/hello-kitty-waving-doodle.gif"
                        alt="Logo"
                        className="w-12 h-12"
                    />
                    <button
                        onClick={handleNavToggle}
                        className="text-pink-500 text-2xl"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="https://i.pinimg.com/originals/c2/ff/90/c2ff901705cfd06faa571c082de72076.gif"
                        alt="Decorative"
                        className="w-64 h-64"
                    />
                </div>
                <div className="flex flex-col items-center mt-6">
                    <ul className="space-y-4">
                        <li><Link to="hero" smooth={true} duration={500}
                                  className="text-gray-800 text-lg hover:text-pink-500">Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500}
                                  className="text-gray-800 text-lg hover:text-pink-500">About</Link></li>
                        <li><Link to="projects" smooth={true} duration={500}
                                  className="text-gray-800 text-lg hover:text-pink-500">Projects</Link></li>
                        <li><Link to="Blog" smooth={true} duration={500}
                                  className="text-gray-800 text-lg hover:text-pink-500">Blog</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}
                                  className="text-gray-800 text-lg hover:text-pink-500">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <section id="hero">
                <HeroSection/>
            </section>
            <section id="about">
                <AboutMeSection/>
            </section>
            <section>
                <Services/>
            </section>
            <section id="projects">
                <ProjectsSection />
            </section>
            <section id="Blog">
                <Blog />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;
