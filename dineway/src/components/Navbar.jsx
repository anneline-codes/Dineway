import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="Dineway Restaurant Solutions" style={styles.logo} />
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
    padding: '20px 40px',
    zIndex: 10,
  },
  logo: {
    height: '100px',
    objectFit: 'contain',
  },
}
