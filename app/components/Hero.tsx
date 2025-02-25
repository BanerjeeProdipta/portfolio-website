const HeroSection = () => {
  return (
    <div className="md:mx-8 mt-6 mb-3 border border-stone-900/20 bg-black flex items-center flex-col md:flex-row">
      <div className="h-96 w-full space-y-8 flex flex-col items-center justify-center">
        <h1 className="font-medium text-4xl lg:text-6xl text-center tracking-wide leading-snug custom-border">
          Prodipta
          <br />
          Banerjee
        </h1>
        <p className="inline-block max-w-44 whitespace-nowrap text-center font-mono w-full px-2 py-0.5 text-xs rounded-full border border-primaryPurple bg-primaryPurple/20 text-primaryPurple">
          Software Engineer
        </p>

        <p className="font-medium text-sm custom-border text-lime-300">
          Crafting Code, Building Futures!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
