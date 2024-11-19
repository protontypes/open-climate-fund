import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaMastodon } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const footerLinks = {
  //   Product: [
  //     { name: "About", href: "#about" },
  //     { name: "How It Works", href: "#how-it-works" },
  //     { name: "Get Started", href: "#get-started" },
  //   ],
  //   Resources: [
  //     { name: "Documentation", href: "https://docs.openclimate.fund" },
  //     { name: "OpenSustain.tech", href: "https://opensustain.tech" },
  //     {
  //       name: "GitHub",
  //       href: "https://github.com/protontypes/open-climate-fund",
  //     },
  //   ],
  //   Legal: [
  //     { name: "Privacy Policy", href: "/privacy" },
  //     { name: "Terms of Service", href: "/terms" },
  //   ],
  // };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/protontypes/",
    },
    {
      name: "Mastodon",
      icon: FaMastodon,
      href: "https://mastodon.social/@opensustaintech",
    },
  ];

  return (
    <footer className="bg-black-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-12 border-b border-black-400">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/OpenClimatefund_paths.svg"
                alt="OpenClimate.fund Logo"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-6 text-silver-400 text-lg">
              Empowering open source sustainability through innovative funding.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver-400 hover:text-primary-400 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links TODO: Work this out with correct links */}
          {/* {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-silver-200 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-silver-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-400 text-sm">
            © {currentYear} OpenClimate.fund. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="https://protontypes.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-400 hover:text-primary-400 transition-colors text-sm"
            >
              Powered by protontypes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}