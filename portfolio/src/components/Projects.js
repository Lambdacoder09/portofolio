import React from 'react';
import data from '../../public/data json files/projects.json';

const Projects = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-2">{project.type}</p>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold">{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
