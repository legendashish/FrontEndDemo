import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Loading from './pages/Loading'
import Verify from './pages/Verify'
import Editor from './pages/Editor'
import Overview from './pages/Overview'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  )
}
