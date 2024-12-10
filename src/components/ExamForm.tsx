'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ExamFormProps {
  subjects: string[]
  onCalculate: (results: Record<string, number>) => void
}

export default function ExamForm({ subjects, onCalculate }: ExamFormProps) {
  const [formData, setFormData] = useState<Record<string, Record<string, number>>>({})

  const handleInputChange = (subject: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [subject]: {
        ...prev[subject],
        [field]: value === '' ? 0 : parseInt(value),
      },
    }))
  }

  const calculateScores = () => {
    const results: Record<string, number> = {}
    subjects.forEach((subject) => {
      const subjectData = formData[subject] || {}
      const score =
        (subjectData.correct || 0) * 2 +
        (subjectData.incorrect || 0) * -0.5 +
        (subjectData.open || 0) * 3 +
        (subjectData.closed || 0) * 1
      results[subject] = Math.max(0, Math.min(100, score))
    })
    onCalculate(results)
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); calculateScores() }} className="space-y-8">
      {subjects.map((subject, index) => (
        <motion.div
          key={subject}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">{subject}</h3>
          <div className="space-y-4">
            {['correct', 'incorrect', 'open', 'closed'].map((field) => (
              <div key={field}>
                <label htmlFor={`${subject}-${field}`} className="block text-sm font-medium text-gray-200 mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  type="number"
                  id={`${subject}-${field}`}
                  min="0"
                  onChange={(e) => handleInputChange(subject, field, e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white"
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
      >
        Hesabla
      </motion.button>
    </form>
  )
}

