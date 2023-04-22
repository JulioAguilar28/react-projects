import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/Fact'

/**
 * Return a cat fact and get a new cat handler
 * @returns fact, refreshCatHandler
 */
export function useCatFact() {
  const [fact, setFact] = useState<string>('')

  const refreshFactHandler = async () => {
    const randomFact = await getRandomFact()
    setFact(randomFact)
  }

  useEffect(() => {
    refreshFactHandler()
  }, [])

  return { fact, refreshFactHandler }
}
