'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ExamForm from './ExamForm'
import ResultsTable from './ResultsTable'

const groups = [
  { name: '1-ci Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Fizika', 'Kimya', 'Biologiya'] },
  { name: '2-ci Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Tarix', 'Coğrafiya', 'Ədəbiyyat'] },
  { name: '3-cü Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Tarix', 'Ədəbiyyat', 'Xarici dil'] },
  { name: '4-cü Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Tarix', 'Coğrafiya', 'Xarici dil'] },
  { name: 'Buraxılış İmtahanı', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Xarici dil'] },
]

export default function Home() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)
  const [results, setResults] = useState<Record<string, number> | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleGroupClick = (groupName: string) => {
    setActiveGroup(activeGroup === groupName ? null : groupName)
    setResults(null)
  }

  const handleSaveResults = () => {
    if (results) {
      const resultsText = Object.entries(results)
        .map(([subject, score]) => `${subject}: ${score.toFixed(2)}`)
        .join('\n')
      const blob = new Blob([resultsText], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'imtahan_neticeleri.txt'
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  useEffect(() => {
    if (results && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [results])

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-white"
      >
        İmtahan Ballarını Hesablama
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-8 text-gray-300 max-w-2xl mx-auto"
      >
        Doğru, yanlış, açıq və qapalı suallar haqqında məlumat daxil edərək ballarınızı hesablaya bilərsiniz.
      </motion.p>
      
      {/* Horizontal navigation buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {groups.map((group, index) => (
          <motion.button
            key={group.name}
            whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGroupClick(group.name)}
            className={`bg-gradient-to-r ${
              activeGroup === group.name ? 'from-blue-600 to-purple-600' : 'from-blue-500 to-purple-500'
            } text-white font-bold py-2 px-4 rounded-lg text-center transition-all duration-300`}
          >
            {group.name}
          </motion.button>
        ))}
      </div>
      
      {/* Vertical content area */}
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ExamForm 
              subjects={groups.find(g => g.name === activeGroup)?.subjects || []} 
              onCalculate={setResults} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results area */}
      <AnimatePresence>
        {results && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <ResultsTable results={results} />
            <div className="flex justify-center space-x-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setResults(null)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Yenidən hesabla
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSaveResults}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Nəticələri yüklə
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

