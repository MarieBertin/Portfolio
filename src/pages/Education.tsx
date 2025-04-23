
/*import Layout from "@/components/Layout";

const Education = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-8">Education</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
*/
import Layout from "@/components/Layout";

const Education = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-8">Éducation</h1>

          <div className="space-y-6">
            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800">BTS SIO option SLAM</h2>
              <p className="text-sm text-gray-600">Lycée Carcouët - Nantes, 2023 - 2025</p>
              <p className="mt-2 text-gray-700">
                Développement web.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800">Année de Remise à niveau Scientifique (ARS) - DU</h2>
              <p className="text-sm text-gray-600">Université Catholique de l'Ouest, 2021 - 2022</p>
              <p className="mt-2 text-gray-700">
                Remise à niveau en Mathématiques, Sciences de la Vie et de la Terre, Physique - Chimie.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800">BAC Général</h2>
              <p className="text-sm text-gray-600">Lycée Estienne d'Orves - Carquefou, 2019 - 2021</p>
              <p className="mt-2 text-gray-700">
                Options Mathématiques et Sciences dde la Vie et de la Terre en Terminale.
                Option LLCE Anglais en Première
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800">CAP Pâtissier</h2>
              <p className="text-sm text-gray-600">Lycée Notre Dame du Roc - La Roche-sur-Yon, 2017 - 2019</p>
              <p className="mt-2 text-gray-700">
                Apprentissage de pâtes, biscuits, crèmes et entremets de bases.
              </p>
            </div>
            {/* Ajoute plus de sections si tu veux */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
