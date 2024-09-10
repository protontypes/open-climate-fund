export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="py-16 sm:py-24 bg-gray-900 text-white"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-green-400">
          Ready to Make a Difference?
        </h2>
        <a
          href="https://github.com/protontypes/open-sustainable-technology/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-gray-900 px-8 py-4 rounded-lg text-lg sm:text-xl font-semibold inline-block hover:bg-green-400 transition-colors"
        >
          Contribute to OpenSustain.tech
        </a>
      </div>
    </section>
  );
}