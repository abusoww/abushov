'use client'

import { motion } from 'framer-motion'

interface ResultsTableProps {
  results: Record<string, number>
}

export default function ResultsTable({ results }: ResultsTableProps) {
  const totalScore = Object.values(results).reduce((sum, score) => sum + score, 0)

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md backdrop-blur-sm w-full"
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">Nəticələr</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-purple-900 bg-opacity-50">
            <th className="px-4 py-2 text-left text-white">Fənn</th>
            <th className="px-4 py-2 text-right text-white">Bal</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results).map(([subject, score], index) => (
            <motion.tr
              key={subject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-700"
            >
              <td className="px-4 py-2 text-gray-300">{subject}</td>
              <td className="px-4 py-2 text-right text-gray-300">{score.toFixed(2)}</td>
            </motion.tr>
          ))}
          <motion.tr
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Object.keys(results).length * 0.1 }}
            className="font-bold"
          >
            <td className="px-4 py-2 text-white">Ümumi bal</td>
            <td className="px-4 py-2 text-right text-white">{totalScore.toFixed(2)}</td>
          </motion.tr>
        </tbody>
      </table>
    </motion.div>
  )
}

