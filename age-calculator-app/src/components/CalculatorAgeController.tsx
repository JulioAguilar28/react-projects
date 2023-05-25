import { useState } from 'react'
import InputView from './InputView'
import TextView from './TextView'
import moment from 'moment'

function useTimeDifference({ formattedDate }: { formattedDate: string }) {
  const now = moment()
  const targetDate = moment(formattedDate)

  const duration = moment.duration(targetDate.diff(now))

  return {
    days: Math.abs(duration.days()),
    months: Math.abs(duration.months()),
    year: Math.abs(duration.years())
  }
}

function useFormattedGivenDate() {
  const [dayState, setDay] = useState<{ value: string; error: boolean }>({
    value: '',
    error: false
  })
  const [monthState, setMonth] = useState<{ value: string; error: boolean }>({
    value: '',
    error: false
  })
  const [yearState, setYear] = useState<{ value: string; error: boolean }>({
    value: '',
    error: false
  })

  const setSafetyDay = (day: number) => {
    if (day < 0 || day > 31) {
      return setDay({ value: '', error: true })
    }

    return setDay({ value: day.toString(), error: false })
  }

  const setSafetyMonth = (month: number) => {
    if (month < 0 || month > 12) {
      return setMonth({ value: '', error: true })
    }

    return setMonth({ value: month.toString(), error: false })
  }

  const setSafetyYear = (year: number) => {
    if (year < 1970 || year > 3000) {
      return setYear({ value: '', error: true })
    }

    return setYear({ value: year.toString(), error: false })
  }

  const formattedDate =
    dayState.error || monthState.error || yearState.error
      ? ''
      : `${yearState.value}-${monthState.value}-${dayState.value}`

  return {
    formattedDate,
    setSafetyDay,
    setSafetyMonth,
    setSafetyYear,
    dayState,
    monthState,
    yearState
  }
}

function CalculatorAgeController() {
  const {
    dayState,
    monthState,
    yearState,
    setSafetyDay,
    setSafetyMonth,
    setSafetyYear,
    formattedDate
  } = useFormattedGivenDate()
  const { days, months, year } = useTimeDifference({ formattedDate })

  const handleDay = (day: number) => {
    setSafetyDay(day)
  }

  const handleMonth = (month: number) => {
    setSafetyMonth(month)
  }

  const handleYear = (year: number) => {
    setSafetyYear(year)
  }

  return (
    <div className="shadow drop-shadow shadow-light-grey rounded-br-[200px] rounded-[32px] w-[80%] h-[80%] p-8">
      <header className="flex gap-x-8">
        <InputView
          label={'Day'}
          error={dayState.error}
          errorLabel={'Must be a valid day'}
          onType={handleDay}
        />
        <InputView
          label={'Month'}
          error={monthState.error}
          errorLabel={'Must be a valid month'}
          onType={handleMonth}
        />
        <InputView
          label={'Year'}
          error={yearState.error}
          errorLabel={'Must be a valid year'}
          onType={handleYear}
        />
      </header>

      <section className="flex items-center justify-between mb-4">
        <span className="w-full h-0 border rounded border-light-grey"></span>

        <img
          className="w-16 h-auto bg-purple rounded-full p-4"
          src="/assets/images/icon-arrow.svg"
          alt="calculator icon"
        />
      </section>

      <section className="flex flex-col gap-y-6">
        <TextView time={year} label={'years'} />
        <TextView time={months} label={'months'} />
        <TextView time={days} label={'days'} />
      </section>
    </div>
  )
}

export default CalculatorAgeController
