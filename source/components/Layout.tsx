import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { blogPosts } from '../data/posts'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'

interface LayoutProps {
  title: string
  subtitle?: string
  showBackButton?: boolean
  hideBackButton?: boolean
  children: ReactNode
}

export default function Layout({
  title,
  subtitle,
  showBackButton = true,
  hideBackButton = false,
  children,
}: LayoutProps) {
  const shouldShowHomeButton = showBackButton && !hideBackButton

  const { user, signOut } = useAuth()
  const [authOpen, setAuthOpen] = useState(false)
  const [blogMenuOpen, setBlogMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<'tech' | 'core'>('tech')
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isAbout = location.pathname === '/about'

  const techPosts = blogPosts.filter((p) => p.category === 'tech')
  const corePosts = blogPosts.filter((p) => p.category === 'core')

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setBlogMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {/* Fixed Full-Viewport Stretched Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: "url('./images/background.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -10,
          pointerEvents: 'none',
        }}
      />

      {/* Foreground Page Container */}
      <div
        className="px-[4%] md:px-[10%] py-5 min-h-screen flex flex-col justify-between"
        style={{
          maxWidth: '960px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div>
          {/* Top Navigation Bar: Home + About + Blog Dropdown + Auth */}
          <nav
            ref={navRef}
            aria-label="Primary Navigation"
            style={{
              position: 'relative',
              zIndex: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(2, 6, 23, 0.72)',
                border: '1.5px solid rgba(93, 235, 192, 0.55)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Link
                to="/"
                onClick={() => setBlogMenuOpen(false)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: isHome ? '#022c22' : '#e8fbf5',
                  backgroundColor: isHome ? '#5debc0' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 150ms ease',
                }}
                className={
                  isHome ? '' : 'hover:bg-[#047f5c] hover:text-[#5debc0]'
                }
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setBlogMenuOpen(false)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: isAbout ? '#022c22' : '#e8fbf5',
                  backgroundColor: isAbout ? '#5debc0' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 150ms ease',
                }}
                className={
                  isAbout ? '' : 'hover:bg-[#047f5c] hover:text-[#5debc0]'
                }
              >
                About
              </Link>

              {/* Blog Dropdown Trigger */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setBlogMenuOpen((prev) => !prev)}
                  aria-expanded={blogMenuOpen}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: blogMenuOpen ? '#022c22' : '#5debc0',
                    backgroundColor: blogMenuOpen ? '#5debc0' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  <span>Blog</span>
                  <span style={{ fontSize: '0.75rem' }}>
                    {blogMenuOpen ? '▲' : '▼'}
                  </span>
                </button>

                {/* Dropdown Menu: Technical & Core Tabs */}
                {blogMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.65rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'min(360px, 88vw)',
                      borderRadius: '1rem',
                      backgroundColor: 'rgba(2, 6, 23, 0.94)',
                      border: '2px solid #5debc0',
                      boxShadow:
                        '0 14px 36px rgba(0, 0, 0, 0.55), 0 0 20px rgba(93, 235, 192, 0.35)',
                      padding: '0.85rem',
                      zIndex: 50,
                    }}
                  >
                    {/* Category Switcher Pills */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.4rem',
                        marginBottom: '0.75rem',
                        padding: '0.25rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveCategory('tech')}
                        style={{
                          padding: '0.45rem 0.6rem',
                          borderRadius: '0.55rem',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          backgroundColor:
                            activeCategory === 'tech'
                              ? '#047f5c'
                              : 'transparent',
                          color:
                            activeCategory === 'tech' ? '#e8fbf5' : '#94a3b8',
                        }}
                      >
                        💻 Technical ({techPosts.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCategory('core')}
                        style={{
                          padding: '0.45rem 0.6rem',
                          borderRadius: '0.55rem',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          backgroundColor:
                            activeCategory === 'core'
                              ? '#047f5c'
                              : 'transparent',
                          color:
                            activeCategory === 'core' ? '#e8fbf5' : '#94a3b8',
                        }}
                      >
                        🌱 Core ({corePosts.length})
                      </button>
                    </div>

                    {/* Filtered Blog Links */}
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      {(activeCategory === 'tech' ? techPosts : corePosts).map(
                        (post) => (
                          <li key={post.slug}>
                            <Link
                              to={`/post/${post.slug}`}
                              onClick={() => setBlogMenuOpen(false)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.5rem',
                                padding: '0.5rem 0.7rem',
                                borderRadius: '0.6rem',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: '#e8fbf5',
                                textDecoration: 'none',
                              }}
                              className="hover:bg-[#047f5c]/60 hover:text-[#5debc0]"
                            >
                              <span>→ {post.title}</span>
                              {post.slug === 'learning-plan' && (
                                <span
                                  style={{
                                    fontSize: '0.65rem',
                                    fontWeight: 800,
                                    padding: '2px 7px',
                                    borderRadius: '999px',
                                    backgroundColor: '#5debc0',
                                    color: '#022c22',
                                  }}
                                >
                                  NEW
                                </span>
                              )}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sign In / Sign Out Button */}
              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    setBlogMenuOpen(false)
                    signOut()
                  }}
                  title={`Signed in as ${user.email ?? 'member'}`}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#fecaca',
                    backgroundColor: 'rgba(153, 27, 27, 0.45)',
                    border: '1px solid rgba(248, 113, 113, 0.55)',
                    cursor: 'pointer',
                  }}
                >
                  Sign Out
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setBlogMenuOpen(false)
                    setAuthOpen(true)
                  }}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#022c22',
                    backgroundColor: '#5debc0',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </nav>

          {/* Header with Baseball Script Title & High-Contrast Bigger Subtitle */}
          <header className="text-center pb-6 mb-6 border-double-emerald animate-fade-up">
            <h1
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: 'clamp(2.75rem, 6vw, 4.4rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#fdf8e7',
                textShadow:
                  '0 3px 0 #047f5c, 0 6px 14px rgba(2, 6, 23, 0.75), 0 0 24px rgba(93, 235, 192, 0.55)',
                letterSpacing: '0.02em',
                marginBottom: '1rem',
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Lucida Sans', sans-serif",
                  fontSize: 'clamp(1.05rem, 2.1vw, 1.25rem)',
                  fontWeight: 600,
                  lineHeight: 1.65,
                  color: '#f2fffb',
                  textShadow: '0 2px 10px rgba(2, 6, 23, 0.88)',
                  maxWidth: '46rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {subtitle}
              </p>
            )}
          </header>

          {/* Main Content */}
          <main className="min-h-[55vh]">{children}</main>

          {/* Centred House-Shaped Button */}
          {shouldShowHomeButton && (
            <nav
              aria-label="Return home"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              <Link
                to="/"
                title="Back to Home"
                aria-label="Back to Home"
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '32px solid transparent',
                    borderRight: '32px solid transparent',
                    borderBottom: '22px solid #e8fbf5',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    width: '44px',
                    height: '32px',
                    marginTop: '-1px',
                    backgroundColor: '#e8fbf5',
                    borderBottomLeftRadius: '6px',
                    borderBottomRightRadius: '6px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.18)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: '10px',
                      height: '14px',
                      backgroundColor: '#679f8f',
                      borderTopLeftRadius: '2px',
                      borderTopRightRadius: '2px',
                      display: 'block',
                    }}
                  />
                </span>
                <span
                  style={{
                    marginTop: '0.35rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#e8fbf5',
                    letterSpacing: '0.03em',
                  }}
                >
                  Home
                </span>
              </Link>
            </nav>
          )}
        </div>

        {/* Centred Lighter Footer */}
        <footer
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#e8fbf5',
            fontSize: '0.9rem',
            paddingTop: '1.25rem',
            marginTop: '1rem',
          }}
        >
          <p
            style={{ margin: '0 auto', textAlign: 'center', color: '#e8fbf5' }}
          >
            &copy; 2026 Dave Lepou
          </p>
        </footer>
      </div>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}
