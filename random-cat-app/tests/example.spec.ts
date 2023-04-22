import { test, expect } from '@playwright/test'
import type { PlaywrightTestArgs } from '@playwright/test'

const CAT_ENDPOINT_IMG_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows random fact and image', async ({ page }: PlaywrightTestArgs) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByTestId('fact')
  const img = await page.getByTestId('img')

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(CAT_ENDPOINT_IMG_URL)).toBeTruthy()
})
