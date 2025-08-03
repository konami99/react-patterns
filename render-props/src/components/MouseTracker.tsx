import { useState } from "react"
import type Position from "../types/position"

interface MouseTrackerProps {
  render: (position: Position) => React.ReactNode
}

const MouseTracker = ({ render }: MouseTrackerProps) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <div style={{ width: "100%", height: "100%" }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  )
}

export default MouseTracker
