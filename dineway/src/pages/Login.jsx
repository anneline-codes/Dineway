import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import foodBg from '../assets/formspic.png'
import logo from '../assets/logo.png'
import styles from '../styles/auth.module.css'

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
    <div className={styles.page}>
      <div className={styles.left} style={{ backgroundImage: `url(${foodBg})` }}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Dineway logo" className={styles.logo} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <h2 className={styles.title}>WELCOME BACK</h2>
          <p className={styles.sub}>
            Login to <span className={styles.brand}>DINEWAY</span>
          </p>
          <p className={styles.hint}>Enter your email and password</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>EMAIL</label>
            <input
              className={styles.input}
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <label className={styles.label}>PASSWORD</label>
            <div className={styles.inputWrap}>
              <input
                className={styles.inputInner}
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁' : '🙈'}
              </button>
            </div>

            <button type="submit" className={styles.btn}>Login</button>
          </form>

          <p className={styles.switch}>
            Don't have account?{' '}
            <span className={styles.link} onClick={() => navigate('/signup')}>Sign Up</span>
          </p>

          <p className={styles.forgot}>
            <span className={styles.forgotLink}>Forgot password?</span>
          </p>
        </div>
      </div>
    </div>
  )
}

