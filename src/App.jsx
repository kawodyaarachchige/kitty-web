import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Link } from 'react-scroll';
import HeroSection from './sections/hero-section/Hero-section.jsx';
import AboutMeSection from './sections/about-section/About-section.jsx';
import ProjectsSection from './sections/project-section/Project-section.jsx';

import Contact from "./sections/contact/Contact.jsx";
import Blog from "./sections/blog/Blogs.jsx";
import Footer from "./sections/footer/Footer.jsx";
import GlobalStyle from "./GlobalStyles.jsx";

function App() {
  return (
      <div>
          <GlobalStyle/>
          <nav className="bg-white py-4 shadow-md fixed w-full z-50">
              <div className="container mx-auto flex justify-between items-center">
                  <div className="flex items-center">
                      <img
                          src="https://custom-doodle.com/wp-content/uploads/doodle/hello-kitty-waving/hello-kitty-waving-doodle.gif"
                          alt="Logo"
                          className="w-12 h-12 mr-2"
                      />
                      <Link to="hero" smooth={true} duration={500}
                            className="text-pink-500 text-2xl no-underline">Tharu</Link>
                  </div>
                  <ul className="flex space-x-5 list-none">
                      <li>
                          <Link to="hero" smooth={true} duration={500}
                                className="text-gray-800 text-base no-underline hover:text-pink-700">Home</Link>
                      </li>
                      <li>
                          <Link to="about" smooth={true} duration={500}
                                className="text-gray-800 text-base no-underline hover:text-pink-700">About</Link>
                      </li>
                      <li>
                          <Link to="projects" smooth={true} duration={500}
                                className="text-gray-800 text-base no-underline hover:text-pink-700">Projects</Link>
                      </li>
                      <li>
                          <Link to="blog" smooth={true} duration={500}
                                className="text-gray-800 text-base no-underline hover:text-pink-700">Blog</Link>
                      </li>
                      <li>
                          <Link to="contact" smooth={true} duration={500}
                                className="text-gray-800 text-base no-underline hover:text-pink-700">Contact</Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <section id="hero">
              <HeroSection/>
          </section>
          <section id="about">
              <AboutMeSection/>
          </section>
          <section id="projects">
              <ProjectsSection/>
          </section>
          <section id="Blog">
              <Blog/>
          </section>
          <section id="contact">
              <Contact/>
          </section>
          <Footer/>
      </div>
  );
}

export default App;
