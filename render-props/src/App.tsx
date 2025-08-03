import { useState } from "react"
import "./App.css"
import type Position from "./types/position"
import MouseTracker from "./components/MouseTracker"

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MouseTracker
        render={(position: Position) => {
          return (
            <p>
              mouse is at x: ({position.x}) - y: ({position.y})
            </p>
          )
        }}
      />
    </div>
  )
}

export default App
