'use client'

export default function Error() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Something went wrong</h1>
      <a href="/" style={{ color: '#0f766e', fontWeight: 600, textDecoration: 'underline' }}>Return to Home</a>
    </div>
  )
}
