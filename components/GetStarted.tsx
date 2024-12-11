'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <section
      className="pb-12 pt-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-silver-50 to-white"
      id="get-started"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-glass backdrop-blur-md shadow-elevated rounded-3xl p-12 text-center overflow-hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/The_Caspian_Sea_%28NESDIS_2015-09-15%29.png"
            alt="Caspian Sea Satellite View"
            fill
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Join our community of contributors and help drive sustainable
              technology forward through open source collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://opensustain.tech/contributing/"
                target="_blank"
                className="rounded-xl bg-primary-600 px-8 py-4 text-lg text-white 
                  shadow-subtle hover:bg-green-500 
                  transition-all duration-300 flex items-center gap-3"
              >
                Submit A Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}