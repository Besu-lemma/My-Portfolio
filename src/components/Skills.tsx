import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Skill icons mapping
const skillIcons: { [key: string]: string } = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "📘",
  "Tailwind CSS": "🎨",
  "Vue.js": "💚",
  JavaScript: "🟨",
  "Node.js": "🟢",
  Python: "🐍",
  "Express.js": "🚀",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  GraphQL: "🔗",
  Git: "📝",
  Docker: "🐳",
  AWS: "☁️",
  Figma: "🎯",
  Jest: "🧪",
  Webpack: "📦",
};

// Interactive skill card component
const SkillCard = ({
  skill,
  index,
  categoryIndex,
  isInView,
}: {
  skill: any;
  index: number;
  categoryIndex: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl"
          >
            {skillIcons[skill.name] || "💻"}
          </motion.span>
          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {skill.name}
          </span>
        </div>
        <motion.span
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="text-gray-500 dark:text-gray-400 text-sm font-semibold"
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        {/* Background glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"
        />

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
            ease: "easeOut",
          }}
          className="relative h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
        >
          {/* Animated shine effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />

          {/* Skill level indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              duration: 0.3,
              delay: categoryIndex * 0.2 + index * 0.1 + 1.5,
            }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="text-2xl"
            >
              🚀
            </motion.div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Technologies
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Here are the technologies and tools I work with to bring ideas to
            life.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                activeCategory === categoryIndex
                  ? "ring-2 ring-blue-500 ring-opacity-50"
                  : ""
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall skill summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring
              new tools, frameworks, and best practices to stay at the forefront
              of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
