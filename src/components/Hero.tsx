
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-secondary">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Salut! Moi c'est Marie Bertin
        </h1>
        <h2 className="text-xl md:text-2xl text-primary/80 mb-8">
          Developpeuse
        </h2>
        <p className="max-w-lg mx-auto text-primary/60 leading-relaxed">
          Développeuse en BTS SIO I create beautiful and functional web experiences with modern technologies.
        </p>
      </div>
    </section>
  );
};

export default Hero;
