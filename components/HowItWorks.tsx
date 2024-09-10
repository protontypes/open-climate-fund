export default function HowItWorks() {
  const steps = [
    { title: "Add Project", description: "Add an Open Source Project to OpenSustain.tech" },
    { title: "Choose Donation", description: "Select a Donation Link on OpenClimate.fund" },
    { title: "Link PR", description: "Add the donation link to your Pull Request" },
    { title: "Fund Projects", description: "Donate to open source projects you're not associated with" }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-green-400">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg border border-green-400">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">{index + 1}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}