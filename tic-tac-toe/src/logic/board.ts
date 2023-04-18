import { WINNER_COMBOS } from '../models/BoardModels'

/**
 * Module for Board Logic
 */

/**
 * Check the winner from the given `boardGame`
 */
export const checkWinner = (boardGame: any) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (boardGame[a] && boardGame[a] === boardGame[b] && boardGame[a] === boardGame[c])
      return boardGame[a]
  }

  return null
}

/**
 * Check if the given `boardGame` has finished
 */
export const checkEndGame = (boardGame: any) => boardGame.every((square: any) => square !== null)
