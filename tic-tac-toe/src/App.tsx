import React, { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState<Array<string>>(new Array(9).fill('X'))

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <section className="game">
        {board.map((square, index) => (
          <div key={index} className="square">
            {square}
          </div>
        ))}
      </section>

      <section className="turn">
        <div className="square">X</div>
      </section>
    </main>
  )
}

export default App
