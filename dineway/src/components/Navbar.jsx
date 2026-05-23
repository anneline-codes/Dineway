import logo from '../assets/logo.png'

export default function Navbar({ logoClass = '' }) {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="Dineway Restaurant Solutions" style={styles.logo} className={logoClass} />
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
    padding: '40px 40px 0',
    zIndex: 10,
  },
  logo: {
    height: '140px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
    marginTop: '20px',
  },
}
