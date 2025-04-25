
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


        <a
          href="/documents/TableauSynthese.pdf"
          target="_blank"
         rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow bg-gray-50 hover:bg-green-100 focus:outline-none"
        >
         <FileText className="text-red-600 flex-shrink-0" size={24} />
         <span className="text-xl font-semibold text-gray-800">
            Tableau de Synthèse
          </span>
        </a>

      </div>
      <div className="container mx-auto px-4 flex items-center gap-2 mb-4">


        <a
          href="/documents/CV.pdf"
          target="_blank"
         rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow bg-gray-50 hover:bg-red-100 focus:outline-none"
        >
         <FileText className="text-red-600 flex-shrink-0" size={24} />
         <span className="text-xl font-semibold text-gray-800">
            CV
          </span>
        </a>

      </div>

    </Layout>
  );
};

export default Other;
