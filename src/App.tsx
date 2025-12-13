import * as React from "react"
import { Hero } from "./components/portfolio/hero/hero"

const App: React.FC = () => {
  return (
    <div className="min-h-screen 
     flex items-center justify-center bg-gray-900">
      <Hero />
    </div>
  )
}

export default App
