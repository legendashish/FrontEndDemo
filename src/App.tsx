import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Loading from './pages/Loading'
import Verify from './pages/Verify'
import Editor from './pages/Editor'
import Overview from './pages/Overview'

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
