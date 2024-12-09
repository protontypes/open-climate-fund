import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-12 px-6 sm:px-8 lg:px-12" id="hero">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="relative rounded-3xl shadow-elevated p-12 overflow-hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Caspian_Sea_%28Unsplash%29.jpg"
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
              Fund Open Source in<br className="hidden sm:inline" />
              <span className="text-green-500">Climate & Sustainability</span>
            </h1>
            <p className="mt-6 text-xl text-silver-400 max-w-3xl">
              Contribute to OpenSustain.tech and support open source projects
              making a difference in our world.
            </p>
            <div className="mt-10 flex gap-4">
              <Link href="https://github.com/protontypes/open-sustainable-technology/blob/main/CONTRIBUTING.md#contributing-guide">
                <button
                  className="rounded-xl bg-primary-600 px-6 py-3 text-lg text-white 
                  shadow-subtle hover:shadow-elevated hover:bg-green-500
                  transition-all duration-300"
                >
                  Submit a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}