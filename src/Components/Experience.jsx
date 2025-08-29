import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
  {
    type: "work",
    title: "Junior Frontend Developer",
    company: "Kantipur Infotech",
    location: "New Baneshwor, Kathmandu",
    period: "April 2024 – Present",
    description:
      "Contributing to the development of scalable web applications with modern frontend frameworks. Collaborating closely with designers and backend developers to deliver production-ready solutions.",
    achievements: [
      "Developed and optimized responsive UI components using React and Tailwind CSS",
      "Improved performance and accessibility across multiple projects",
      "Collaborated in building internal tools that streamlined development workflow",
    ],
  },
  {
    type: "internship",
    title: "Frontend Developer Intern",
    company: "Kantipur Infotech",
    location: "New Baneshwor, Kathmandu",
    period: "Jan 2024 – March 2024",
    description:
      "Worked as part of the frontend team to create pixel-perfect and mobile-first user interfaces. Gained hands-on experience in React, API integration, and project collaboration.",
    achievements: [
      "Built responsive web pages from Figma designs",
      "Implemented reusable components that reduced code duplication",
      "Assisted in integrating REST APIs for dynamic data rendering",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",
    college: "Vedas College",
    location: "Lalitpur, Nepal",
    period: "2021 – 2025",
    description:
      "Studied computer science fundamentals with a focus on software engineering, web development",
    achievements: [
      "Completed major projects in React",
    
    ],
  },
];


  return (
    <section id="experience" className="section-padding px-4 md:px-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="skill-card"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      {item.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-accent" />
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === 'work' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {item.type === 'work' ? 'Experience' : 'Education'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-3">{item.company}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hero-button"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;