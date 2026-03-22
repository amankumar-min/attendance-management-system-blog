export default function App() {
  const features = [
    {
      title: 'Record Attendance',
      desc: 'Capture daily attendance digitally with a structured and reliable workflow instead of paper registers.',
      icon: '📝',
    },
    {
      title: 'Update Entries',
      desc: 'Correct mistakes quickly when a student is marked absent or present incorrectly.',
      icon: '✏️',
    },
    {
      title: 'Delete Records',
      desc: 'Remove duplicate or invalid attendance entries while keeping data organized.',
      icon: '🗑️',
    },
    {
      title: 'Retrieve Data',
      desc: 'Access attendance details instantly for students, classes, or specific dates.',
      icon: '🔎',
    },
  ]

  const workflow = [
    'Admin or faculty logs into the system',
    'Student, class, and subject data is selected',
    'Attendance is marked digitally in a few clicks',
    'Data is stored in a structured format',
    'Records can later be updated, removed, or searched',
    'Reports and summaries help improve academic monitoring',
  ]

  const benefits = [
    'Reduces human error in attendance marking',
    'Eliminates paperwork and manual registers',
    'Saves time for teachers and administration',
    'Makes record handling faster and more organized',
    'Improves data accessibility and transparency',
    'Creates a scalable system for institutions',
  ]

  const blogCards = [
    {
      title: 'Why Traditional Attendance Systems Fail',
      category: 'Problem',
      text: 'Manual registers are slow, error-prone, and difficult to maintain over long periods. This project replaces that outdated approach with a faster and more accurate digital process.',
    },
    {
      title: 'How the System Works',
      category: 'Functionality',
      text: 'The platform supports complete attendance management through record, update, delete, and retrieve operations. It ensures every attendance entry is easy to manage and easy to access.',
    },
    {
      title: 'Impact in Academic Environments',
      category: 'Outcome',
      text: 'By automating attendance workflows, institutions can improve operational efficiency, reduce clerical workload, and maintain a more reliable student record system.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Java Project Showcase
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Attendance Management System
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A blog-style project website built to present your Java-based Attendance Management System,
              explain its purpose, and clearly illustrate how it digitizes and automates the traditional
              attendance workflow in academic institutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#features"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Explore Features
              </a>
              <a
                href="#workflow"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Workflow
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Core Goal</p>
              <h3 className="mt-2 text-xl font-semibold">Automate Attendance</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Replace manual registers with a digital system that is faster, cleaner, and more efficient.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-10">
              <p className="text-sm font-medium text-slate-500">Technology</p>
              <h3 className="mt-2 text-xl font-semibold">Java-Based Solution</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured around CRUD operations to manage attendance records in a reliable way.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Use Case</p>
              <h3 className="mt-2 text-xl font-semibold">Academic Environment</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Designed for schools, colleges, and institutions that need better attendance handling.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-10">
              <p className="text-sm font-medium text-slate-500">Main Benefit</p>
              <h3 className="mt-2 text-xl font-semibold">Efficiency + Accuracy</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Reduces human errors, removes paperwork, and improves overall operational flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Blog Highlights</p>
            <h2 className="mt-3 text-3xl font-bold">Explaining the project through story-driven sections</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                {card.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Key Features</p>
            <h2 className="mt-3 text-3xl font-bold">Built around the main attendance operations</h2>
            <p className="mt-4 text-slate-600">
              The website illustrates the four essential capabilities of the system so viewers can quickly
              understand what the project does and why it is useful.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">System Workflow</p>
            <h2 className="mt-3 text-3xl font-bold">How attendance moves through the system</h2>
            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Why it matters</p>
            <h3 className="mt-3 text-2xl font-bold">Project Benefits</h3>
            <div className="mt-6 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Problem Statement</p>
              <h3 className="mt-3 text-2xl font-bold">Manual attendance is inefficient</h3>
              <p className="mt-4 leading-8 text-slate-600">
                Traditional attendance systems rely on handwritten registers and repetitive manual work.
                This often causes calculation mistakes, missing records, extra paperwork, and delays in
                retrieving attendance data.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Project Solution</p>
              <h3 className="mt-3 text-2xl font-bold">A streamlined digital attendance system</h3>
              <p className="mt-4 leading-8 text-slate-300">
                The Attendance Management System digitizes the complete process with structured data storage
                and easy operations for creating, updating, deleting, and retrieving records. It improves
                speed, clarity, and operational efficiency across the institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Final Note</p>
          <h2 className="mt-3 text-3xl font-bold">A clean project presentation for your main Java system</h2>
          <p className="mt-5 max-w-3xl text-slate-300 leading-8">
            This website is designed as a blog-style showcase so you can present your Attendance Management
            System in a modern and understandable way during portfolio reviews, project demonstrations,
            submissions, or resume presentations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#blog"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Read Project Story
            </a>
            <a
              href="#features"
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Review Capabilities
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
