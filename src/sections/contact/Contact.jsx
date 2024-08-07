import { useState } from 'react';

const Contact = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleClick = () => {
        window.location.href = 'mailto:your-email@example.com';
    };

    return (
        <div className="bg-gray-50 text-pink-600 text-center py-12 px-6">
            <h1 className="text-4xl font-bold mb-8">SAY HELLO</h1>
            <div className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-6">
                <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">TELEGRAM</a>
                <a href="https://www.viber.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">VIBER</a>
                <a href="https://www.whatsapp.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">WHATSAPP</a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">LINKEDIN</a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">INSTAGRAM</a>
                <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">BEHANCE</a>
                <a href="https://www.dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">DRIBBBLE</a>
            </div>
            <div
                className={`w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center text-1xl text-black cursor-pointer mt-10 mx-auto transition transform ${hover ? 'bg-white text-pink-400' : ''}`}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                { hover ?'Send an email' :  <span>🦇</span>}
            </div>
        </div>
    );
};

export default Contact;
