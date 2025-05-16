import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie-App",
      description: "A React Native Expo movie app for browsing, searching, and viewing movie details",
      tags: ["React Native Expo", "TMDB API", "Appwrite"],
      image: "/images/movie-app.png",
      link: "https://github.com/MohammedjaveedA/React-Native-Projects/tree/main/movie-app"
    },
    {
      id: 2,
      title: "Restate App",
      description: "A React Native Expo real estate app for browsing properties with ease",
      tags: ["React Native Expo", "Google OAuth", "Appwrite"],
      image: "/images/restate-app.png",
      link: "https://github.com/MohammedjaveedA/React-Native-Projects/tree/main/restate"
    },
    {
      id: 3,
      title: "Currency Converter",
      description: "A currency converter built with React and Tailwind CSS offering exchange rates and a sleek user interface.",
      tags: ["React", "Tailwind CSS", "API"],
      image: "/images/currency.png",
      link: "https://github.com/MohammedjaveedA/Pratice-Projects/tree/main/ReactJS/currency-converter"
    },
  ];

  return (
    <section id="projects" className="bg-black text-white mt-30 py-20">
      <div className="mx-auto max-w-7xl flex-col justify-center items-center flex">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300">Here are some of my recent works</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full px-4 sm:px-0">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-xl overflow-hidden border border-gray-800 h-full flex flex-col w-full sm:max-w-md
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 group"
            >
              <div className="h-55 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/800x600?text=Project+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 bg-gradient-to-t from-black via-black/90 to-transparent flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300
                      group-hover:bg-gray-700 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300
                  group-hover:translate-x-1 transition-transform duration-300"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;