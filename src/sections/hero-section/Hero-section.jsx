import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import coverImg from '../../assets/cover.jpeg';

const HeroSection = () => {

    useEffect(() => {
        // Lock scrolling on mount
        document.body.style.overflow = 'hidden';

        return () => {
            // Cleanup by unlocking scrolling
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleArrowClick = () => {
        // Unlock scrolling when the arrow is clicked
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="relative flex flex-col justify-center items-center h-screen px-5 py-10 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: `url(${coverImg})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
            <div className="relative z-20 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-pink-400">Tharu</span><span className="text-pink-600">K</span> Arachchige
                </h1>
                <div className="bg-transparent py-4 px-6 rounded-md mb-6">
                    <p className="text-lg text-gray-200 leading-relaxed">
                        I'm a Software Engineering student, Full Stack Developer, and Designer.
                    </p>
                </div>
                <Link to="about" smooth={true} duration={500} className="inline-block mt-5 cursor-pointer text-pink-400 text-lg hover:text-pink-300 transition" onClick={handleArrowClick}>
                    <div className="flex flex-col items-center">
                        <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-pink-400 mb-2"></div>
                        GO DOWN
                    </div>
                </Link>
            </div>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-400 transition-transform transform hover:scale-110">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-400 transition-transform transform hover:scale-110">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-400 transition-transform transform hover:scale-110">
                    <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-400 transition-transform transform hover:scale-110">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
