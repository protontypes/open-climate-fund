import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-12 px-6 sm:px-8 lg:px-12" id="hero">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="relative rounded-3xl shadow-elevated p-12 overflow-hidden">
          <Image
            src="Caspian_Sea_croped-min.jpg"
            alt="Caspian Sea"
            fill
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
          <div className="relative z-10">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-semibold 
              tracking-tight text-white-500 leading-tight"
            >
              Find and Fund <br className="hidden sm:inline" />
              Open Source in <br className="hidden sm:inline" />
              <span className="text-green-500">Climate & Sustainability</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}