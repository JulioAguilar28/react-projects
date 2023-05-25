import type { ChangeEvent } from 'react'

type Props = {
  label: string
  min?: number
  max?: number
  error?: boolean
  errorLabel?: string
  onType?: (args: number) => void
}

function InputView({ label, min, max, error, errorLabel, onType }: Props) {
  const textColor = error ? 'text-light-red' : 'text-smokey-grey'
  const borderColor = error ? 'border-light-red' : 'border-light-grey'

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onType) onType(parseInt(e.currentTarget.value))
  }

  return (
    <label className="flex flex-col">
      <p className={`uppercase font-bold ${textColor}`}>{label}</p>
      <input
        type="number"
        min={min}
        max={max}
        className={`${borderColor} text-3xl bold border w-32 rounded-xl p-4 outline-none`}
        onChange={handleChange}
      />
      {error && errorLabel && <span className="font-bold mt-2 text-light-red">{errorLabel}</span>}
    </label>
  )
}

export default InputView
