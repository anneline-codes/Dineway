import logo from '../assets/logo.png'
import styles from './Navbar.module.css'

export default function Navbar({ logoClass = '' }) {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Dineway Restaurant Solutions" className={`${styles.logo} ${logoClass}`} />
    </nav>
  )
}
