import { useState } from 'react'

interface TapaDomain {
  title: string
  image: string
  alt: string
  commitments: string[]
}

const domains: TapaDomain[] = [
  {
    title: 'Taha Tinana (Physical Wellbeing)',
    image: './images/tinana.png',
    alt: 'Taha Tinana - Physical Wellbeing',
    commitments: [
      'Go to the gym to do my daily workout',
      'Drink a minimum of 2L of water throughout the day.',
      'Aim for 8 hours of sleep each night.',
    ],
  },
  {
    title: 'Taha Hinengaro (Mental & Emotional Wellbeing)',
    image: './images/hinengaro.png',
    alt: 'Taha Hinengaro - Mental Wellbeing',
    commitments: [
      'Journal after study / coding sessions.',
      'Practice box-breathing exercises when feeling stuck or tunnel-visioned.',
    ],
  },
  {
    title: 'Taha Wairua (Spiritual Wellbeing)',
    image: './images/wairua.jpg',
    alt: 'Taha Wairua - Spiritual Wellbeing',
    commitments: [
      'Stick to my daily prayer and devotional times - reading and listening to scripture',
      'Reflect and "reprogram" each day',
    ],
  },
  {
    title: 'Taha Whānau (Family & Social Wellbeing)',
    image: './images/whanau.jpeg',
    alt: 'Taha Whānau - Family & Social Wellbeing',
    commitments: [
      'Spend quality time with my family',
      'Actively stay connected to my "village"',
      'Reflect with my children daily - checking in on how their day went',
    ],
  },
  {
    title: 'Te Whenua (Your Environment)',
    image: './images/whenua.jpg',
    alt: 'Te Whenua - Your Environment',
    commitments: [
      'Spending time outdoors',
      'Ensuring I am positively influencing different environments I walk into',
      'Investing time and effort upkeeping my own whenua',
    ],
  },
]

export default function TeWhareTapaWha() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {domains.map((domain, idx) => {
        const isOpen = openIndex === idx

        return (
          <div
            key={domain.title}
            className="tapa-card"
            style={{
              border: '2px solid #5debc0',
              borderRadius: '16px',
              backgroundColor: 'rgba(4, 34, 28, 0.92)',
              color: '#ecfdf8',
              overflow: 'hidden',
              boxShadow: '0 10px 26px rgba(0, 0, 0, 0.35)',
            }}
          >
            <button
              type="button"
              onClick={() => handleToggle(idx)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1rem 1.25rem',
                backgroundColor: isOpen
                  ? 'rgba(4, 127, 92, 0.55)'
                  : 'rgba(6, 52, 42, 0.95)',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'left',
                }}
              >
                <img
                  src={`./${domain.image}`}
                  alt={domain.alt}
                  style={{
                    width: '80px',
                    height: '80px',
                    minWidth: '80px',
                    minHeight: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #5debc0',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#fdf8e7',
                  }}
                >
                  {domain.title}
                </span>
              </span>

              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#7ef5d0',
                  padding: '0 0.5rem',
                }}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div
                className="tapa-drawer"
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(2, 22, 18, 0.96)',
                  borderTop: '1px solid rgba(93, 235, 192, 0.4)',
                }}
              >
                <ul
                  style={{
                    margin: '0 auto',
                    paddingLeft: 0,
                    listStylePosition: 'inside',
                    listStyleType: 'disc',
                  }}
                >
                  {domain.commitments.map((commitment) => (
                    <li
                      key={commitment}
                      style={{
                        marginBottom: '0.55rem',
                        color: '#ecfdf8',
                        textAlign: 'center',
                      }}
                    >
                      {commitment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
