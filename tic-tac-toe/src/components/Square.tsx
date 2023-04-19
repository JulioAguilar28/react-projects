import React from 'react'

type Props = {
  index?: number
  children: React.ReactNode
  onSquareSelected?: (index: number) => void
  isSelected?: boolean
}

const Square = ({ index, children, isSelected = false, onSquareSelected }: Props) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const clickHandler = () => {
    if (onSquareSelected) onSquareSelected(index ?? -1)
  }

  return (
    <div className={className} onClick={clickHandler}>
      {children}
    </div>
  )
}

export default Square
