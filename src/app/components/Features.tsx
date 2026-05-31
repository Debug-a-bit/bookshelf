export default function Features() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      
      {/* Section header */}
      <p className="text-center text-sm font-medium text-amber-600 mb-12">
        Everything GoodReads should have been
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-6 md:flex-row">
        
        <div className="flex flex-1 flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
          <span className="text-4xl mb-4">📚</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Track</h3>
          <p className="text-sm text-gray-500">Track every book you've read, are reading, or want to read</p>
        </div>

        <div className="flex flex-1 flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
          <span className="text-4xl mb-4">⭐</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
          <p className="text-sm text-gray-500">Rate and review books honestly, no fake ratings</p>
        </div>

        <div className="flex flex-1 flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
          <span className="text-4xl mb-4">👥</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect</h3>
          <p className="text-sm text-gray-500">Follow friends and see what they're reading</p>
        </div>

      </div>
    </section>
  )
}