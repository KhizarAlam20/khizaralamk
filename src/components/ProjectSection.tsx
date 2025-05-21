import React from 'react'

const projects = [
  {
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&h=400&fit=crop',
    title: 'Aero Landing page design',
    description: 'This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.',
    link: '#'
  },
  {
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=600&h=400&fit=crop',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website to showcase my work and skills as a creative developer.',
    link: '#'
  }
];

export default function ProjectSection() {
  return (
    <section className="py-12">
      <div className="w-full max-w-lg mx-auto">
        <h2 className="w-full mb-8 text-2xl font-bold text-left font-body">
        Featured projects—built to impress 😎
        </h2>
        <div className="flex flex-col gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="w-full p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full border border-gray-200 rounded-xl"
                  style={{ aspectRatio: '16/9', maxHeight: 300 }}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold font-body">{project.title}</h3>
              <p className="mb-4 text-gray-700 font-body">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center px-5 py-2 font-medium transition bg-gray-100 rounded-full font-body hover:bg-gray-200"
              >
                View Project <span className="ml-2 text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
