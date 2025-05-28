// src/pages/Projects.jsx

export default function Projects() {
    const projectList = [
      { title: 'Portfolio Website', description: 'A personal portfolio site built with React and TailwindCSS.' },
      { title: 'E-commerce Platform', description: 'A simple e-commerce front-end with product listings and cart features.' },
      { title: 'Blog System', description: 'A responsive blog site using Markdown and static generation.' },
    ];
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  