import { motion } from "framer-motion";

const categories = [
  {
    title: "🧠 Programming Languages",
    skills: ["C++", "Java", "Python"],
  },
  {
    title: "🌐 Web Technologies",
    skills: ["ReactJS", "Spring Boot", "HTML", "CSS"],
  },
  {
    title: "🛠️ Software & Tools",
    skills: ["Git", "Docker"],
  },
  {
    title: "🤝 Soft Skills",
    skills: [
      "Leadership quality",
      "Time Management",
      "Good communication",
      "Adaptability",
    ],
  },
];

const domainKnowledge = {
  title: "📚 Domain Knowledge",
  skills: [
    "Analysis",
    "Financial Knowledge",
    "Cybersecurity Awareness",
    "Risk Management",
    "Compliance",
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.45,
      type: "spring",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0f172a] text-[#f0f9ff] px-4 sm:px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-blue-400"
        >
          🎯 Skills
        </motion.h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...categories, domainKnowledge].map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="
                bg-[#1e293b]
                rounded-xl
                p-6
                shadow-lg
                border border-blue-400
                transition-all duration-300
                hover:border-blue-300
                hover:shadow-blue-400/40
              "
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400 border-b border-blue-600 inline-block">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-blue-500 text-white
                      px-3 py-1
                      rounded-md
                      text-xs sm:text-sm
                      font-semibold
                      cursor-pointer
                      transition-all
                      hover:scale-105
                      hover:bg-blue-300
                      hover:text-[#0f172a]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
