"use client";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaSearch, FaRegHandPointRight, FaTwitter, FaLinkedin, FaReddit, FaYCombinator } from "react-icons/fa";
import { FaMastodon } from "react-icons/fa6";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Add a Project",
      description:
        "Find an missing impactful open source project in climate and sustainability and add it to OpenSustain.tech. We'll guide you through the process!",
      details: "It's easy - just open a pull request with the project details",
      link: "https://github.com/protontypes/open-sustainable-technology/blob/main/CONTRIBUTING.md#contributing-guide",
      icon: <FaCodePullRequest className="w-8 h-8 text-primary-600" />,
    },
    {
      title: "2. Pick Another Project", 
      description:
        "Choose any project from OpenSustain.tech to receive 100€ (except your own - spread the love!)",
      details:
        "Browse all projects which provide a funding possibility with the link below.",
      link: "https://opensustain.tech/spreadsheet/",
      icon: <FaSearch className="w-8 h-8 text-primary-600" />,
    },
    {
      title: "3. We Send the Money",
      description:
        "Once your pull request is merged, we'll donate €100 to your chosen project via Open Source Collective or GitHub Sponsors",
      details:
        "Share your contribution with <strong>#OpenClimateFund</strong> and help us grow the community! Your voice matters in supporting open source in sustainability.",
      socialShare: {
        text: "I just helped fund open source climate projects through @OpenClimateFund! Join me in supporting sustainable technology! #OpenClimateFund",
        link: "https://openclimate.fund",
      },
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
            Here&apos;s What You Can Do
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
                  <p className="text-md text-silver-400" dangerouslySetInnerHTML={{ __html: step.details }}></p>
                </div>

                <div className="flex items-center justify-between">
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

                  {step.socialShare && (
                    <div className="flex gap-4">
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(step.socialShare.link)}&title=${encodeURIComponent(step.socialShare.text)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-green-500 font-medium group"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://mastodon.social/share?text=${encodeURIComponent(
                          step.socialShare.text + " " + step.socialShare.link
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-green-500 font-medium group"
                      >
                        <FaMastodon className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://reddit.com/submit?url=${encodeURIComponent(step.socialShare.link)}&title=${encodeURIComponent(step.socialShare.text)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-green-500 font-medium group"
                      >
                        <FaReddit className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          step.socialShare.text
                        )}&url=${encodeURIComponent(step.socialShare.link)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-green-500 font-medium group"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}