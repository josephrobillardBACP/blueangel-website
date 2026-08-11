import { Link } from "react-router-dom";
import { ArrowUpRight, HeartPulse, Landmark, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import heroPhoto from "@/assets/home-doctor-patient.jpg";

const pillars = [
  {
    icon: Landmark,
    title: "Succession Planning",
    body: "Considering your next chapter? Learn how Blue Angel unlocks the full value of your practice while preserving your legacy of care.",
    to: "/succession",
  },
  {
    icon: Users,
    title: "Joining a Practice",
    body: "Want to go concierge? See how we help doctors build their own practice, minus the risk.",
    to: "/joining",
  },
  {
    icon: HeartPulse,
    title: "The Blue Angel Model",
    body: "Built in partnership with concierge physicians, our unique approach is designed to take your practice to the next level.",
    to: "/about",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-azure/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative grid gap-14 pt-16 pb-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">A new kind of partner for concierge medicine</span>
              <h1 className="display mt-5 text-5xl sm:text-6xl md:text-7xl">
                Empowering physicians,
                <span className="block text-azure">preserving autonomy.</span>
              </h1>
              <p className="lede mt-7 max-w-xl">
                Blue Angel is a leading provider of financial and operational support
                to a network of independent, concierge physicians. Discover how our
                doctor-first approach to partnership can set you up for success.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/succession" className="btn-primary">
                  Explore the model <ArrowUpRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Start a conversation
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Hero visual — doctor & patient */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-lg">
              {/* soft ambient glows */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-azure/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-navy/10">
                <img
                  src={heroPhoto}
                  alt="A Blue Angel physician with a patient"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
              </div>
              {/* gold accent dot */}
              <div className="absolute -right-2 top-8 h-3.5 w-3.5 rounded-full bg-gold shadow-soft" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">How we partner</span>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Three paths to a stronger practice.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link
                to={p.to}
                className="group flex h-full flex-col rounded-3xl bg-white/70 p-8 shadow-card ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cream transition-colors group-hover:bg-azure">
                  <p.icon size={22} />
                </span>
                <h3 className="mt-6 text-xl text-navy">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-azure">
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission band */}
      <section className="relative overflow-hidden bg-sand py-20 sm:py-28">
        {/* washed-out EKG / heartbeat medical graphic */}
        <svg
          className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2 text-navy/[0.07]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 100 H250 l28 0 22 -66 26 132 20 -104 16 38 14 0 H620 l28 0 22 -66 26 132 20 -104 16 38 14 0 H1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Why now</span>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Traditional primary care is in crisis. Relationship-based medicine is
              the bright spot.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-muted">
              <p>
                Physician burnout has reached all-time highs and declining
                reimbursement rates have made it harder than ever to make ends meet.
                The concierge model offers a solution: fewer patients per day, longer
                appointments, personalized care, and more time for prevention.
              </p>
              <p>
                We're not a private equity firm and we're not a large hospital
                system. Built in partnership with tenured concierge physicians, we're
                a new type of partner dedicated to supporting independent practices
                for the long term — not flipping them for profit.
              </p>
              <Link to="/about" className="btn-ghost px-0">
                Read our full mission <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
