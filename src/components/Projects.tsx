
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Logiciel pour la gestion de l'évènement 'La Folle Journée'",
      description: "Un logiciel permettant la consultation et gestion des différents compositeurs et salles de l'évènement.",
      tech: "C#, Entity Framework Core, SQL Server",
    },
    {
      title: "API REST",
      description: "API REST permettant la récupération de visites et de soins pour les applications d'une clinique.",
      tech: "Python, FastAPI, MySQL Workbench",
    },
    {
      title: "Planning Laboratoire de Test",
      description: "Un planning pour le laboratoire de Tests, avec plusieurs indicateurs concernant le retard et le cumul de pièces à tester. Disponible sur le Sharepoint de l'entreprise",
      tech: "MS Power BI, MS Power Automate, Excel, SharePoint",
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
