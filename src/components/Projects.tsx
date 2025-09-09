
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Logiciel pour la gestion de l'évènement 'La Folle Journée'",
      description: "Un logiciel permettant la consultation et gestion des différents compositeurs et salles de l'évènement.",
      tech: "C#, Entity Framework Core, SQL Server",
      githubUrl: "https://github.com/MarieBertin/SIO2BERTINMarie_MusicAtoutV2",
    },
    {
      title: "API REST",
      description: "API REST permettant la récupération de visites et de soins pour les applications d'une clinique.",
      tech: "Python, FastAPI, MySQL Workbench",
      githubUrl: "https://github.com/MarieBertin",
    },
    {
      title: "Planning Laboratoire de Test",
      description: "Un planning pour le laboratoire de Tests, avec plusieurs indicateurs concernant le retard et le cumul de pièces à tester. Disponible sur le Sharepoint de l'entreprise",
      tech: "MS Power BI, MS Power Automate, Excel, SharePoint"
    },
  ];

  return (
    <section className="py-20 bg-secondary" id="projects">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-primary mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => project.githubUrl ? window.open(project.githubUrl, '_blank') : null}
              style={{ cursor: project.githubUrl ? 'pointer' : 'default' }}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-primary/60">
                  {project.description}
                </CardDescription>
                <div className="mt-4 text-sm text-primary/40">
                  {project.tech}
                </div>
                {project.githubUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
