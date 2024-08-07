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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">SAY HELLO</h1>
            <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-6">
                <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">TELEGRAM</a>
                <a href="https://www.viber.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">DISCORD</a>
                <a href="https://www.whatsapp.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">WHATSAPP</a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">LINKEDIN</a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">INSTAGRAM</a>
                <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors mx-2">X</a>
            </div>
            <div
                className={`w-20 h-20 md:w-24 md:h-24 bg-pink-400 rounded-full flex items-center justify-center text-xs md:text-xl text-black cursor-pointer mt-8 md:mt-10 mx-auto transition-transform ${hover ? 'bg-white text-pink-400' : ''}`}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                { hover ? 'Send an email' : <img src='https://media3.giphy.com/media/MBmjxPvh18biwibx1G/giphy.gif?cid=6c09b952cmbyo3fhjwmkiey8zzyvtj1ai0nv31wfnef0hs37&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' alt="Send an email" className="w-16 md:w-20 h-auto" /> }
            </div>
        </div>
    );
};

export default Contact;
