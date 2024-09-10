export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-16 sm:py-24">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">Fund Open Source <br className="hidden sm:inline" /><span className="text-green-400">Sustainability Projects</span></h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">Contribute to OpenSustain.tech and support open source projects making a difference in our world.</p>
        <a href="#get-started" className="bg-green-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold inline-block hover:bg-green-400 transition-colors">Get Started</a>
      </div>
    </section>
  )
}