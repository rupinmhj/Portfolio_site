import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "#61DAFD", level: 75 },
    { name: "React", icon: SiReact, color: "#61DAFB", level: 75 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 70 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 70 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
    { name: "Framer Motion", icon: SiFigma, color: "#06B6F4", level: 90 },
    // { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 85 },
    // { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80 },
    { name: "Git", icon: SiGit, color: "#F05032", level: 75 },
    { name: "Python", icon: SiPython, color: "#F24E1E", level: 60 },
  ];

  return (
    <section id="skills" className="section-padding px-4 md:px-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="skill-card group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <skill.icon
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-2 w-full">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux-Toolkit",
              "JWT",
              "Shadcn",
              "OriginUI",
              "HyperUI",
              "Rest Api",
              "Framer-motion",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
