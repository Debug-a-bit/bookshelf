export default function AISection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-center text-sm font-medium text-amber-600 mb-12">
        Powered by AI
      </p>
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
        Books picked just for you
      </h2>
      <p className="text-center text-sm text-gray-500 mb-12">
        Based on your reading history and preferences
      </p>
      <div className="flex flex-col items-center text-center rounded-2xl text-white bg-gray-900 p-10 max-w-xl mx-auto">
        <span className="text-4xl mb-4">🤖</span>
        <h3 className="text-lg font-semibold text-white mb-2">
          Your personal reading assistant
        </h3>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
          Discover More
        </button>
      </div>
    </section>
  );
}
