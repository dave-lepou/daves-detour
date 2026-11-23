import { useState } from 'react'

interface CheckIn {
  week: string
  unit: string
  goal1Status: 'Achieved' | 'Partially Achieved'
  goal1Notes: string
  goal2Status: 'Achieved' | 'Partially Achieved'
  goal2Notes: string
  longTermNote?: string
}

const checkIns: CheckIn[] = [
  {
    week: 'Week 2',
    unit: 'Units 1–2: Foundations into Bootcamp',
    goal1Status: 'Achieved',
    goal1Notes:
      'Transitioned into Bootcamp rhythms. Initial blockage was adjusting to unfamiliar workflows, tech jargon and "competency whiplash." Applying the 20-minute timebox rule helped clear blockers faster.',
    goal2Status: 'Achieved',
    goal2Notes:
      'Successfully wore "different hats" between solo-dad duties and study. Keeping a physical journal beside my laptop caught stray frustrations so I could process them during breaks.',
  },
  {
    week: 'Week 4',
    unit: 'Units 3–4: Deepening Full-Stack & Group Dynamics',
    goal1Status: 'Partially Achieved',
    goal1Notes:
      'Complexity ramped up across backend, databases and APIs. Caught myself falling down debugging rabbit holes a couple of times before resetting and leaning back into the 20-minute rule with peers and facilitators.',
    goal2Status: 'Achieved',
    goal2Notes:
      'Mid-bootcamp fatigue started creeping in, making it tempting to skip recovery. Sticking to gym, sauna and cold-plunge sessions kept the "hot-air balloon" inflated and prevented burnout.',
  },
  {
    week: 'Week 6',
    unit: 'Units 5–6: Complex Builds & High-Pressure Sprints',
    goal1Status: 'Achieved',
    goal1Notes:
      'Built stronger fluency breaking down logic with plain-English pseudocode before writing syntax. Pair programming and group sprints proved how fast blockers dissolve when communicating early.',
    goal2Status: 'Achieved',
    goal2Notes:
      'High-intensity sprints tested energy levels and dad logistics. Focused on "being the bee" in team spaces—bringing calm, psychological safety, and encouragement when stress rose.',
  },
  {
    week: 'Week 8 (Today)',
    unit: 'Unit 7: Final Stretch & Reflection',
    goal1Status: 'Achieved',
    goal1Notes:
      'Full-stack concepts (React, TypeScript, Express, databases, deployment) are clicking together. Replaced fear of not knowing everything with a repeatable process to research, test, ask questions, and ship.',
    goal2Status: 'Achieved',
    goal2Notes:
      'Reached Week 8 with my values, family priorities, and mental clarity intact. Protecting non-negotiable recovery rituals proved that stepping away from the screen accelerates learning.',
    longTermNote:
      'Long-Term Goal (In Progress): Finalising Bootcamp projects, upgrading my blog to React/TypeScript and preparing my Junior Developer application for dev roles.',
  },
]

export default function LearningPlan() {
  const [selectedWeek, setSelectedWeek] = useState<number>(3) // Defaults to Week 8 (Today)

  const activeCheckIn = checkIns[selectedWeek]

  return (
    <article className="space-y-8 font-sans text-slate-800">
      {/* Section 1: Core Values & Mindset */}
      <section className="bg-[aliceblue] p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-2xl font-bold text-[#047f5c] text-center">
          My Foundation: Faith, Family & Service
        </h2>
        <p className="leading-relaxed">
          <strong>Faith, Family, and Service</strong> are the core values that
          guide my decisions and how I show up every day, anchored by{' '}
          <em>Joshua 1:9</em>. In tech, bringing my full self means creating
          psychological safety for others too. I view learning like a{' '}
          <strong>hot-air balloon</strong> (clearing mental clutter so heat and
          insight can lift it) and team culture like{' '}
          <strong>being the bee in the garden</strong>, seeking flowers and
          pollinating positive energy rather than fixating on problems.
        </p>
      </section>

      {/* Section 2: SMART Goals */}
      <section className="bg-[aliceblue] p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-[#047f5c] text-center">
          My Bootcamp & Long-Term SMART Goals
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Mini Goal 1 */}
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#047f5c] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#047f5c]">
              Mini-Goal 1 • End of Bootcamp
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Technical Fluency & The 20-Minute Rule
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              Complete 100% of core full-stack challenges and reflections by
              overcoming the fear of "feeling dumb", troubleshooting
              independently for 15–20 minutes, then proactively asking peers or
              facilitators for help whenever stuck.
            </p>
          </div>

          {/* Mini Goal 2 */}
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#047f5c] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#047f5c]">
              Mini-Goal 2 • End of Bootcamp
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Solo-Dad Balance & "Be the Bee" Leadership
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              Maintain sustainable study / family boundaries as a solo Dad by
              protecting gym, prayer, meditation and sauna/cold-plunge recovery
              4–5x weekly; journaling frustrations during coding blocks; and
              bringing empathy and calm to every group challenge / sprint.
            </p>
          </div>
        </div>

        {/* Long-Term Goal */}
        <div className="bg-white p-5 rounded-xl border-l-4 border-[#c7a529] space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c7a529]">
            Long-Term Career Goal • Post-Bootcamp (6 Months – 3 Years)
          </span>
          <h3 className="text-lg font-bold text-slate-900">
            Junior Developer → Remote Engineering & Relocation to Samoa
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Apply for and attain a Junior Developer role within 4 weeks of
            graduating to build production experience, then transition into a
            flexible remote engineering & mentoring pathway that allows me to
            relocate my family to Samoa.
          </p>
        </div>
      </section>

      {/* Section 3: Interactive Fortnightly Check-Ins */}
      <section className="bg-[aliceblue] p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-[#047f5c] text-center">
          Fortnightly Progress Check-Ins (Weeks 2, 4, 6 & 8)
        </h2>

        {/* Week Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {checkIns.map((item, index) => (
            <button
              key={item.week}
              onClick={() => setSelectedWeek(index)}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors cursor-pointer ${
                selectedWeek === index
                  ? 'bg-[#047f5c] text-white'
                  : 'bg-white text-[#047f5c] hover:bg-[#5debc0]/40'
              }`}
            >
              {item.week}
            </button>
          ))}
        </div>

        {/* Active Week Card */}
        <div className="bg-white p-6 rounded-xl space-y-4 border border-[#679f8f]/40">
          <div className="border-b pb-2">
            <h3 className="text-xl font-bold text-[#047f5c]">
              {activeCheckIn.week} — {activeCheckIn.unit}
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h4 className="font-bold text-slate-900">
                  Mini-Goal 1: Technical Fluency & 20-Min Rule
                </h4>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    activeCheckIn.goal1Status === 'Achieved'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {activeCheckIn.goal1Status}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCheckIn.goal1Notes}
              </p>
            </div>

            <div className="pt-2 border-t">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h4 className="font-bold text-slate-900">
                  Mini-Goal 2: Solo-Dad Balance & Wellbeing
                </h4>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {activeCheckIn.goal2Status}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCheckIn.goal2Notes}
              </p>
            </div>

            {activeCheckIn.longTermNote && (
              <div className="pt-2 border-t">
                <p className="text-sm font-semibold text-[#047f5c]">
                  {activeCheckIn.longTermNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Strategies & Wellbeing */}
      <section className="bg-[aliceblue] p-6 md:p-8 rounded-2xl shadow-sm grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl space-y-2">
          <h3 className="text-lg font-bold text-[#047f5c]">
            Strengths, Growth Areas & Strategies
          </h3>
          <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
            <li>
              <strong>Strengths:</strong> High-pressure resilience, team
              leadership, self-regulation, and openness to feedback.
            </li>
            <li>
              <strong>Growth Areas:</strong> Navigating unfamiliar technical
              jargon, speaking up early when stuck, and pacing energy over 9
              weeks.
            </li>
            <li>
              <strong>Strategies:</strong> 20-minute troubleshooting timebox,
              plain-English pseudocode before syntax, and distraction journaling
              during study blocks.
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-2">
          <h3 className="text-lg font-bold text-[#047f5c]">
            Wellbeing & Catching Stress Early
          </h3>
          <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
            <li>
              <strong>Early Warning Signs:</strong> Mental clutter (a "deflated"
              balloon), shrinking attention span, or hesitating to ask
              questions.
            </li>
            <li>
              <strong>Reset Tools:</strong> Stepping away from screens,
              journaling frustrations, prayer/meditation, gym workouts, and
              sauna/cold-plunge sessions.
            </li>
            <li>
              <strong>Daily Protection:</strong> Wearing "different hats" to
              keep fatherhood and study time distinct and intentional.
            </li>
          </ul>
        </div>
      </section>
    </article>
  )
}
