// BlogSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import SwiperCore, { Pagination, EffectFade } from 'swiper';

SwiperCore.use([Pagination, EffectFade]);

const slides = [
  {
    imgSrc: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp",
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    link: "#"
  },
  {
    imgSrc: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp",
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    link: "#"
  },
  {
    imgSrc: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp",
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    link: "#"
  }
];

const BlogSlider = () => (
  <div className="relative max-w-4xl mx-auto my-8 bg-white p-6 rounded-xl shadow-lg">
    <Swiper
      spaceBetween={30}
      effect="fade"
      loop
      pagination={{ clickable: true }}
      className="h-96"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex items-center">
          <div className="flex-none w-80 h-80 bg-gradient-to-br from-orange-400 to-red-600 overflow-hidden rounded-xl shadow-lg">
            <img src={slide.imgSrc} alt="" className="object-cover w-full h-full opacity-0 transition-opacity duration-300" />
          </div>
          <div className="flex-1 p-6">
            <span className="block text-gray-500 mb-2">{slide.date}</span>
            <div className="text-2xl font-bold text-gray-900 mb-4">{slide.title}</div>
            <div className="text-gray-600 mb-6">{slide.text}</div>
            <a href={slide.link} className="inline-flex bg-gradient-to-br from-orange-400 to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90">
              READ MORE
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="absolute bottom-4 right-4">
      {/* Pagination for Swiper */}
    </div>
  </div>
);

export default BlogSlider;
