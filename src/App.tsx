export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-8 rounded-xl shadow-md bg-white max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight">referu.ai</h1>
        <p className="mt-2 text-slate-600">Your new React + Vite app with Tailwind CSS is ready.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a className="text-sky-600 hover:underline" href="https://vite.dev" target="_blank" rel="noreferrer">Vite Docs</a>
          <span className="text-slate-400">•</span>
          <a className="text-sky-600 hover:underline" href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
        </div>
      </div>
    </main>
  )
}
