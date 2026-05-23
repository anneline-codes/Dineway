import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>

        {/* Brand col */}
        <div style={styles.col}>
          <img src={logo} alt="Dineway" style={styles.logo} />
          <p style={styles.tagline}>Experience exceptional cuisine, elegant ambiance, and unforgettable moments.</p>
          <div style={styles.socials}>
            <span style={styles.socialIcon}>ⓕ</span>
            <span style={styles.socialIcon}>𝕏</span>
            <span style={styles.socialIcon}>ⓘ</span>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.col}>
          <p style={styles.colTitle}>Quick Links</p>
          {['Home', 'About Us', 'Our Menu', 'Reservations', 'Contact'].map(l => (
            <p key={l} style={styles.colLink}>{l}</p>
          ))}
        </div>

        {/* Contact */}
        <div style={styles.col}>
          <p style={styles.colTitle}>Contact Us</p>
          <p style={styles.colText}>123 Luxury Avenue, Fine City</p>
          <p style={styles.colText}>+1 (234) 567-890</p>
          <p style={styles.colText}>reservations@dineway.com</p>
          <p style={styles.colText}>Open Daily: 11AM – 11PM</p>
        </div>

        {/* Newsletter */}
        <div style={styles.col}>
          <p style={styles.colTitle}>Stay Connected</p>
          <p style={styles.colText}>Get exclusive offers and fine dining updates.</p>
          <input
            style={styles.emailInput}
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button style={styles.subscribeBtn}>Subscribe</button>
        </div>

      </div>

      <p style={styles.copy}>© {new Date().getFullYear()} DINEWAY — Crafted for unforgettable dining experiences.</p>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#0a0a0a',
    borderTop: '1px solid #1e1e1e',
    padding: '60px 40px 30px',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '48px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: '40px',
    borderBottom: '1px solid #1e1e1e',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    minWidth: '160px',
  },
  logo: {
    width: '100px',
    objectFit: 'contain',
  },
  tagline: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '12px',
    color: '#666',
    lineHeight: 1.6,
    maxWidth: '200px',
    margin: 0,
  },
  socials: {
    display: 'flex',
    gap: '12px',
    marginTop: '4px',
  },
  socialIcon: {
    fontSize: '18px',
    color: '#555',
    cursor: 'pointer',
  },
  colTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.5px',
    margin: '0 0 4px',
  },
  colLink: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#666',
    margin: 0,
    cursor: 'pointer',
  },
  colText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#666',
    margin: 0,
  },
  emailInput: {
    background: '#141414',
    border: '1px solid #2a2a2a',
    borderRadius: '4px',
    padding: '10px 12px',
    color: '#aaa',
    fontFamily: 'Lato, sans-serif',
    fontSize: '12px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  subscribeBtn: {
    background: '#c9a84c',
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
    fontSize: '13px',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  copy: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '11px',
    color: '#444',
    textAlign: 'center',
    marginTop: '24px',
  },
}
