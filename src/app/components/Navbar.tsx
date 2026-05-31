export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-xl font-semibold tracking-tight text-gray-900">
          Folio
        </span>

        {/* Middle links */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Home</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Discover</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Clubs</a>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Sign in</a>
          <a href="#" className="text-sm bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700">
            Sign up
          </a>
        </div>

      </div>
    </nav>
  )
}