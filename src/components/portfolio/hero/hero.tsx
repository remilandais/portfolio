import * as React from "react"

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className="text-white text-8xl font-bold">
      <h1>HELLO WORLD</h1>
    </div>
  )
}
