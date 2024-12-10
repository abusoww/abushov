
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ExamForm from '../components/ExamForm'
import ResultsTable from '../components/ResultsTable'

const subjects = ['Azərbaycan dili', 'Riyaziyyat', 'Fizika', 'Kimya', 'Biologiya']

export default function FirstGroup() {
  const [results, setResults] = useState<Record<string, number> | null>(null)

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

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-blue-800"
      >
        1-ci Qrup İmtahan Balları Hesablama
      </motion.h1>
      {results ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <ResultsTable results={results} />
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setResults(null)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Yenidən hesabla
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveResults}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Nəticələri yüklə
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <ExamForm subjects={subjects} onCalculate={setResults} />
      )}
    </div>
  )
}

