'use client';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <section className="pb-12 pt-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-silver-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-glass backdrop-blur-md shadow-elevated rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-600 mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-silver-400 max-w-2xl mx-auto mb-12">
            Join our community of contributors and help drive sustainable technology forward through open source collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="https://github.com/protontypes/open-sustainable-technology/blob/main/CONTRIBUTING.md#contributing-guide"
              target="_blank"
              className="rounded-xl bg-primary-600 px-8 py-4 text-lg text-white 
                shadow-subtle hover:bg-green-500 
                transition-all duration-300 flex items-center gap-3"
            >
              <FaGithub className="w-6 h-6" />
              Submit Your Project
            </Link>
            <Link 
              href="#how-it-works"
              className="inline-block hover:text-primary-600 text-green-500 font-medium 
                transition-all duration-300"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}