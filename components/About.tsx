export default function About() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-silver-50">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-glass shadow-glass rounded-2xl p-8 
            hover:shadow-elevated transition-all duration-300">
            <h3 className="text-3xl font-semibold tracking-tight text-black-800">
              About OpenClimate.fund
            </h3>
            <p className="mt-6 text-lg text-silver-400 leading-relaxed">
              OpenClimate.fund is an innovative funding experiment designed to boost incentives for contributing to OpenSustain.tech. 
            </p>
            <p className="mt-4 text-lg text-silver-400 leading-relaxed">
              Our mission is to empower and support open source projects that are driving positive change in sustainability and climate action.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}