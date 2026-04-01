export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.instantcoiflorida.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 1.0 },
  ]
}
