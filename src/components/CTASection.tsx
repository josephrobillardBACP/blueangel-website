import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { site } from "@/content/site";

interface CTASectionProps {
  title?: string;
  body?: string;
}

export default function CTASection({
  title = "Start the conversation.",
  body = "Every discussion is confidential and tailored to your unique goals. Reach out to our team directly.",
}: CTASectionProps) {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-azure/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative">
            <h2 className="display text-cream text-3xl sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">{body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${site.email}`} className="btn-accent">
                {site.email}
              </a>
              <Link
                to="/contact"
                className="btn border border-cream/25 text-cream hover:bg-cream hover:text-navy"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
