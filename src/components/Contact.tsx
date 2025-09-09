
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Contactez-moi</h2>
        <p className="text-primary/60 mb-8 max-w-md mx-auto">
        Je suis disponible pour collaborer sur vos projets ou répondre à vos questions. Parlons ensemble de ce que nous pourrions créer.        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:marie.bertin0905@gmail.com" className="text-primary hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com/MarieBertin" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/marie-bertin-534693296/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
