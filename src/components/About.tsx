import { Code, Database, Smartphone, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React, Next.js, and TypeScript for building dynamic user interfaces"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Proficient in Node.js, Express, and MongoDB for scalable server solutions"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile apps with Flutter and React Native"
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment and maintenance"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            modern web applications. I specialize in the MERN stack and love turning 
            complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my journey as a self-taught developer, driven by curiosity and 
                passion for technology. Over the years, I've worked with startups and 
                established companies, building everything from e-commerce platforms 
                to complex data visualization tools.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date 
                with the latest technologies. When I'm not coding, you'll find me 
                contributing to open source projects or mentoring fellow developers.
              </p>
              <p>
                My goal is to create digital experiences that not only look great 
                but also provide real value to users and businesses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl hover-lift group"
              >
                <div className="mb-4">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;