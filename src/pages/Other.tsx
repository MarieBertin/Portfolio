
import Layout from "@/components/Layout";
import { FileText } from "lucide-react";

const Other = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-8">Other</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center gap-2 mb-4">
  <FileText className="text-red-600" />
  <a
    href="/documents/TableauSynthese.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
  >
    Tableau de Synthèse
  </a>
</div>

<div className="container mx-auto px-4 flex items-center gap-2">
  <FileText className="text-red-600" />
  <a
    href="/documents/CV_MIAGE.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-red-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
  >
    CV
  </a>
</div>
    </Layout>
  );
};

export default Other;
