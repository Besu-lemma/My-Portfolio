import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Code,
  Coffee,
  Heart,
  Zap,
  Award,
  Users,
  Clock,
  Star,
  User,
} from "lucide-react";

// Animated counter component
const AnimatedCounter = ({
  end,
  duration = 2,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, label: "Years Experience", value: 1, suffix: "+" },
    { icon: Users, label: "Projects Completed", value: 50, suffix: "+" },
    { icon: Clock, label: "Hours Coded", value: 17533, suffix: "+" },
    { icon: Star, label: "Client Rating", value: 4, suffix: "/5" },
  ];

  const interests = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Creating intuitive and delightful interfaces",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"
        />
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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-4"
          >
            <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 hover-lift md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center  p-6  bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all  duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="h-6 w-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 text-4xl"
            >
              🚀
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 text-3xl"
            >
              💡
            </motion.div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl relative">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Hi there! I'm a Computer Science graduate with a deep passion
                for turning ideas into digital solutions.
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  With a solid foundation in both theory and practice, I’ve
                  focused on building full-stack web applications using
                  technologies like React, Next.js, Node.js, MongoDB, and
                  Firebase. I love creating intuitive user interfaces backed by
                  efficient, scalable logic.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Outside of building apps, I’m constantly exploring new tools,
                  frameworks, and design principles. I enjoy participating in
                  tech projects, collaborating with others, and staying
                  up-to-date with the ever-evolving world of software
                  development.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  I believe great code is clean, maintainable, and impactful.
                  Whether it’s solving real-world problems or crafting seamless
                  user experiences, I’m always excited to learn, build, and
                  innovate.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 hover-lift glass"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block p-3 bg-gradient-to-r ${interest.color} rounded-lg mb-4 shadow-lg`}
                >
                  <interest.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {interest.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
