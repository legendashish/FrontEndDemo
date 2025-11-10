import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/verify'), 1200)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="container mx-auto max-w-[900px] px-4 my-12"
    >
      <h3 className="text-center text-2xl font-medium text-purple-700 mb-8">Previewing Document 👁️</h3>
      <div className="bg-white border-2 border-gray-200 rounded-xl p-16 flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-purple-700 animate-spin" />
        <div className="mt-4 text-purple-700 text-lg font-medium">Generating your document...</div>
      </div>
    </motion.main>
  )
}
