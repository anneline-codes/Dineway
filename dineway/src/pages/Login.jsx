import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import foodBg from '../assets/Screenshot 2026-05-03 113228.png'
import logo from '../assets/logo.png'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to auth
    console.log('Login:', form)
  }

  return (
    <div style={styles.page}>
      {/* Left panel */}
      <div style={{ ...styles.left, backgroundImage: `url(${foodBg})` }}>
        <div style={styles.logoWrap}>
          <img src={logo} alt="Dineway logo" style={styles.logo} />
        </div>
      </div>

      {/* Right panel */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h2 style={styles.title}>WELCOME BACK</h2>
          <p style={styles.sub}>
            Login to <span style={styles.brand}>DINEWAY</span>
          </p>
          <p style={styles.hint}>Enter your email and password</p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>EMAIL</label>
            <input
              style={styles.input}
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <label style={styles.label}>PASSWORD</label>
            <div style={styles.inputWrap}>
              <input
                style={styles.inputInner}
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                style={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁' : '🙈'}
              </button>
            </div>

            <button type="submit" style={styles.btn}>Login</button>
          </form>

          <p style={styles.switch}>
            Don't have account?{' '}
            <span style={styles.link} onClick={() => navigate('/signup')}>Sign Up</span>
          </p>

          <p style={styles.forgot}>
            <span style={styles.forgotLink}>Forgot password?</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Lato, sans-serif',
  },
  left: {
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    minHeight: '100vh',
    filter: 'brightness(1.15) contrast(1.05) saturate(1.1)',
  },
  logoWrap: {
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  logo: {
    width: '160px',
  },
  right: {
    flex: 1,
    background: '#f0ede6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px',
  },
  card: {
    background: '#faf9f6',
    border: '1px solid #c9a84c',
    borderRadius: '6px',
    padding: '48px 44px',
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  title: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '22px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#2a2a2a',
    textAlign: 'center',
    margin: 0,
  },
  sub: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '15px',
    color: '#444',
    textAlign: 'center',
    margin: 0,
  },
  brand: {
    fontFamily: 'Playfair Display, serif',
    letterSpacing: '2px',
    color: '#2a2a2a',
  },
  hint: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#666',
    textAlign: 'center',
    margin: '0 0 8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    color: '#555',
    marginTop: '10px',
  },
  input: {
    background: '#f0ede6',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '12px 14px',
    color: '#222',
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  inputWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputInner: {
    background: '#f0ede6',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '12px 40px 12px 14px',
    color: '#222',
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  eyeBtn: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: 0,
    lineHeight: 1,
  },
  btn: {
    background: '#c9a84c',
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
    fontSize: '15px',
    letterSpacing: '1px',
    padding: '13px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '14px',
  },
  switch: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#555',
    textAlign: 'center',
    margin: '8px 0 0',
  },
  link: {
    color: '#2a2a2a',
    fontWeight: '700',
    cursor: 'pointer',
  },
  forgot: {
    textAlign: 'center',
    margin: '4px 0 0',
  },
  forgotLink: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#555',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}
