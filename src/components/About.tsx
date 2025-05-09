
const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="max-w-2xl">
            <p className="text-primary/80 leading-relaxed mb-6">
              Salut ! Je suis Marie, je suis passionnée par les plantes d'intérieur, et j'en ai partout chez moi! Depuis un an, je me suis lancée dans l'apprentissage du piano et, plus récemment, j'ai découvert l'escalade en bloc, un vrai défi pour moi !
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Mon parcours professionnel a été un peu sinueux. Initialement dans la pâtisserie, je me suis rapidement rendue compte que ce n'était pas mon domaine. J'ai donc décidé de me réorienter vers des études générales, avant de me plonger dans l'univers de l'informatique grâce à des amis qui travaillaient dans ce secteur. J'ai découvert le codage et, depuis, j'ai su que c'était là que je voulais évoluer.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Je travaille de manière autonome lorsque je sais exactement ce que je veux faire, mais je préfère les moments de collaboration lorsque j'ai besoin d'avis ou de soutien. On dit souvent que mes réactions sont drôles et que je suis quelqu'un d'à l'écoute, ce qui me pousse à vouloir toujours faire le bien autour de moi.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Quand je ne suis pas en train de coder ou de jongler avec mes plantes, j'adore me détendre avec un bon manga, en faisant du ukulele et piano, ou en jouant avec mon chien!
            </p>
          </div>
          <div className="relative h-full">
            <img
              src="/images/indoor_plants_for_the_home_shrubhub_blog.jpg"
              alt="Indoor plants"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
