export default function Dashboard() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.sub}>Coming soon...</p>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0d0d0d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '36px',
    color: '#c9a84c',
    margin: 0,
  },
  sub: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
}
