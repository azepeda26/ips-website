"use client";
import useReveal from "@/hooks/useReveal";
export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1F44] via-[#0E2A5E] to-[#081933] text-white animate-fadeIn">

      {/* NAVIGATION */}
<header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A1F44]/70 border-b border-white/10 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <div className="text-white font-serif text-base tracking-tight font-medium">
      Axiom8 Real Estate
    </div>

    {/* Nav Links */}
    <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
  <a href="#services" className="relative group transition">
    <span className="group-hover:text-white transition">Platform</span>
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#C0A062] transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#contact" className="relative group transition">
    <span className="group-hover:text-white transition">Strategy</span>
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#C0A062] transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#contact" className="relative group transition">
    <span className="group-hover:text-white transition">Contact</span>
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#C0A062] transition-all duration-300 group-hover:w-full"></span>
  </a>
</nav>

    {/* CTA */}
    <a
      href="#contact"
  className="hidden md:inline-block rounded-lg px-5 py-2 text-sm font-semibold bg-[#C0A062] text-[#0A1F44] transition hover:opacity-90"
    >
      Schedule
    </a>

  </div>
</header>
{/* HERO */}
<section className="pt-28 pb-20 sm:pb-24 px-6 max-w-7xl mx-auto">

  <h2 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-serif font-semibold tracking-tight leading-[1.05] max-w-4xl">
    Institutional Property Management in California
  </h2>

  <p className="mt-6 text-white/75 max-w-2xl text-lg leading-8">
    Axiom8 Real Estate delivers institutional-grade property management, asset
    oversight, and performance-driven execution for multifamily and commercial
    owners across California.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row gap-3">
    <a
      href="#contact"
  className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-[#C0A062] text-[#0A1F44] shadow-sm transition hover:opacity-90 active:scale-[0.98]"
    >
      Schedule Asset Strategy Session
    </a>

    <a
      href="#services"
      className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold ring-1 ring-white/20 transition hover:bg-white/10"
    >
      View Services
    </a>
  </div>
</section>           

{/* VALUE PROPOSITION */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/10">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C0A062] mb-6">
  Platform Philosophy
</p>
          <h3 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white">
            Built for Asset Performance
          </h3>

          <p className="mt-6 text-white/75 leading-8 max-w-3xl">
            Axiom8 Real Estate operates with an institutional framework designed to
            maximize Net Operating Income, reduce operational volatility, and preserve
            long-term asset value. Our structure integrates brokerage insight,
            asset-level analytics, and operational execution under one coordinated platform.
          </p>

          <p className="mt-6 text-white/75 leading-8 max-w-3xl">
            Axiom8 Operating Platform Execution functions as the performance engine of the platform,
            delivering disciplined execution, transparent reporting, and structured cost control
            without compromising resident experience.
          </p>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="reveal px-6 py-24 max-w-7xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#C0A062] mb-6">
  Operating Structure
</p>
<h3 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-12">
  Integrated Platform Architecture
</h3>
<div className="grid gap-12 lg:grid-cols-2 items-stretch">

<div className="card-motion reveal rounded-2xl bg-white/[0.05] p-8 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.30)] transition duration-300 ease-out hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
  <h3 className="text-[20px] font-semibold text-white">
    Axiom8 Real Estate (Platform)
  </h3>

    <ul className="mt-6 space-y-5 text-[15px] leading-7 text-white/85">
              <li>
                <span className="font-semibold text-white">Brokerage:</span>{" "}
                acquisitions, dispositions, valuation support, and market intelligence.
              </li>
              <li>
                <span className="font-semibold text-white">Asset Management:</span>{" "}
                budgets, reforecasting, business plans, and hold/sell execution.
              </li>
              <li>
                <span className="font-semibold text-white">Project & CapEx:</span>{" "}
                scope, bids, contractor oversight, and schedule/cost control.
              </li>
              <li>
                <span className="font-semibold text-white">Facilities Management:</span>{" "}
                preventive maintenance, vendor standards, and life-safety readiness.
              </li>
            </ul>
          </div>

<div className="card-motion reveal rounded-2xl bg-white/[0.06] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
  <h3 className="text-[20px] font-semibold text-white font-serif tracking-tight">
    Operating Platform Execution
  </h3>
            <ul className="mt-6 space-y-5 text-[15px] leading-7 text-white/85">
              <li>
                <span className="font-semibold text-white">Performance Management:</span>{" "}
                KPI-led operations with owner visibility and weekly cadence.
              </li>
              <li>
                <span className="font-semibold text-white">Revenue Strategy:</span>{" "}
                rent positioning, renewals, leasing velocity, and loss-to-lease capture.
              </li>
              <li>
                <span className="font-semibold text-white">Collections Control:</span>{" "}
                A/R analytics, early intervention workflows, and structured resolution.
              </li>
              <li>
                <span className="font-semibold text-white">Asset Preservation:</span>{" "}
                service standards, curb appeal, preventive maintenance, and capital alignment.
              </li>
            </ul>
        </div>
      </div>
      </section>
      {/* PERFORMANCE FRAMEWORK */}
<section className="reveal px-6 py-28 max-w-7xl mx-auto border-t border-white/10 bg-white/[0.02]">
  <p className="text-[11px] tracking-[0.4em] uppercase text-[#C0A062] mb-6">
    Performance Discipline
  </p>

  <h3 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white">
    Structured NOI Growth Through Operational Control
  </h3>

  <p className="mt-6 text-white/75 leading-8 max-w-2xl">
    Axiom8 Real Estate operates under a disciplined performance framework
    designed to increase Net Operating Income through revenue optimization,
    delinquency control, cost containment, and asset preservation.
  </p>

  <div className="mt-16 grid gap-16 md:grid-cols-4 text-sm text-white/85">
    <div>
      <h4 className="font-semibold text-white">Revenue Strategy</h4>
      <p className="mt-3 leading-7">
        Market positioning, lease trade-out capture, renewal strategy,
        and demand pacing aligned with asset objectives.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-white">Expense Control</h4>
      <p className="mt-3 leading-7">
        Vendor standardization, preventative maintenance planning,
        and structured budget oversight to protect margin.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-white">Collections Discipline</h4>
      <p className="mt-3 leading-7">
        A/R analytics, early intervention workflows, and controlled
        resolution pathways to reduce delinquency volatility.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-white">Asset Preservation</h4>
      <p className="mt-3 leading-7">
        Capital alignment, curb appeal standards, and lifecycle
        planning to protect long-term asset value.
      </p>
    </div>
  </div>
</section>
{/* STRATEGY SESSION */}
<section id="contact" className="reveal px-6 py-32 bg-white/[0.04] border-t border-white/10">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[11px] tracking-[0.4em] uppercase text-[#C0A062] mb-6">
      Strategic Alignment
    </p>

    <h3 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white">
      Schedule an Asset Strategy Session
    </h3>

    <p className="mt-6 text-white/75 leading-8 max-w-3xl mx-auto">
      We partner with institutional owners and investment groups seeking
      operational precision, reporting transparency, and long-term value
      alignment. Let’s evaluate your asset objectives.
    </p>

<div className="mt-12">
  <a
    href="mailto:info@axiom8re.com"
    className="inline-block rounded-2xl px-8 py-4 text-sm font-semibold shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(0,0,0,0.5)] active:scale-[0.98]"
    style={{ backgroundColor: "#C0A062", color: "#0A1F44" }}
  >
    Initiate Strategy Discussion
  </a>
</div>
</div>
</section>
            {/* FOOTER */}
     <footer className="border-t border-white/10 py-12 text-sm text-white/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Axiom8 Real Estate 
          </div>
          <div>
            California Licensed Real Estate Broker · DRE# 02071085
          </div>
        </div>
      </footer>
    </main>
  );
}