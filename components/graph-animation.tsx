'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const GraphAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const points = useRef<number[]>([])
  const targetPoints = useRef<number[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Initialize points
    points.current = Array(50).fill(0).map(() => Math.random() * 50 + 25)
    targetPoints.current = Array(50).fill(0).map(() => Math.random() * 50 + 25)

    const updateTargets = () => {
      targetPoints.current = targetPoints.current.map(() => Math.random() * 50 + 25)
      setTimeout(updateTargets, 3000)
    }

    const animate = () => {
      if (!canvas || !ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      points.current = points.current.map((point, i) => {
        return point + (targetPoints.current[i] - point) * 0.1
      })

      // Draw grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)'
      ctx.lineWidth = 0.5

      // Vertical grid lines
      for (let x = 0; x <= canvas.width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal grid lines
      for (let y = 0; y <= canvas.height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw line
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)'
      ctx.lineWidth = 2
      ctx.moveTo(0, canvas.height - points.current[0])

      // Create smooth curve
      for (let i = 0; i < points.current.length - 1; i++) {
        const xc = ((i + 1) * canvas.width) / points.current.length
        const yc = canvas.height - points.current[i + 1]
        ctx.lineTo(xc, yc)
      }
      ctx.stroke()

      // Draw glow effect
      ctx.shadowColor = 'rgba(139, 92, 246, 0.4)'
      ctx.shadowBlur = 10
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)'
      ctx.lineWidth = 4
      ctx.stroke()

      // Reset shadow
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    // Set canvas size
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()
    updateTargets()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          transform: 'perspective(1000px) rotateX(60deg) scale(1.5) translateY(-20%)',
          transformOrigin: 'center center' 
        }}
      />
    </motion.div>
  )
}

export default GraphAnimation

