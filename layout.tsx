'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <html lang="az">
      <body className={`${inter.className} bg-[#05061a]`}>
        <div className="fixed inset-0 z-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                x: mousePosition.x + Math.random() * 200 - 100,
                y: mousePosition.y + Math.random() * 200 - 100,
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 10,
                mass: Math.random() * 0.5 + 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            />
          ))}
        </div>
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

