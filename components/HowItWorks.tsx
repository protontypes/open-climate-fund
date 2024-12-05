"use client";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaSearch, FaRegHandPointRight } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Add a Project",
      description:
        "Find an open source project in the climate and sustainability space and add it to OpenSustain.tech. We'll guide you through the process!",
      details: "It's easy - just open a pull request with the project details",
      link: "https://github.com/protontypes/open-sustainable-technology/blob/main/CONTRIBUTING.md#contributing-guide",
      icon: <FaCodePullRequest className="w-8 h-8 text-primary-600" />,
    },
    {
      title: "2. Pick Another Project",
      description:
        "Choose any project from OpenSustain.tech to receive €100 (except your own - spread the love!)",
      details:
        "Browse through amazing projects and pick one you'd like to support",
      link: "https://opensustain.tech/spreadsheet/", // TODO: Add link to only the funding spreadsheet
      icon: <FaSearch className="w-8 h-8 text-primary-600" />,
    },
    {
      title: "3. We Send the Money",
      description:
        "Once we check everything's good, we'll send €100 to your chosen project through GitHub Sponsors or Open Source Collective",
      details:
        "That's it! You've helped two projects: one by adding it to our list, another by getting it funded",
      icon: <FaRegHandPointRight className="w-8 h-8 text-primary-600" />,
    },
  ];

  return (
    <section
      className="pb-12 pt-12 px-6 sm:px-8 lg:px-12 scroll-mt-32"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-600 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-silver-600">
            Three simple steps to help fund open source climate projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-glass backdrop-blur-sm shadow-card rounded-2xl p-8 
                hover:shadow-elevated transition-all duration-300 animate-scale-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary-50 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-green-500 mb-4">
                {step.title}
              </h3>

              <p className="text-lg text-silver-400 leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="mt-auto">
                <div className="bg-azure-500/10 rounded-xl p-4 mb-4">
                  <p className="text-md text-silver-400">{step.details}</p>
                </div>

                {step.link && (
                  <a
                    href={step.link}
                    className="inline-block text-primary-600 hover:text-green-500 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show me →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
