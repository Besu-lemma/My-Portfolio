import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "Next.js", level: 92, category: "Framework" },
    { name: "Flutter", level: 80, category: "Mobile" },
    { name: "Express", level: 87, category: "Backend" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "GraphQL", level: 75, category: "API" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Docker", level: 72, category: "DevOps" },
    { name: "Git", level: 90, category: "Tools" }
  ];

  const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'glass hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-6 rounded-xl hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                <div
                  className="progress-bar h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 50}ms`
                  }}
                />
              </div>
              
              <div className="mt-2">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[
              "React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Flutter",
              "Express", "GraphQL", "AWS", "Docker", "Git", "JavaScript"
            ].map((tech) => (
              <div
                key={tech}
                className="glass p-4 rounded-lg hover:opacity-100 hover:glow-primary transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;