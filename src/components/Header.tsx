import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="nav-header container mx-auto max-w-[1400px] px-4 py-5 border-b-2 border-gray-200 flex items-center justify-between">
      <Link to="/" className="logo flex items-center gap-3">
        <div className="logo-icon w-12 h-12 rounded-full border-4 border-purple-700 text-purple-700 grid place-items-center font-bold">Fi</div>
        <div className="logo-text">
          <h2 className="text-xl text-gray-800 font-semibold">ReferU.AI</h2>
          <p className="text-gray-500 text-xs tracking-wide">SMARTER RESULTS</p>
        </div>
      </Link>
      <nav className="nav-links flex gap-4 text-sm">
        <Link className="text-gray-600 hover:text-purple-700 px-3 py-2" to="/">Home</Link>
        <Link className="text-gray-600 hover:text-purple-700 px-3 py-2" to="/loading">Loading</Link>
        <Link className="text-gray-600 hover:text-purple-700 px-3 py-2" to="/editor">Editor</Link>
        <Link className="text-gray-600 hover:text-purple-700 px-3 py-2" to="/overview">Overview</Link>
      </nav>
    </header>
  )
}
