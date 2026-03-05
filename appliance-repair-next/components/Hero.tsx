import QuickBookingForm from "@/components/QuickBookingForm";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
            Licensed &amp; Insured · Same‑Day Service
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            Professional Appliance Repair{" "}
            <span className="text-primary">Across the U.S.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl">
            Fast, reliable repair for refrigerators, washers, dishwashers, ovens and more.
            Trusted by homeowners and property managers across the United States.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              Book Service
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/30"
            >
              View Services
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Same‑day &amp; next‑day appointments
            </div>
            <div className="h-3 w-px bg-slate-300 hidden sm:block" />
            <div>All major brands · 100% satisfaction guarantee</div>
          </div>
        </div>

        {/* Hero card */}
        <div className="lg:justify-self-end w-full max-w-md mx-auto mt-8 lg:mt-0">
          <div className="rounded-2xl bg-white shadow-lg shadow-slate-200 border border-slate-100 p-5 sm:p-7">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Need fast appliance repair?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Send us a short description and we’ll confirm your appointment.
            </p>
            <QuickBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

