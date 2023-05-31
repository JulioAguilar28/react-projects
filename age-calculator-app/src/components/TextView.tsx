type Props = {
  time: number
  label: string
}

function TextView({ time, label }: Props) {
  const displayedTime = isNaN(time) ? '- -' : time

  return (
    <span className="font-bold text-7xl inline-flex gap-x-2">
      <p className="text-purple">{displayedTime}</p>
      <p>{label}</p>
    </span>
  )
}

export default TextView
