export default function HowItWorks() {
  const steps = [
    { title: "Add Project", description: "Add an Open Source Project to OpenSustain.tech" },
    { title: "Choose Donation", description: "Select a Donation Link on OpenClimate.fund" },
    { title: "Link PR", description: "Add the donation link to your Pull Request" },
    { title: "Fund Projects", description: "Donate to open source projects you're not associated with" }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">{index + 1}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}