import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to auth
    console.log('SignUp:', form)
  }

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.card}>
        <h2 style={styles.title}>Join Dineway</h2>
        <p style={styles.sub}>Create your account</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit" style={styles.btn}>Create Account</button>
        </form>
        <p style={styles.switch}>
          Already have an account?{' '}
          <span style={styles.link} onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0d0d0d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    background: '#161616',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    padding: '48px 40px',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '28px',
    color: '#c9a84c',
    textAlign: 'center',
  },
  sub: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#888',
    textAlign: 'center',
    marginBottom: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  input: {
    background: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '4px',
    padding: '12px 16px',
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    outline: 'none',
  },
  btn: {
    background: 'linear-gradient(135deg, #c9a84c, #e2c97e)',
    color: '#1a1a1a',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '1.5px',
    padding: '13px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '4px',
  },
  switch: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '13px',
    color: '#888',
    textAlign: 'center',
    marginTop: '8px',
  },
  link: {
    color: '#c9a84c',
    cursor: 'pointer',
  },
}
