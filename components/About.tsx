export default function About() {
  return (
    <section className="pb-12 pt-12 px-6 sm:px-8 lg:px-12 bg-silver-50 scroll-mt-32"
    id="about">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-600 mb-12 text-center">
            About Open<span className="text-green-500">Climate.fund</span>
          </h2>

          <div className="space-y-8 bg-glass shadow-glass rounded-3xl p-8 lg:p-12 hover:shadow-elevated transition-all duration-300">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-silver-600 font-medium">
                OpenClimate.fund is an initiative by {" "}
                <a href="https://opensustain.tech" className="text-primary-600 hover:text-green-500 transition-colors">
                  OpenSustain.tech
                </a>
                {" "}to support open source climate and sustainability projects.
                Open source projects are powering thousands of solutions in the
                climate and sustainability space. From tracking forest health to
                designing eco-friendly products, these tools help us build a
                more sustainable future. The best part on open source is that
                everyone can see how they work and help make them better.
              </p>

              <p className="text-lg text-silver-600 leading-relaxed">
                Many brilliant developers are creating these tools in their
                spare time. We believe it&apos;s time to support their work and
                help these projects grow. That&apos;s why we&apos;re building a
                new way to fund open source climate and sustainability projects.
              </p>

              <div className="my-12 border-l-4 border-primary-500 pl-6 py-2">
                <p className="text-xl text-primary-600 font-medium">
                  OpenClimate.fund connects climate-focused open source projects
                  with funding. It&apos;s simple: you help us discover great
                  projects, we help fund their development.
                </p>
              </div>

              <div className="bg-gradient-to-t from-azure-500/10 to-transparent rounded-2xl p-6 shadow-subtle backdrop-blur-xs">
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                  Join Our First Funding Round
                </h3>
                <p className="text-lg text-silver-600 leading-relaxed">
                  We&apos;re starting with $10,000 to support 100 projects with
                  $100 each. Here&apos;s how you can help: Add an open source
                  sustainability project to OpenSustain.tech, then pick another
                  listed project to receive funding (as long as it&apos;s not
                  your own). Once we review your contribution, we&apos;ll send
                  $100 to your chosen project through their preferred funding
                  platform.
                </p>
              </div>
              <p className="text-lg text-silver-600 leading-relaxed mt-8">
                We&apos;re creating a new model for funding open source climate
                and sustainability projects, and we&apos;d love you to be part
                of it. Want to support our next funding round? Reach out to{" "}
                <a
                  href="https://www.linkedin.com/in/michael-scheiwiller-72086a1a0/"
                  className="text-primary-600 hover:text-green-500 transition-colors"
                >
                  Michael
                </a>{" "}
                or{" "}
                <a
                  href="https://www.linkedin.com/in/tobias-augspurger/"
                  className="text-primary-600 hover:text-green-500 transition-colors"
                >
                  Tobias
                </a>
                .
              </p>
              <p className="text-lg text-silver-600 leading-relaxed mt-8">
                Read more on our{" "}
                <a // TODO: Double check this will be the correct link
                  href="https://opensustain.tech/blog/openclimatefund/"
                  className="text-primary-600 hover:text-green-500 transition-colors"
                  >
                  Blog post
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
