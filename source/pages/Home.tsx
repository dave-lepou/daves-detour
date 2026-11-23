import { useState, type MouseEvent } from 'react'
import Layout from '../components/Layout'

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5

    const maxAngle = 9
    setTilt({
      rotateY: xPct * maxAngle * 2,
      rotateX: -yPct * maxAngle * 2,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  const toggleCard = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <Layout
      title="Dave's Detour"
      hideBackButton
      subtitle="Welcome to Dave's Detour - a little side road into something completely new for me. Talofa, my name is Dave Lepou, and this blog is where I document my experiences as I learn software development—reflections, challenges, discoveries, and all the things that go wrong (LOL) and the lessons I learn from them!"
    >
      {/* Centred ~2x Tall Portrait Trading Card */}
      <section
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '2rem',
        }}
        className="animate-fade-up"
      >
        <div
          role="button"
          tabIndex={0}
          onClick={toggleCard}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleCard()
            }
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            width: 'min(352px, 90vw)',
            height: '496px',
            margin: '0 auto',
            borderRadius: '24px',
            border: '4px solid #5debc0',
            boxShadow:
              '0 0 20px #5debc0, 0 0 42px rgba(93, 235, 192, 0.7), 0 16px 32px rgba(0, 0, 0, 0.45)',
            transform: `perspective(900px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg)`,
            transition: 'transform 140ms ease-out',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            userSelect: 'none',
            backgroundColor: '#0f172a',
            boxSizing: 'border-box',
          }}
        >
          {!isFlipped ? (
            /* FRONT: Photo + Bottom Overlay Text */
            <div
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <img
                src="./images/profile-picture.png"
                alt="Dave Lepou"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />

              {/* Top Card Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  right: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(2, 6, 23, 0.8)',
                    color: '#5debc0',
                    border: '1px solid rgba(93, 235, 192, 0.55)',
                  }}
                >
                  #001 · KŌANGA
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(2, 6, 23, 0.8)',
                    color: '#e8fbf5',
                  }}
                >
                  Flip ↻
                </span>
              </div>

              {/* Text Overlaid Directly on Bottom of Image */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '44px 18px 18px',
                  background:
                    'linear-gradient(to top, rgba(2, 6, 23, 0.94), rgba(2, 6, 23, 0.7) 65%, transparent)',
                  color: '#ffffff',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: '#a9f0dc',
                  }}
                >
                  Dave Lepou
                </p>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: '13px',
                    lineHeight: 1.3,
                    color: '#d1fae5',
                  }}
                >
                  Click card for stats
                </p>
              </div>
            </div>
          ) : (
            /* BACK: Stats Card (Exact Same Size & Shape) */
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'aliceblue',
                color: '#1e293b',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
              className="font-lucida"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '2px solid rgba(4, 127, 92, 0.3)',
                    paddingBottom: '10px',
                    marginBottom: '14px',
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#069a64',
                      }}
                    >
                      Player Stats
                    </p>
                    <h2
                      style={{
                        margin: '2px 0 0',
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: 1.15,
                        color: '#047f5c',
                      }}
                    >
                      Dave Lepou
                    </h2>
                  </div>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '4px 9px',
                      borderRadius: '6px',
                      backgroundColor: '#047f5c',
                      color: '#e8fbf5',
                    }}
                  >
                    38 YRS
                  </span>
                </div>

                <div style={{ fontSize: '14px', lineHeight: 1.48 }}>
                  <p style={{ margin: '0 0 10px' }}>
                    <strong style={{ color: '#047f5c' }}>Hometown:</strong>{' '}
                    Wainuiomata, Wellington, NZ
                  </p>
                  <p style={{ margin: '0 0 10px' }}>
                    <strong style={{ color: '#047f5c' }}>Where I live:</strong>{' '}
                    Plimmerton, Porirua
                  </p>
                  <p style={{ margin: '0 0 10px' }}>
                    <strong style={{ color: '#047f5c' }}>Current Study:</strong>{' '}
                    Dev Academy Aotearoa
                  </p>
                  <p style={{ margin: '10px 0 0' }}>
                    <strong style={{ color: '#047f5c', display: 'block' }}>
                      A goal I have:
                    </strong>
                    To complete my study, become a successful software
                    developer, and create remote freedom for my whānau.
                  </p>
                </div>
              </div>

              <p
                style={{
                  margin: 0,
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(103, 159, 143, 0.35)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textAlign: 'center',
                  color: '#069a64',
                }}
              >
                Click card to flip back to photo ↻
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
