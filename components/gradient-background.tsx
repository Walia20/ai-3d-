'use client'

export function GradientBackground() {
  return (
    <div className="fixed inset-0 bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-[20%] right-[25%] w-[300px] h-[300px] bg-purple-700/20 rounded-full blur-[128px]" />
    </div>
  )
}

