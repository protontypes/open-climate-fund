export default function Hero() {
  return (
    <section className="pt-32 pb-12 px-6 sm:px-8 lg:px-12" id="hero">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div
          className="bg-gradient-to-b from-azure-500/10 to-transparent 
          rounded-3xl shadow-elevated p-12 backdrop-blur-xs"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold 
            tracking-tight text-white-500 leading-tight"
          >
            Fund Open Source in<br className="hidden sm:inline" />
            <span className="text-green-500">Climate & Sustainability</span>
          </h1>
          <p className="mt-6 text-xl text-silver-400 max-w-3xl">
            Contribute to OpenSustain.tech and support open source projects
            making a difference in our world.
          </p>
        </div>
      </div>
    </section>
  );
}