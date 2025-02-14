import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with NextJs, TypeScript, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["NextJs", "TypeScript", "MongoDB"],
    github: "https://github.com/Mr-AsimGhaffar/nextjs-ecommerce-store",
  },
  {
    title: "Property Website",
    description:
      "A property search platform that allows users to search for properties, view detailed information, and analyze property trends powered by AI models",
    image: "/images/zameenDashboard.png",
    tags: ["ReactJs", "JavaScript", "Context Api", "Tailwind CSS"],
    github: "https://github.com/Mr-AsimGhaffar/project",
  },
  {
    title: "Rider Pro",
    description:
      "Developed a comprehensive Rent-A-Car platform that streamlines car rental and ridesharing services. The platform offers an intuitive user interface for viewing and booking",
    image: "/images/riderPro.jpg",
    tags: ["NextJs", "TypeScript", "TailwindCss", "Docker"],
    github: "https://github.com/Mr-AsimGhaffar/ueber_Pro",
  },
  {
    title: "BrainBash",
    description:
      "BrainBash is an interactive quiz app that allows users to play quizzes by selecting subjects and create their own quizzes.",
    image: "/images/science.png",
    tags: ["NextJs", "TypeScript", "TailwindCss"],
    github: "https://github.com/Mr-AsimGhaffar/BrainBashAdmin",
  },
  {
    title: "Hadith Chat",
    description:
      "Hadith Chat is an AI-powered platform where users can ask for any ahadis and receive accurate and context-aware responses. Designed to provide easy access to authentic Islamic teachings, Hadith Chat allows users to explore and inquire about hadiths, enhancing their knowledge and understanding",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    tags: ["Html", "Css"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-text-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
