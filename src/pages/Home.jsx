function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          AI Translator & Generator
        </h1>

        <p className="text-xl mb-8 max-w-2xl">
          A modern web application built with React, Tailwind CSS and API
          integration. Translate text instantly and generate random strings
          with a clean user experience.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/translator"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Open Translator
          </a>

          <a
            href="/generator"
            className="bg-purple-900 px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Open Generator
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;