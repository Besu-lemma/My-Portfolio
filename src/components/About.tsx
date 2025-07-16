import { Code, Database, Smartphone, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Expert in React, Next.js, and TypeScript for building dynamic user interfaces",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Proficient in Node.js, Express, and MongoDB for scalable server solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile apps with Flutter and React Native",
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from concept to deployment and maintenance",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 1+ years of experience
            creating modern web applications. I specialize in the MERN stack and
            love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My interest in technology started back in high school and grew
                stronger during my Computer Science studies at Jimma University.
                Throughout university, I worked on real-world projects through
                internships, academic collaborations, and hands-on learning.
              </p>
              <p>
                I’ve built a smart irrigation system for Ethiopian farmers with
                support for local languages (Amharic and Afaan Oromo),
                AI-powered recommendations, and a mobile app. I also developed a
                product showcase site for Furtu Construction, a multilingual
                chat app, and an exchange rate tracker currently in progress.
              </p>
              <p>
                I earned 2nd place in a university hackathon for solving local
                delivery challenges and continue to focus on building tech that
                addresses real-world problems and brings impact to communities.
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
