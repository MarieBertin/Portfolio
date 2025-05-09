
import Layout from "@/components/Layout";
import { Link2 } from "lucide-react";

const Veille = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-8">Veille Technologique</h1>

          {/* Power BI Section */}
          <div className="mb-12 p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/images/powerbi-logo.png" 
                alt="Power BI Logo" 
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-2xl font-semibold">Microsoft Power BI</h2>
            </div>
            <p className="mb-4 text-gray-700">
              Je me documente régulièrement sur Microsoft Power BI pour rester à jour avec les dernières fonctionnalités et bonnes pratiques.
            </p>
            <a 
              href="https://learn.microsoft.com/fr-fr/power-bi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Link2 className="h-4 w-4" />
              <span>MS Power BI documentation</span>
            </a>
          </div>

          {/* Power Automate Section */}
          <div className="mb-12 p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/images/powerautomate-logo.png" 
                alt="Power Automate Logo" 
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-2xl font-semibold">Microsoft Power Automate</h2>
            </div>
            <p className="mb-4 text-gray-700">
              Je me documente régulièrement sur Microsoft Power Automate pour rester à jour avec les dernières fonctionnalités et bonnes pratiques.
            </p>
            <a 
              href="https://learn.microsoft.com/fr-fr/power-automate/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Link2 className="h-4 w-4" />
              <span>MS Power Automate documentation</span>
            </a>
          </div>
          {/* AI */}
          <div className="mb-12 p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/images/IA.png" 
                alt="image AI" 
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-2xl font-semibold">Les biais algorithmiques dans l'intelligence artificielle : un reflet de nos sociétés ?</h2>
            </div>
            <p className="mb-4 text-gray-700">
              Je me renseigne régulièrement sur les biais algorithmiques dans l'intelligence artificielle, pour mieux comprendre comment ils peuvent influencer nos sociétés et nos décisions, mais aussi comment les réduire.

            </p>
            {/*
            <a 
              href="https://learn.microsoft.com/fr-fr/power-bi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Link2 className="h-4 w-4" />
              <span>MS Power BI documentation</span>
            </a>
          */}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Veille;
