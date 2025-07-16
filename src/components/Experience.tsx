import { CalendarDays, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using MERN stack. Mentoring junior developers and architecting microservices solutions.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupHub Inc",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, specializing in e-commerce platforms and SaaS applications.",
      achievements: [
        "Built 15+ production applications",
        "Reduced deployment time by 60%",
        "Improved code quality through testing"
      ],
      technologies: ["React", "Express", "MongoDB", "Next.js", "Flutter"]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Focused on creating responsive and interactive user interfaces for various client projects across different industries.",
      achievements: [
        "Delivered 20+ client projects",
        "Improved user engagement by 35%",
        "Implemented design systems"
      ],
      technologies: ["React", "JavaScript", "SASS", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the milestones that shaped my expertise 
            in full-stack development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative glass p-8 rounded-2xl hover-lift ml-0 md:ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;