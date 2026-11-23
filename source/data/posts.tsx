import { ReactNode } from 'react'
import TeWhareTapaWha from '../components/TeWhareTapaWha'
import LearningPlan from '../components/LearningPlan'

export interface BlogPost {
  slug: string
  category: 'tech' | 'core'
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
]
