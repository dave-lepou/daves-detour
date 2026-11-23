import { useState, type MouseEvent } from 'react'

export interface CardStat {
  label: string
  value: string
}

export interface BaseballCardProps {
  cardNumber: string
  badge: string
  name: string
  subtitle: string
  image: string
  ageLabel: string
  stats: CardStat[]
  accentColor?: string
}

export default function BaseballCard({
  cardNumber,
  badge,
  name,
  subtitle,
  image,
  ageLabel,
  stats,
  accentColor = '#5debc0',
}: BaseballCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [imgError, setImgError] = useState(false)

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
      aria-label={
        isFlipped
          ? `${name} stats card. Click to flip back to photo.`
          : `${name} baseball card. Click to flip to stats.`
      }
      style={{
        width: 'min(276px, 86vw)',
        height: '396px',
        margin: '0 auto',
        borderRadius: '20px',
        border: `3.5px solid ${accentColor}`,
        boxShadow: `0 0 18px ${accentColor}, 0 0 36px rgba(93, 235, 192, 0.45), 0 14px 28px rgba(0, 0, 0, 0.45)`,
        transform: `perspective(900px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg)`,
        transition: 'transform 140ms ease-out',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        backgroundColor: '#04221c',
        boxSizing: 'border-box',
      }}
    >
      {!isFlipped ? (
        /* FRONT: Baseball Card Photo + Bottom Overlay */
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {!imgError ? (
            <img
              src={image}
              alt={name}
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                textAlign: 'center',
                background:
                  'radial-gradient(circle at top, #065f46, #022c22 75%)',
                color: '#e8fbf5',
              }}
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ⚾
              </span>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
                {name}
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#a9f0dc',
                  marginTop: '0.35rem',
                }}
              >
                Photo coming soon!
              </p>
            </div>
          )}

          {/* Top Badges */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 9px',
                borderRadius: '999px',
                backgroundColor: 'rgba(2, 6, 23, 0.82)',
                color: accentColor,
                border: `1px solid ${accentColor}`,
              }}
            >
              {cardNumber} · {badge}
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                padding: '3px 9px',
                borderRadius: '999px',
                backgroundColor: 'rgba(2, 6, 23, 0.82)',
                color: '#e8fbf5',
              }}
            >
              Flip ↻
            </span>
          </div>

          {/* Bottom Nameplate */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: '36px 14px 14px',
              background:
                'linear-gradient(to top, rgba(2, 6, 23, 0.94), rgba(2, 6, 23, 0.72) 65%, transparent)',
              color: '#ffffff',
              textAlign: 'left',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#fdf8e7',
              }}
            >
              {name}
            </p>
            <p
              style={{
                margin: '3px 0 0',
                fontSize: '12px',
                lineHeight: 1.25,
                color: '#a9f0dc',
              }}
            >
              {subtitle} · Click for stats
            </p>
          </div>
        </div>
      ) : (
        /* BACK: Player Stats Card (Same Size & Shape) */
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fdf8e7',
            color: '#133b2e',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            textAlign: 'left',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid rgba(4, 127, 92, 0.3)',
                paddingBottom: '8px',
                marginBottom: '12px',
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#069a64',
                  }}
                >
                  Whānau Roster · {cardNumber}
                </p>
                <h3
                  style={{
                    margin: '2px 0 0',
                    fontSize: '17px',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: '#047f5c',
                  }}
                >
                  {name}
                </h3>
              </div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  backgroundColor: '#047f5c',
                  color: '#fdf8e7',
                }}
              >
                {ageLabel}
              </span>
            </div>

            <div style={{ fontSize: '13px', lineHeight: 1.45 }}>
              {stats.map((stat) => (
                <p key={stat.label} style={{ margin: '0 0 8px' }}>
                  <strong style={{ color: '#047f5c' }}>{stat.label}:</strong>{' '}
                  {stat.value}
                </p>
              ))}
            </div>
          </div>

          <p
            style={{
              margin: 0,
              paddingTop: '8px',
              borderTop: '1px solid rgba(4, 127, 92, 0.25)',
              fontSize: '11px',
              fontWeight: 700,
              textAlign: 'center',
              color: '#069a64',
            }}
          >
            Click card to flip back ↻
          </p>
        </div>
      )}
    </div>
  )
}
