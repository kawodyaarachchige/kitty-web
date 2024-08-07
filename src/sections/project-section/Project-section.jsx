import projectImage from '../../assets/project.jpeg';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One. This project involved building a web application using React and Node.js.',
        imageUrl: projectImage,
        link: '#',
        githubLink: '#',
        demoLink: '#',
        viewDate: 'July 2024',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two. This project was focused on designing a user-friendly interface with Figma and implementing it with HTML/CSS.',
        imageUrl: projectImage,
        link: '#',
        githubLink: '#',
        demoLink: '#',
        viewDate: 'August 2024',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three. This project included developing a REST API with Express and integrating it with a frontend application.',
        imageUrl: projectImage,
        link: '#',
        githubLink: '#',
        demoLink: '#',
        viewDate: 'September 2024',
    },
];

const ProjectsSection = () => {
    return (
        <div className="py-16 px-4 bg-gray-100">
            <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center">Projects</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex gap-2 mb-2">
                                <a href={project.githubLink} className="bg-pink-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-pink-700 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={project.demoLink} className="bg-pink-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-pink-700 transition-colors" target="_blank" rel="noopener noreferrer">Demo</a>
                            </div>
                            <p className="text-gray-500 text-sm">Viewed: {project.viewDate}</p>
                            <a href={project.link} className="block mt-4 text-pink-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
