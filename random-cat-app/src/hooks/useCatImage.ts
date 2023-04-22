import { useState, useEffect } from 'react'

const CAT_ENDPOINT_IMG_URL = 'https://cataas.com'

type CatImageResponse = {
  file: string
  url: string
}

/**
 *
 * @param fact The fact for searching an image
 * @returns image Url
 */
export function useCatImage({ fact }: { fact: string }) {
  const [imgUrl, setImgUrl] = useState<string>('')

  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(`${CAT_ENDPOINT_IMG_URL}/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then((response) => response.json())
      .then((data: CatImageResponse) => {
        setImgUrl(`${CAT_ENDPOINT_IMG_URL}/${data.url}`)
      })
  }, [fact])

  return { imgUrl }
}
