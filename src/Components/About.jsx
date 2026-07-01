import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Bolt, Users, Palette, Rocket } from "lucide-react";
const features = [
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description:
      "Writing maintainable and reusable React components with TypeScript and modern best practices.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Building responsive, intuitive, and visually appealing interfaces using React and Tailwind CSS.",
  },
  {
    icon: Bolt,
    title: "High Performance",
    description:
      "Optimizing React apps for speed, efficiency, and seamless user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with designers, backend developers, and teams to deliver robust web applications.",
  },
];
import images from "../assets/images";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume-rupin.pdf";
    link.download = "rupinCv.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="section-padding px-4 md:px-16 bg-[hsl(var(--section-bg))]"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate frontend developer dedicated to crafting
            responsive, user-friendly, and visually engaging web experiences. I
            focus on writing clean, maintainable code and bringing designs to
            life with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-top ">
          {/* Left: Image/Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto ">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden ">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ">
                  {/* <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 "></div> */}
                  <img src={images.profile} alt="" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Frontend Developer & Creative Problem Solver
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As a frontend developer, I focus on creating seamless,
                user-friendly interfaces with React, JavaScript, and modern web
                technologies. My goal is to craft digital experiences that are
                not only functional but also visually engaging.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I’m away from the screen, I enjoy learning new
                technologies, building side projects, and sharing my journey
                with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-background/50 border border-border/50"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6"
            >
              <button
                className="hero-button px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                   text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl 
                   transition-transform duration-300 ease-in-out "
                onClick={handleDownload}
              >
                Download Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
