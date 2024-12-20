'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card } from '@/components/ui/card'

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
}

export function FloatingCard({ children, className }: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    
    setPosition({ x: x * 20, y: y * -20 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      animate={{
        rotateX: position.y,
        rotateY: position.x,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ perspective: 1000 }}
    >
      <Card className="relative bg-black/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-colors">
        {children}
      </Card>
    </motion.div>
  )
}

