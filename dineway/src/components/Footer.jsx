import React from 'react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Dineway Restaurant Solutions. All rights reserved.</p>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#0a0a0a',
    borderTop: '1px solid #222',
    padding: '20px',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '12px',
    color: '#666',
    letterSpacing: '0.5px',
  },
}
