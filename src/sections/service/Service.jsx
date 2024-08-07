import React from 'react';

const servicesData = [
    {
        title: "UI/UX Designing",
        description: "Creating user-centered designs with a focus on both usability and aesthetics. I use tools like Figma and Adobe XD to craft engaging interfaces.",

    },
    {
        title: "Frontend Development",
        description: "Building interactive and responsive websites using modern technologies such as React, Tailwind CSS, and JavaScript. I ensure a seamless user experience across all devices.",

    },
    {
        title: "Backend Development",
        description: "Developing robust backend systems using Node.js, Express, and databases like MongoDB. I focus on building scalable and secure server-side applications.",

    },
    {
        title: "Web Designing",
        description: "Designing visually appealing and functional websites that align with your brand identity. I create designs that are not only attractive but also optimized for user engagement.",

    }
];
const Services = () => {
    return (
        <section className="min-h-screen bg-gray-100 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center mb-24 bg-gray-200">
                <div className="mr-4">
                    <img
                        className="block rounded-full w-21 h-21 object-cover"
                        src="https://media1.giphy.com/media/xxGV74weXIjVnnmONP/giphy.gif?cid=6c09b9520dp3gdzxuzyo44f9yxc2jpr29msn8dazs8hbpcy1&amp;ep=v1_internal_gif_by_id&amp;rid=giphy.gif&amp;ct=s"
                        alt="Service Icon"
                    />
                </div>
                <div>
                    <h1 className="text-pink-600 text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl leading-snug">
                        What Can I Do For You
                    </h1>
                </div>
            </div>
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {servicesData.map((service, index) => (
                    <div key={index}
                         className="relative bg-white p-10 overflow-hidden group rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div
                            className={`absolute inset-0 transition-transform duration-600 ease-in-out ${
                                service.position === "bottom-right" ? "clip-path-bottom-right" :
                                    service.position === "bottom-left" ? "clip-path-bottom-left" :
                                        service.position === "top-right" ? "clip-path-top-right" :
                                            "clip-path-top-left"
                            }`}
                        />
                        <div className="relative z-10">
                            <h2 className="capitalize text-pink-600 mb-4 text-2xl xl:text-3xl font-semibold">
                                {service.title}
                            </h2>
                            <p className="text-gray-700 group-hover:text-pink-400 transition-colors duration-800">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
