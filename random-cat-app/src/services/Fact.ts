const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'

type FactResponse = {
  fact: string
  length: number
}

/**
 * Get a random fact from CATAAS Api
 * @returns random cat fact
 */
export const getRandomFact = async (): Promise<string> => {
  const response = await fetch(CAT_ENDPOINT_FACT_URL)
  const data: FactResponse = await response.json()
  return data.fact
}
