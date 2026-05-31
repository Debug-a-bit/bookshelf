export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
      
      {/* Tag line */}
      <span className="text-sm font-medium text-amber-600 mb-4">
        Your reading life, reimagined
      </span>

      {/* Main headline */}
      <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
        Your next great read
        <br />
        awaits.
      </h1>

      {/* Subheading */}
      <p className="text-xl text-gray-500 max-w-xl mb-10">
        Track every book, discover what to read next, and share 
        your reading life with people you trust.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <a href="#" className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700">
          Get started free
        </a>
        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Browse books →
        </a>
      </div>

    </section>
  )
}