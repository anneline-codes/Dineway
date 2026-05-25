import { useState } from 'react';
import { useNavigate } from 'react-router-dom';;
import foodBg from '../assets/formspic.png';
import logo from '../assets/logo.png';
import styles from '../styles/auth.module.css';

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
    <div className={styles.page}>
      <div className={styles.left} style={{ backgroundImage: `url(${foodBg})` }}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Dineway logo" className={styles.logo} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <h2 className={styles.title}>CREATE YOUR ACCOUNT</h2>

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

            <label className={styles.label}>CONFIRM PASSWORD</label>
            <div className={styles.inputWrap}>
              <input
                className={styles.inputInner}
                type={showConfirm ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                required
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirm ? '👁' : '🙈'}
              </button>
            </div>

            <button type="submit" className={styles.btn}>Sign Up</button>
          </form>

          <div className={styles.orWrap}>
            <span className={styles.orLine} />
            <span className={styles.orText}>OR</span>
            <span className={styles.orLine} />
          </div>

          <button className={styles.googleBtn} type="button">
            <svg width="20" height="20" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Continue with Google
          </button>

          <p className={styles.switch}>
            Already have an account?{' '}
            <span className={styles.link} onClick={() => navigate('/login')}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  )
}

