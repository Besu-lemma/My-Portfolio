import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.png";
import auth from "@/assets/auth.png";
import home from "@/assets/home.jpg";
import home1 from "@/assets/home1.jpg";
import controller from "@/assets/controller.png";
import pin from "@/assets/pin.png";
const Projects = () => {
  const [activeProjectImages, setActiveProjectImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Furtu Construction Website",
      description:
        "A dynamic website for Furtu Construction company to showcase their services and projects with a clean and professional design.",
      image: project1,
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://furtuconstruction.com",
      githubUrl: "https://github.com/Besu-lemma/Furtuu",
      featured: true,
      isMobileApp: false,
    },
    {
      id: 2,
      title: "Ethio Exchange (In Development)",
      description:
        "A currency exchange platform under development to provide real-time exchange rates, conversion tools, and market analysis for Ethiopian currency and others.",
      image: project4,
      technologies: [
        "Flutter",
        "react",
        "tailwind css",
        "Dart",
        "Express js",
        "Node.js",
        "MongoDB",
      ],
      liveUrl: "http://ethioxchange.vercel.app/Home",
      githubUrl: "https://github.com/Besu-lemma/Ethio-Xchange",
      featured: false,
      isMobileApp: false,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A task management app that supports collaboration, task tracking, and productivity enhancement with intuitive UI and real-time updates.",
      image: project3,
      images: [project3], // example images
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "",
      githubUrl: "https://github.com/yourusername/task-management-app",
      featured: false,
      isMobileApp: true,
    },
    {
      id: 4,
      title: "Smart Irrigation App",
      description:
        "A smart irrigation mobile app integrated with IoT devices, providing soil moisture monitoring, local language support, and AI-based recommendations for Ethiopian farmers.",
      image: home,
      images: [home1, controller, auth, pin], // example images
      technologies: ["Flutter", "Dart", "Firebase", "IoT"],
      liveUrl: "",
      githubUrl: "https://github.com/Besu-lemma/Smart_Irrigation_app",
      featured: true,
      isMobileApp: true,
    },
  ];

  const handleLiveDemoClick = (project) => {
    if (project.isMobileApp && project.images?.length > 0) {
      setActiveProjectImages(project.images);
      setShowModal(true);
    } else if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and passion projects that demonstrate
            my skills in full-stack development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl overflow-hidden hover-lift group ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    size="sm"
                    className="group/btn"
                    onClick={() => handleLiveDemoClick(project)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(
                "https://github.com/Besu-lemma?tab=repositories",
                "_blank"
              )
            }
            className="hover-lift"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Modal for mobile app gallery */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-6">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">App Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeProjectImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-md w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
