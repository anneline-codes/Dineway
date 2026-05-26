import { useState } from 'react';
import logo from '../assets/logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.col}>
          <img src={logo} alt="Dineway" className={styles.logo} />
          <p className={styles.tagline}>Experience exceptional cuisine, elegant ambiance, and unforgettable moments.</p>
          <div className={styles.socials}>
            <span className={styles.socialIcon}>ⓕ</span>
            <span className={styles.socialIcon}>𝕏</span>
            <span className={styles.socialIcon}>ⓘ</span>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Quick Links</p>
          {['Home', 'About Us', 'Our Menu', 'Reservations', 'Contact'].map(l => (
            <p key={l} className={styles.colLink}>{l}</p>
          ))}
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Contact Us</p>
          <p className={styles.colText}>123 Luxury Avenue, Fine City</p>
          <p className={styles.colText}>+1 (234) 567-890</p>
          <p className={styles.colText}>reservations@dineway.com</p>
          <p className={styles.colText}>Open Daily: 11AM – 11PM</p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Stay Connected</p>
          <p className={styles.colText}>Get exclusive offers and fine dining updates.</p>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.subscribeBtn}>Subscribe</button>
        </div>

      </div>

      <p className={styles.copy}>© {new Date().getFullYear()} DINEWAY — Crafted for unforgettable dining experiences.</p>
    </footer>
  )
}

