import img from '../../assets/hero.png'
import { FaReact, FaNodeJs, FaCss3Alt, FaFigma, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { useEffect, useState } from "react";

const AboutMeSection = () => {
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        let count = 0;
        const targetCount = 15;
        const increment = 1;
        const interval = 200;

        const timer = setInterval(() => {
            count += increment;
            setProjectCount(count);
            if (count >= targetCount) {
                clearInterval(timer);
                setProjectCount(targetCount);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <img
                    src={img}
                    alt="Profile"
                    className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-pink-600 shadow-lg"
                />
                <h2 className="text-4xl font-bold text-pink-600 mb-4">About Me</h2>
                <p className="text-gray-700 text-lg mb-12">
                    Hello! I'm Tharushi, a passionate software engineer and designer. I specialize in full-stack
                    development with a keen eye for design, aiming to create user-friendly and innovative solutions.
                    With experience in various technologies including React, Node.js, and Tailwind CSS, I'm excited to
                    build impactful web applications.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8 w-full">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Skills</h3>
                    <div className="overflow-hidden relative">
                        <div className="whitespace-nowrap animate-marquee transition-transform duration-10000">
                            <div className="flex space-x-6 items-center gap-10">
                                <div className="flex flex-col items-center">
                                    <FaReact className="text-5xl text-blue-500 mb-2"/>
                                    <span className="text-gray-700">React</span></div>
                                <div className="flex flex-col items-center">
                                    <FaNodeJs className="text-5xl text-green-600 mb-2"/>
                                    <span className="text-gray-700">Node.js</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaCss3Alt className="text-5xl text-blue-600 mb-2"/>
                                    <span className="text-gray-700">Tailwind CSS</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaFigma className="text-5xl text-pink-500 mb-2"/>
                                    <span className="text-gray-700">UI/UX Design</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaGitAlt className="text-5xl text-red-500 mb-2"/>
                                    <span className="text-gray-700">Git</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaDatabase className="text-5xl text-orange-600 mb-2"/>
                                    <span className="text-gray-700">Databases</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
                    <div className="w-full md:w-2/5 mb-8 md:mb-0">
                        {/*============*/}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Projects</h3>
                            <div className="flex flex-col items-center">
                                <div className="text-4xl font-bold text-pink-600 mb-2 animate-pulse">
                                    {projectCount} <span className="text-gray-700">Projects</span>
                                </div>
                                <p className="text-gray-700">
                                    I have worked on a variety of projects, ranging from web applications to design
                                    systems. My portfolio includes both completed and ongoing projects.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5">

                        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Hire Me</h3>
                            <p className="text-gray-700 mb-4">
                                I’m always open to discussing new projects or opportunities. Feel free to reach out to
                                me through the contact form on my website.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
