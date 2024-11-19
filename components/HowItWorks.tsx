'use client';
import { FaPlus, FaHandHoldingUsd, FaMoneyBillWave } from 'react-icons/fa';
import { FaCodePullRequest } from 'react-icons/fa6';

export default function HowItWorks() {
  const steps = [
    {
      title: "Add Project",
      description: "Add an Open Source Project to OpenSustain.tech",
      link: "https://github.com/protontypes/open-sustainable-technology/blob/main/CONTRIBUTING.md#contributing-guide",
      icon: <FaPlus className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Choose Donation",
      description: "Select a Donation Link on OpenClimate.fund",
      link: "https://openclimate.fund/",
      icon: <FaHandHoldingUsd className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Link PR",
      description: "Add the donation link to your opened Pull Request",
      icon: <FaCodePullRequest className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Fund Projects",
      description: "After your added Project is accepted, the donation is executed",
      icon: <FaMoneyBillWave className="w-8 h-8 text-primary-600" />
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black-800 mb-12 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} 
              className="group bg-glass backdrop-blur-sm shadow-card rounded-2xl p-8
                hover:shadow-elevated transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-primary-50 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-black-800 mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-silver-400 leading-relaxed">
                {step.description}
              </p>
              {step.link && (
                <a 
                  href={step.link}
                  className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}