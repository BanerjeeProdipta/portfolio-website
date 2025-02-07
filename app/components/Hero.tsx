import Model from './3D';

const HeroSection = () => {
  return (
    <div className="md:mx-8 mt-6 border border-stone-900/20 bg-black flex items-center flex-col md:flex-row">
      <div className="h-96 w-full relative">
        <Model />
        <div className="absolute top-0 my-6 px-9 space-y-4">
          <h1 className="font-medium text-2xl md:text-6xl tracking-wide leading-snug custom-border">
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
    </div>
  );
};

export default HeroSection;
