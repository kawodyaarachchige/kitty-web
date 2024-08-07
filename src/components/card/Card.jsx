import PropTypes from "prop-types";

const Card = ({ imageUrl, title, description, link }) => {
    return (
        <div className="bg-white border-2 border-pink-700 shadow-lg overflow-hidden w-full max-w-xs transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl text-left">
            <div className="h-48 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
                <h3 className="text-2xl mb-2 text-gray-800 font-semibold">{title}</h3>
                <p className="text-base mb-5 text-gray-600 leading-relaxed">{description}</p>
                <a href={link} className="text-pink-700 no-underline font-semibold transition-colors duration-300 ease-in-out hover:text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
