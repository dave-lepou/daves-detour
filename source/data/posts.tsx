import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import TeWhareTapaWha from '../components/TeWhareTapaWha'
import LearningPlan from '../components/LearningPlan'

export interface BlogPost {
  slug: string
  category: 'tech' | 'core' | 'agile'
  title: string
  subtitle: string
  content: ReactNode
}

export const blogPosts: BlogPost[] = [
  // ================= TECH POSTS =================
  {
    slug: 'html-css',
    category: 'tech',
    title: 'The CSS Box Model - Content, Padding, Border and Margin',
    subtitle:
      'In this blog, I am going to discuss three main points: explaining the CSS Box Model, the differences between padding, border and margin, and answers to questions from my research!',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            What is the CSS box-model?
          </h2>
          <p>
            Imagine a webpage as a big warehouse that holds different boxes of
            various products and sizes. These boxes are the elements of each
            page—text, images, and videos. The CSS Box Model adds extra layers
            around those elements that control space inside and between boxes.
          </p>
          <p>
            <strong>CONTENT:</strong> The actual item inside the box (text,
            images, videos).
          </p>
          <p>
            <strong>PADDING:</strong> The space immediately surrounding the
            content.
          </p>
          <p>
            <strong>BORDER:</strong> The outer frame wrapping around the content
            and padding.
          </p>
          <p>
            <strong>MARGIN:</strong> The space outside the border that pushes
            away neighbouring boxes.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            What is the difference between Margin, Border and Padding?
          </h2>
          <p>
            The key difference comes down to <strong>location</strong>: Padding
            is inside the border (sharing the background colour), the border is
            the frame around it, and margin is the outer space separating
            neighbouring elements.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            Research Questions & Answers
          </h2>
          <p>
            <strong>1. CSS Shorthand:</strong> Assign custom values clockwise
            from Top-Right-Bottom-Left (<strong>TRBL / "TROUBLE"</strong>):{' '}
            <code className="bg-white px-2 py-0.5 rounded">
              margin: 0px 5px 10px 15px;
            </code>
          </p>
          <p>
            <strong>2. Borders:</strong> Require size, style, and colour—for
            example:{' '}
            <code className="bg-white px-2 py-0.5 rounded">
              border-bottom: 10px solid white;
            </code>
          </p>
          <p>
            <strong>3. Shapes & Styles:</strong> Use{' '}
            <code className="bg-white px-2 py-0.5 rounded">
              border-radius: 10px;
            </code>{' '}
            for rounded corners and styles like <strong>dashed</strong> or{' '}
            <strong>double</strong> borders.
          </p>
        </section>
      </article>
    ),
  },
  {
    slug: 'js-fundamentals',
    category: 'tech',
    title: 'JavaScript (JS) Fundamentals',
    subtitle:
      'Exploring JS and its relationship with HTML & CSS, Control Flow, the DOM, Arrays & Objects, and Functions!',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            JavaScript and its Relationship to HTML and CSS
          </h2>
          <p>
            <strong>HTML (Structure):</strong> The frame, gib, and foundation.
          </p>
          <p>
            <strong>CSS (Appearance):</strong> The paint, wallpaper, and
            furnishings.
          </p>
          <p>
            <strong>JavaScript (Functionality & Property Manager):</strong> The
            plumbing and electrical works—controlling behaviour and updating the
            page dynamically without rewriting the blueprint.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            Control Flow and Loops
          </h2>
          <p>
            <strong>Conditionals (if / else):</strong> Decision branches—e.g.,
            Am I hungry? Yes. Food at home? No. Order Uber Eats!
          </p>
          <p>
            <strong>Loops (for):</strong> Repeat an action while a condition is
            true—like eating chips until the bag is empty.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            The DOM (Document Object Model)
          </h2>
          <p>
            HTML is the blueprint; the DOM is the live physical house in the
            browser. JS finds nodes (e.g.,{' '}
            <code className="bg-white px-2 py-0.5 rounded">
              document.querySelector('#submit-btn')
            </code>
            ) and updates them dynamically.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            Arrays & Objects and Functions
          </h2>
          <p>
            <strong>Objects</strong> access data by key (<code>user.age</code>),
            while <strong>Arrays</strong> access items by index (
            <code>colors[0]</code>).
          </p>
          <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl text-left overflow-x-auto text-sm">
            <code>{`function makeSmoothie(berry, fruit, liquid) {
  let smoothie = 'A delicious blend of ' + berry + ', ' + fruit + ', and ' + liquid + '!'
  return smoothie
}`}</code>
          </pre>
        </section>
      </article>
    ),
  },

  // ================= CORE POSTS =================
  {
    slug: 'learning-plan',
    category: 'core',
    title: 'Dev Academy Learning Plan & SMART Goals',
    subtitle:
      'Integrating Faith, Family, Service and Hauora into my Bootcamp roadmap — with fortnightly progress tracking across weeks 2, 4, 6 and 8.',
    content: <LearningPlan />,
  },
  {
    slug: 'emotional-intelligence',
    category: 'core',
    title: 'The Power of (EQ) Emotional Intelligence',
    subtitle:
      'What Emotional Intelligence is, how it differs from IQ, and why it matters to me in learning and tech.',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h3 className="text-xl font-bold text-[#047f5c]">
            What is Emotional Intelligence?
          </h3>
          <p>
            Emotional Intelligence (EQ) is the ability to recognise, understand,
            and manage our own emotions while empathising with others. If my
            friend Billy pours milk before hot water when making tea, a high-EQ
            response pauses judgement and shows curiosity rather than imposing a
            rigid "my way is right" mindset.
          </p>
        </section>
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h3 className="text-xl font-bold text-[#047f5c]">
            How is EQ different from IQ?
          </h3>
          <p>
            IQ focuses on procedural logic and technical execution; EQ focuses
            on the interpersonal environment. IQ helps you solve the problem,
            while EQ helps you manage the people and context surrounding it.
          </p>
        </section>
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h3 className="text-xl font-bold text-[#047f5c]">
            Why does EQ matter in tech?
          </h3>
          <p>
            Technical strategy can only take a team so far. Self-awareness and
            empathy create psychological safety, transforming individual talent
            into collective strength.
          </p>
        </section>
      </article>
    ),
  },
  {
    slug: 'neuroplasticity',
    category: 'core',
    title: 'Rewiring for Growth: How Neuroplasticity Shapes the Way We Learn!',
    subtitle:
      'Exploring neuroplasticity, growth mindset, and practical strategies for building new neural pathways.',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h3 className="text-xl font-bold text-[#047f5c]">
            The "Running Shoe" Analogy & "The Corridor vs. The House"
          </h3>
          <p>
            <strong>Neuroplasticity</strong> is like breaking in new running
            shoes—awkward at first, effortless with repetition as your brain
            builds new neural connections.
          </p>
          <p>
            <strong>Growth Mindset</strong> means leaving the narrow "corridor"
            of fixed thinking and opening the doors throughout the entire house
            to discover better tools, feedback, and creative solutions.
          </p>
        </section>
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h3 className="text-xl font-bold text-[#047f5c]">
            Strategies I Adopt
          </h3>
          <ul className="list-disc pl-6 text-left max-w-xl mx-auto space-y-2">
            <li>
              <strong>Practice & Repetition:</strong> Building patience through
              daily coding reps.
            </li>
            <li>
              <strong>Embracing Mistakes:</strong> Treating bugs and errors as
              data, not failure.
            </li>
            <li>
              <strong>Inviting Feedback:</strong> Opening doors to peers and
              facilitators for fresh perspectives.
            </li>
          </ul>
        </section>
      </article>
    ),
  },
  {
    slug: 'te-whare-tapa-wha',
    category: 'core',
    title: 'Te Whare Tapa Whā — My Hauora Plan',
    subtitle:
      'My wellbeing plan focusing on the Te Whare Tapa Whā model and the commitments I make to strengthen each domain!',
    content: <TeWhareTapaWha />,
  },

  // ================= AGILE POSTS =================
  {
    slug: 'agile-outside-the-code',
    category: 'agile',
    title:
      'Outside the Code: What a 24-Hour Build Taught Me About Real-World Agile',
    subtitle:
      'Why Agile is a framework for keeping real people aligned under pressure—introduced through our 24-hour "Tēnā Koe" sprint.',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            Beyond the Slide Deck
          </h2>
          <p>
            Agile looks neat on a slide deck: professional standups, tidy Kanban
            columns, predictable sprints etc. but in reality, especially during
            a high-pressure bootcamp sprint, it isn&apos;t a checklist you
            follow to get a passed-mark It&apos;s a framework for keeping real
            people aligned when the pressure rises, the context shifts and
            things inevitably break.
          </p>
          <p>
            Reflecting on our 24-hour group project, <strong>Tēnā Koe</strong>,
            showed me why Agile practices exist; what happens when a team drifts
            away from them; and how adapting them in the moment can save a
            build. <strong>Tēnā Koe</strong> is a full-stack CRUD app I built
            with my cohort classmates, Chris and Brandon, where users can
            create, read, update and delete thank-you messages.
          </p>
        </section>

        <div className="flex justify-end">
          <Link
            to="/post/agile-part-one"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-[#047f5c] text-[#e8fbf5] hover:bg-[#5debc0] hover:text-[#022c22] transition"
          >
            Next: Part One — Understanding Agile →
          </Link>
        </div>
      </article>
    ),
  },
  {
    slug: 'agile-part-one',
    category: 'agile',
    title: 'Part One: Understanding Agile (Purpose Over Definitions)',
    subtitle:
      'Looking past textbook definitions to why ceremonies, artefacts and Agile values exist in practice.',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">Ceremonies</h2>
          <p>
            Across bootcamp, I&apos;ve come to see Agile ceremonies, artefacts
            and values not as rules with intent to control, but as practical
            safeguards against confusion and wasted effort.
          </p>
          <p>
            <strong>Planning sessions:</strong> Planning isn&apos;t about
            predicting every line of code before you start. It&apos;s about
            building a shared mental model. On Tēnā Koe, we invested time
            upfront on Miro to discuss our individual learning objectives,
            assign roles, wireframe the user experience and build our first
            ticket together. That meant everyone knew how their piece connected
            to the whole app and what &ldquo;done&rdquo; actually looked like.
          </p>
          <p>
            <strong>Standups:</strong> As the team&apos;s Agile facilitator, I
            ran standups from our Miro board as a tool for alignment and
            unblocking, not a status report. In a fast-moving build, they exist
            to surface duplicated work, shifting assumptions and silent blockers
            before the time disappears.
          </p>
          <p>
            <strong>Retros:</strong> A retro is about how the team worked
            together and not just what we shipped. Facilitating ours on Miro at
            the end of Tēnā Koe gave us space to talk honestly about the
            blockers we hit; share appreciative and growth feedback; celebrate
            how we got through those moments; and carry the lessons into future
            projects.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">Artefacts</h2>
          <p>
            <strong>Boards, backlogs, and wireframes:</strong> Using{' '}
            <strong>GitHub Projects</strong> to split work into MVP tickets and
            stretch goals and <strong>Miro</strong> to map out our wireframes;
            planning records; standup notes; and retro reflections, making
            invisible work visible. Instead of guessing what to do next or
            accidentally editing the same files, we had a single source of truth
            for priorities and progress. The catch is that artefacts only help
            if they stay up to date. A board is only useful if the team keeps it
            honest.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">Values in Action</h2>
          <p>
            <strong>
              Individuals and interactions over processes and tools:
            </strong>{' '}
            Early on, we set clear boundaries around openness and transparency.
            That psychological safety made it much easier to admit when we were
            stuck, without ego.
          </p>
          <p>
            <strong>Working software over comprehensive documentation:</strong>{' '}
            Building our first ticket together gave us an early working slice of
            the app to test and build on which helped us finish the core CRUD
            functionality with time left for stretch tickets.
          </p>
          <p>
            <strong>Responding to change over following a plan:</strong> When
            our original timeline hit a wall mid-sprint, pausing to realign
            mattered far more than blindly sticking to the schedule.
          </p>
        </section>

        <div className="flex flex-wrap justify-between gap-3">
          <Link
            to="/post/agile-outside-the-code"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-slate-900/80 text-[#e8fbf5] border border-[#5debc0] hover:bg-[#047f5c] transition"
          >
            ← Overview
          </Link>
          <Link
            to="/post/agile-part-two"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-[#047f5c] text-[#e8fbf5] hover:bg-[#5debc0] hover:text-[#022c22] transition"
          >
            Next: Part Two — Practical Application →
          </Link>
        </div>
      </article>
    ),
  },
  {
    slug: 'agile-part-two',
    category: 'agile',
    title: 'Part Two: Practical Application (The Tēnā Koe 24-Hour Challenge)',
    subtitle:
      'What worked well, where communication broke down mid-build and how a 30-minute impromptu standup saved our app.',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">Context</h2>
          <p>
            A three-person team (Chris, Brandon and me as Agile facilitator)
            building <strong>Tēnā Koe</strong> within a strict{' '}
            <strong>24-hour timeframe</strong> set by our Dev Academy
            facilitators, using <strong>Miro</strong> for planning, wireframing,
            standups, and retros, and <strong>GitHub Projects</strong> for
            ticket visibility.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">What Worked Well</h2>
          <p>
            Front-loading alignment made a huge difference. Clarifying our
            learning goals meant tasks were distributed intentionally,
            wireframing on Miro prevented frontend/backend mismatches and
            building the first ticket together got everyone comfortable with the
            workflow early.
          </p>
          <p>
            Regular standups and clear communication boundaries kept energy high
            and expectations clear through the first phase of the build.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            What Didn&apos;t Work
          </h2>
          <p>
            Mid-sprint we hit a wall on the frontend while building our homepage
            component. We&apos;d spent the previous two weeks focused almost
            entirely on backend learning so we were rusty on frontend patterns
            and suddenly communication went out the window. Instead of leaning
            on each other, the three of us sat in silence, admiring the "singing
            crickets" and went down separate rabbit holes.
          </p>
        </section>

        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            How We Adapted &amp; The Outcome
          </h2>
          <p>
            Recognising that we&apos;d drifted into isolation, I called an{' '}
            <strong>impromptu 30-minute realignment standup</strong>. Taking
            half an hour away from coding during a 24-hour sprint felt risky,
            but we stepped back from our keyboards, talked openly about where we
            were stuck, clarified our roles and agreed on a unified plan.
          </p>
          <p>
            That 30-minute reset paid off almost immediately. About two hours
            later we hit a similar blocker, but instead of slipping back into
            silence, we caught ourselves straight away, named that we were{' '}
            <strong>&ldquo;back here,&rdquo;</strong> talked it through on the
            spot and kept moving. We finished our MVP, knocked out stretch
            tickets and wrapped up with time to spare.
          </p>
        </section>

        <div className="flex flex-wrap justify-between gap-3">
          <Link
            to="/post/agile-part-one"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-slate-900/80 text-[#e8fbf5] border border-[#5debc0] hover:bg-[#047f5c] transition"
          >
            ← Part One
          </Link>
          <Link
            to="/post/agile-part-three"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-[#047f5c] text-[#e8fbf5] hover:bg-[#5debc0] hover:text-[#022c22] transition"
          >
            Next: Part Three — Adaptation &amp; Context →
          </Link>
        </div>
      </article>
    ),
  },
  {
    slug: 'agile-part-three',
    category: 'agile',
    title: 'Part Three: Adaptation and Context',
    subtitle:
      'Treating Agile as a compass rather than a rulebook; when to lighten ceremonies and what I will do next time.',
    content: (
      <article className="space-y-6 font-sans text-slate-800">
        <section className="bg-[aliceblue] p-6 rounded-2xl space-y-3 text-center">
          <h2 className="text-xl font-bold text-[#047f5c]">
            A Compass, Not a Rulebook
          </h2>
          <p>Agile works best as a compass rather than a rulebook.</p>
          <p>
            <strong>When strict Agile doesn&apos;t make sense:</strong> Formal
            ceremonies like heavy sprint planning, formal estimation or rigid
            multi-week rituals, don&apos;t suit a 24-hour "sprint", a solo
            project or a team already communicating continuously in the same
            room. In those settings, too much ceremony becomes overhead that
            steals time from building. On the flip side, in high-compliance or
            safety-critical domains, teams still need substantial upfront
            specification before iterating.
          </p>
          <p>
            <strong>How teams adapt Agile:</strong> In practice, strong teams
            dial ceremonies up or down to fit their context. They might use
            lightweight Kanban flow instead of rigid sprints; swap scheduled
            status meetings for quick on-demand check-ins when blockers appear;
            or focus retros on one or two actionable habits rather than a long
            wishlist.
          </p>
          <p>
            <strong>What I&apos;d do differently next time:</strong> I
            wouldn&apos;t wait for silence to set in before calling a reset.
            It&apos;s easy to adopt a fixed mindset when switching contexts,
            like jumping from two weeks of backend back into frontend, so
            I&apos;d introduce short, timeboxed struggle limits of 15 to 20
            minutes. If someone is stuck for 20 minutes, we surface it and pair
            on it before anyone disappears down a rabbit hole.
          </p>
        </section>

        <div className="flex flex-wrap justify-between gap-3">
          <Link
            to="/post/agile-part-two"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-slate-900/80 text-[#e8fbf5] border border-[#5debc0] hover:bg-[#047f5c] transition"
          >
            ← Part Two
          </Link>
          <Link
            to="/post/agile-outside-the-code"
            className="inline-block px-5 py-2.5 rounded-full font-bold bg-[#047f5c] text-[#e8fbf5] hover:bg-[#5debc0] hover:text-[#022c22] transition"
          >
            Back to Overview ↺
          </Link>
        </div>
      </article>
    ),
  },
]
