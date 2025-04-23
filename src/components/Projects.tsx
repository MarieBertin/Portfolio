
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript.",
      tech: "React, TypeScript, Tailwind",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with a focus on user experience.",
      tech: "Next.js, Prisma, PostgreSQL",
    },
    {
      title: "Project Three",
      description: "A real-time chat application with modern features.",
      tech: "React, Firebase, WebSockets",
    },
  ];

  return (
    <section className="py-20 bg-secondary" id="projects">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-primary mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-primary/60">
                  {project.description}
                </CardDescription>
                <div className="mt-4 text-sm text-primary/40">
                  {project.tech}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
