import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import foodBg from '../assets/formspic.png'
import logo from '../assets/logo.png'

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to auth
    console.log('SignUp:', form)
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
          <h2 style={styles.title}>CREATE YOUR ACCOUNT</h2>

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

            <label style={styles.label}>CONFIRM PASSWORD</label>
            <div style={styles.inputWrap}>
              <input
                style={styles.inputInner}
                type={showConfirm ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                required
              />
              <button
                type="button"
                style={styles.eyeBtn}
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirm ? '👁' : '🙈'}
              </button>
            </div>

            <button type="submit" style={styles.btn}>Sign Up</button>
          </form>

          <div style={styles.orWrap}>
            <span style={styles.orLine} />
            <span style={styles.orText}>OR</span>
            <span style={styles.orLine} />
          </div>

          <button style={styles.googleBtn} type="button">
            <svg width="20" height="20" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Continue with Google
          </button>

          <p style={styles.switch}>
            Already have an account?{' '}
            <span style={styles.link} onClick={() => navigate('/login')}>Log in</span>
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
  orWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '4px 0',
  },
  orLine: {
    flex: 1,
    height: '1px',
    background: '#bbb',
  },
  orText: {
    fontSize: '13px',
    color: '#777',
    letterSpacing: '1px',
  },
  googleBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    background: '#faf9f6',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '11px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    color: '#333',
    cursor: 'pointer',
    width: '100%',
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
}
