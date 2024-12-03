import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
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
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm text-silver-400">
              Empowering open source sustainability through innovative funding.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-400 text-sm">
            © {currentYear} OpenClimate.fund. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="https://opensustain.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-400 hover:text-primary-400 transition-colors text-sm"
            >
              Powered by OpenSustain.tech
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}