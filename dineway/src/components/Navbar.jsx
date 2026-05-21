import React from 'react'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <svg width="36" height="32" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="5" x2="18" y2="1" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="24" y1="5" x2="24" y2="0" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="30" y1="5" x2="30" y2="1" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 22 Q4 10 24 10 Q44 10 44 22 Z" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
          <line x1="2" y1="22" x2="46" y2="22" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 26 Q8 30 24 30 Q40 30 40 26" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        </svg>
        <div style={styles.logoText}>
          <span style={styles.brandName}>DINEWAY</span>
          <span style={styles.brandSub}>RESTAURANT SOLUTIONS</span>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '28px 40px',
    zIndex: 10,
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  logoText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  brandName: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '22px',
    fontWeight: '700',
    color: '#c9a84c',
    letterSpacing: '4px',
  },
  brandSub: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '9px',
    letterSpacing: '3px',
    color: '#c9a84c',
    opacity: 0.85,
  },
}
