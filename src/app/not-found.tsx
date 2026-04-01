import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found — Sunshine State Insured',
}

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Page Not Found</h1>
      <p style={{ marginBottom: '1.5rem', color: '#555' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#0f766e', fontWeight: 600, textDecoration: 'underline' }}>Return to Home</a>
    </div>
  )
}
