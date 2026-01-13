import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: "spring" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[70vh] bg-[#0f172a] text-[#f0f9ff] px-6 py-12 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring" }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
          style={{ color: "#60a5fa" }} // blue-400 heading
        >
          👩‍💻 About Me
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-blue-400 space-y-6"
        >
          <p className="text-base md:text-lg leading-7 text-[#f1f5f9]">
            Hello! I’m{" "}
            <span className="text-blue-300 font-semibold">Dharniha.S</span>, a passionate and motivated developer focused on creating modern, efficient, and visually compelling web applications. I enjoy tackling new challenges, both independently and collaboratively, and am committed to writing clean, maintainable code.
          </p>

          <p className="text-base md:text-lg leading-7 text-[#60a5fa]">
            Skilled in{" "}
            <span className="text-blue-300 font-medium">ReactJS, Java, and Spring Boot</span>, I specialize in full-stack development that combines user-friendly design with robust backend logic. I have hands-on experience building e-commerce platforms similar to coupon websites, where I implemented features like product listings, user authentication, discount systems, and seamless payment integrations.
          </p>

          <p className="text-base md:text-lg leading-7 text-[#f1f5f9]">
            Beyond coding, I value effective communication, adaptability, and a growth mindset. I continuously seek opportunities to learn emerging technologies and improve my craft.
          </p>

          <p className="text-base md:text-lg leading-7 text-[#60a5fa]">
            I’m excited to contribute to impactful projects, collaborate with talented teams, and create solutions that deliver real value to users and businesses alike. I thrive in fast-paced environments, enjoy problem-solving, and am always eager to innovate and optimize for the best user experience.
          </p>
        </motion.div>

        {/* What I Do: Three small containers with hover effects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-5 text-center">
            What I Do
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            {[
              {
                title: "Frontend Development",
                description:
                  "Build responsive and interactive web interfaces using ReactJS, Tailwind CSS, and modern UI frameworks.",
              },
              {
                title: "Backend Development",
                description:
                  "Design and develop scalable APIs and backend logic with Java, Spring Boot, and RESTful services.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Create user-friendly designs focusing on seamless experiences and intuitive navigation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-1 bg-[#1e293b] p-5 rounded-2xl shadow-xl border border-blue-400 transition-all duration-300 hover:scale-105 hover:border-blue-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#cbd5e1] leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
