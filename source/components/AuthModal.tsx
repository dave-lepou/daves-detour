import { useState, type FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signIn, signUp } = useAuth()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setInfo(null)
    setSubmitting(true)

    if (mode === 'signin') {
      const res = await signIn(email, password)
      setSubmitting(false)
      if (res.error) {
        setError(res.error)
      } else {
        setEmail('')
        setPassword('')
        onClose()
      }
    } else {
      const res = await signUp(email, password, displayName)
      setSubmitting(false)
      if (res.error) {
        setError(res.error)
      } else {
        setInfo(
          'Account created! If email confirmation is on, check your inbox—otherwise you are signed in.',
        )
        setDisplayName('')
        setEmail('')
        setPassword('')
        onClose()
      }
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={mode === 'signin' ? 'Sign in' : 'Create an account'}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(2, 6, 23, 0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: 'rgba(2, 6, 23, 0.96)',
          border: '2px solid #5debc0',
          borderRadius: '1.25rem',
          padding: '1.5rem',
          color: '#e8fbf5',
          boxShadow: '0 18px 44px rgba(0, 0, 0, 0.65)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '1.3rem',
              fontWeight: 800,
              color: '#5debc0',
            }}
          >
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              fontSize: '1.25rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        {/* Mode Switcher */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.4rem',
            padding: '0.25rem',
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            marginBottom: '1rem',
          }}
        >
          <button
            type="button"
            onClick={() => {
              setMode('signin')
              setError(null)
              setInfo(null)
            }}
            style={{
              padding: '0.45rem',
              borderRadius: '0.55rem',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: mode === 'signin' ? '#047f5c' : 'transparent',
              color: mode === 'signin' ? '#e8fbf5' : '#94a3b8',
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup')
              setError(null)
              setInfo(null)
            }}
            style={{
              padding: '0.45rem',
              borderRadius: '0.55rem',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
              backgroundColor: mode === 'signup' ? '#047f5c' : 'transparent',
              color: mode === 'signup' ? '#e8fbf5' : '#94a3b8',
            }}
          >
            Sign Up
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'grid', gap: '0.85rem' }}
        >
          {mode === 'signup' && (
            <label
              style={{ display: 'grid', gap: '0.3rem', fontSize: '0.9rem' }}
            >
              <span>Your Name</span>
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Taelar"
                style={{
                  padding: '0.6rem 0.75rem',
                  borderRadius: '0.6rem',
                  border: '1px solid rgba(93, 235, 192, 0.45)',
                  backgroundColor: '#0f172a',
                  color: '#f8fafc',
                }}
              />
            </label>
          )}

          <label style={{ display: 'grid', gap: '0.3rem', fontSize: '0.9rem' }}>
            <span>Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                padding: '0.6rem 0.75rem',
                borderRadius: '0.6rem',
                border: '1px solid rgba(93, 235, 192, 0.45)',
                backgroundColor: '#0f172a',
                color: '#f8fafc',
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: '0.3rem', fontSize: '0.9rem' }}>
            <span>Password</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              style={{
                padding: '0.6rem 0.75rem',
                borderRadius: '0.6rem',
                border: '1px solid rgba(93, 235, 192, 0.45)',
                backgroundColor: '#0f172a',
                color: '#f8fafc',
              }}
            />
          </label>

          {error && (
            <p
              style={{
                margin: 0,
                padding: '0.55rem 0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(153, 27, 27, 0.45)',
                border: '1px solid #f87171',
                color: '#fecaca',
                fontSize: '0.85rem',
              }}
            >
              {error}
            </p>
          )}

          {info && (
            <p
              style={{
                margin: 0,
                padding: '0.55rem 0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(4, 127, 92, 0.45)',
                border: '1px solid #5debc0',
                color: '#d1fae5',
                fontSize: '0.85rem',
              }}
            >
              {info}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: '0.25rem',
              padding: '0.65rem 1rem',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: '#5debc0',
              color: '#022c22',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting
              ? 'Please wait...'
              : mode === 'signin'
                ? 'Sign In'
                : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}
