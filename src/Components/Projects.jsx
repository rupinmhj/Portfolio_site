import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import images from "../assets/images";
const Projects = () => {
  const projects = [
    {
      title: "Job Portal(Jobko)",
      description: "Developed a production-ready job portal adapted from the Jobko PWA HTML template, optimized for mobile-1st design",
      image: images.jobko,
      tech: ["React", "JavaScript", "Tailwind CSS", "Framer-motion", "Rest Api", "Jwt tokens"],
      github: "https://github.com/rupinmhj/Job-portal",
      live: "https://rupinjobportal.netlify.app/",
      featured: true
    },
    {
      title: "E commerce application",
      description: "Shofy, a front-end e-commerce app using React and framer-motion, mainly to practice state management and UI design",
      image: images.shofy,
      tech: ["React", "Tailwind CSS", "Framer-motion"],
      github: "https://github.com/rupinmhj/shofy-E-commerce",
      live: "https://shofyrupin2.netlify.app/",
      featured: true
    },

    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: images.portfolio,
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "Paste App",
      description: "A Paste App using React and Redux Toolkit to practice state management in real-world scenarios. The app allows users to create, edit, copy, and delete text snippets (pastes), similar to a lightweight notepad.",
      image: images.paste,
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/rupinmhj/Job-portal",
      live: "https://era-paste-app.netlify.app/",
      featured: false
    },

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="px-4 md:px-16 section-padding bg-[hsl(var(--section-bg))]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
            >
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="project-card overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </motion.div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hero-button"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Other Notable Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
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