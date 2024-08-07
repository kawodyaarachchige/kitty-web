import img from '../../assets/hero.png';
import { FaReact, FaNodeJs, FaCss3Alt, FaFigma, FaGitAlt, FaDatabase, FaJava, FaPython, FaHtml5, FaBootstrap, FaAutoprefixer } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiPostman, SiVisualstudio, SiIntellijidea, SiSwift } from 'react-icons/si';
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

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="relative w-48 h-48 mb-8 md:mb-0 md:mr-8 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full animate-spin"></div>
                    <img
                        src="https://i.gifer.com/origin/1c/1c29154636f73295ad5fe84068c7a180.gif"
                        alt="Profile"
                        className="relative w-48 h-48 rounded-full object-cover shadow-lg z-10"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-pink-600 mb-2">About Me</h2>
                    <p className="text-gray-700 text-lg mb-12">
                        Hello! I'm Tharushi, a passionate software engineer and designer. I specialize in full-stack
                        development with a keen eye for design, aiming to create user-friendly and innovative solutions.
                        With experience in various technologies including React, Node.js, and Tailwind CSS, I'm excited to
                        build impactful web applications.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="mb-2">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Skills</h3>
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll whitespace-nowrap space-x-6">
                            <div className="flex flex-col items-center">
                                <FaReact className="text-5xl text-blue-500 mb-2"/>
                                <span className="text-gray-700">React</span>
                            </div>
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
                            <div className="flex flex-col items-center">
                                <FaJava className="text-5xl text-red-600 mb-2"/>
                                <span className="text-gray-700">Java</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiSwift className="text-5xl text-orange-500 mb-2"/>
                                <span className="text-gray-700">Swift</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaPython className="text-5xl text-blue-400 mb-2"/>
                                <span className="text-gray-700">Python</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiJavascript className="text-5xl text-yellow-500 mb-2"/>
                                <span className="text-gray-700">JavaScript</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaHtml5 className="text-5xl text-orange-500 mb-2"/>
                                <span className="text-gray-700">HTML</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaCss3Alt className="text-5xl text-blue-500 mb-2"/>
                                <span className="text-gray-700">CSS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiMysql className="text-5xl text-blue-600 mb-2"/>
                                <span className="text-gray-700">MySQL</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiPostman className="text-5xl text-orange-500 mb-2"/>
                                <span className="text-gray-700">Postman</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaBootstrap className="text-5xl text-purple-600 mb-2"/>
                                <span className="text-gray-700">Bootstrap</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaAutoprefixer className="text-5xl text-green-600 mb-2"/>
                                <span className="text-gray-700">AutoCAD</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiIntellijidea className="text-5xl text-blue-600 mb-2"/>
                                <span className="text-gray-700">IntelliJ IDEA</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiVisualstudio className="text-5xl text-blue-600 mb-2"/>
                                <span className="text-gray-700">VS Code</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/5">
                    <div className="">
                        <h3 className="text-2xl font-semibold text-pink-600 mb-4">Get In Touch</h3>
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
</section>
)
    ;
};

export default AboutMeSection;
