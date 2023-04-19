import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import { GameStatus, Turn } from './models/BoardModels'
import * as GameLogic from './logic/board'
import './App.css'

export type BoardGame = Array<Turn>

function App() {
  const [board, setBoard] = useState<BoardGame>(new Array(9).fill(''))
  const [turn, setTurn] = useState<Turn>(Turn.X)
  const [winner, setWinner] = useState<Turn | null>(null)
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.NoWinner)

  const shouldDisplayTurns = !winner && gameStatus !== GameStatus.Tie

  const resetGameHandler = () => {
    setBoard(new Array(9).fill(''))
    setTurn(Turn.X)
    setWinner(null)
    setGameStatus(GameStatus.NoWinner)
  }

  const updateBoardHandler = (index: number) => {
    /**
     * validate if the given position is not selected
     * or if the game has a winner
     */
    if (board[index] || winner) return

    // display the selected turn with the current turn
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // update the current turn
    setTurn(() => (turn === Turn.X ? Turn.O : Turn.X))

    // check if there is a winner in the board game
    const newWinner = GameLogic.checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else {
      const newGameStatus = GameLogic.checkEndGame(newBoard) ? GameStatus.Tie : GameStatus.NoWinner
      setGameStatus(newGameStatus)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGameHandler}>Reset the game</button>

      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} onSquareSelected={updateBoardHandler}>
            {square}
          </Square>
        ))}
      </section>

      {shouldDisplayTurns && (
        <section className="turn">
          <Square isSelected={turn === Turn.X}>{Turn.X}</Square>
          <Square isSelected={turn === Turn.O}>{Turn.O}</Square>
        </section>
      )}

      {winner && <h1>The winner is {winner}!</h1>}
      {gameStatus === GameStatus.Tie && <h1>This is a tie game!</h1>}
    </main>
  )
}

export default App
