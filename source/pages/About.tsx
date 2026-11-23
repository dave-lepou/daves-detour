import Layout from '../components/Layout'
import BaseballCard from '../components/BaseballCard'

export default function About() {
  return (
    <Layout
      title="About Me & My Why"
      subtitle="From serving in the Royal New Zealand Navy to chasing a new dream in software development—everything I build is anchored in whānau."
    >
      <div className="space-y-10 animate-fade-up">
        {/* Who I Am & My Why Card */}
        <section
          style={{
            backgroundColor: 'rgba(4, 34, 28, 0.88)',
            border: '1.5px solid rgba(126, 245, 208, 0.45)',
            borderRadius: '1.5rem',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 14px 36px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#fdf8e7',
              textShadow: '0 2px 10px rgba(4, 127, 92, 0.85)',
              marginBottom: '1rem',
            }}
          >
            Ko Wai Au · Who I Am
          </h2>

          <div
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '1.15rem',
              lineHeight: 1.85,
              color: '#ecfdf8',
              maxWidth: '66ch',
              margin: '0 auto',
            }}
            className="space-y-4"
          >
            <p>
              Talofa lava and Kia ora! I’m{' '}
              <strong style={{ color: '#7ef5d0' }}>Dave Lepou</strong>,
              originally from{' '}
              <strong style={{ color: '#7ef5d0' }}>Wainuiomata</strong> and now
              calling{' '}
              <strong style={{ color: '#7ef5d0' }}>Plimmerton, Porirua</strong>{' '}
              home. I am currently serving in the{' '}
              <strong style={{ color: '#7ef5d0' }}>
                Royal New Zealand Navy
              </strong>{' '}
              while transitioning into a brand-new chapter as a{' '}
              <strong style={{ color: '#7ef5d0' }}>software developer</strong>.
            </p>

            <p>
              Stepping into tech is all about{' '}
              <strong style={{ color: '#7ef5d0' }}>dream chasing</strong> -
              backing myself to learn new skills from the ground up, embracing
              the late nights and debugging hurdles, and building genuine,
              sustainable success in software engineering.
            </p>

            <p>
              More than anything,{' '}
              <strong style={{ color: '#7ef5d0' }}>
                my family is my "Why"
              </strong>
              . Every line of code I write, every challenge I push through and
              every goal I chase is driven by my desire to build remote freedom,
              stability and a bright future for my kids - and to show them
              firsthand that it’s never too late to chase a bold new dream.
            </p>
          </div>
        </section>

        {/* Whānau Baseball Cards Directly Over the Background Image */}
        <section
          style={{
            padding: '1rem 0 1.5rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1.65rem, 3.2vw, 2.2rem)',
              fontWeight: 700,
              color: '#fdf8e7',
              textShadow: '0 3px 0 #047f5c, 0 6px 16px rgba(2, 6, 23, 0.9)',
              marginBottom: '0.45rem',
            }}
          >
            Meet My Fānau · My Why
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#f2fffb',
              textShadow: '0 2px 10px rgba(2, 6, 23, 0.9)',
              marginBottom: '2.5rem',
            }}
          >
            Click any card to flip it over and check out their stats!
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3.25rem',
            }}
          >
            {/* Oriwa's Card */}
            <BaseballCard
              cardNumber="#002"
              badge="PRINCESS"
              name="Oriwa"
              subtitle="Adventurous First-Year"
              image="./images/oriwa-card.jpg"
              ageLabel="5 YRS"
              accentColor="#5debc0"
              stats={[
                { label: 'DOB', value: '12/02/2021' },
                { label: 'Age', value: '5 years old' },
                { label: 'Nickname', value: 'Oriz' },
                { label: 'Hometown', value: 'Plimmerton, Porirua' },
                { label: 'Kura', value: 'Te Kura Kaupapa o Porirua (Year 1)' },
                {
                  label: 'Superpower',
                  value:
                    'Fearless explorer who loves being adventurous every day!',
                },
              ]}
            />

            {/* Maioha-Mataio's Card */}
            <BaseballCard
              cardNumber="#003"
              badge="MAH-MAN"
              name="Maioha-Mataio"
              subtitle="Little Brother · Big Energy"
              image="./images/maioha-mataio.jpg"
              ageLabel="3 YRS"
              accentColor="#f3d266"
              stats={[
                { label: 'DOB', value: '11/09/2023' },
                { label: 'Age', value: '3 years old' },
                { label: 'Hometown', value: 'Plimmerton, Porirua' },
                { label: 'Nickname', value: 'Tails' },
                { label: 'Aoga', value: 'Plimmerton Kindegarten' },
                { label: 'Role', value: 'Chief Sidekick & Joy Bringer' },
                {
                  label: 'Superpower',
                  value:
                    'Keeping Dad on his toes and bringing non-stop energy to the whānau!',
                },
              ]}
            />

            {/* Sakura's Card */}
            <BaseballCard
              cardNumber="#004"
              badge="MVP PUP"
              name="Sakura"
              subtitle="Whānau Guardian & Best Girl"
              image="./images/sakura.jpg"
              ageLabel="GOOD GIRL"
              accentColor="#fda4af"
              stats={[
                { label: 'Position', value: 'Loyal Companion' },
                { label: 'Hometown', value: 'Plimmerton, Porirua' },
                { label: 'Nickname', value: 'Darling' },
                {
                  label: 'Superpower',
                  value:
                    'Moral support during late-night coding sessions and family adventures!',
                },
              ]}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}
