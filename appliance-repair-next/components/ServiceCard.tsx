import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
};

const ServiceIcon = ({ icon }: { icon: Service["icon"] }) => {
  if (icon === "fridge") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="6" y="3" width="12" height="18" rx="2" ry="2" strokeWidth="1.5" />
        <line x1="6" y1="11" x2="18" y2="11" strokeWidth="1.5" />
        <line x1="9" y1="8" x2="9" y2="9" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="14" x2="9" y2="15" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "washer") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="3" width="16" height="18" rx="2" ry="2" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="4" strokeWidth="1.5" />
        <circle cx="9" cy="7" r="0.7" fill="currentColor" />
        <circle cx="12" cy="7" r="0.7" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "dishwasher") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="1.5" />
        <line x1="4" y1="10" x2="20" y2="10" strokeWidth="1.2" />
        <circle cx="9" cy="15" r="1.2" strokeWidth="1.2" />
        <circle cx="15" cy="15" r="1.2" strokeWidth="1.2" />
      </svg>
    );
  }

  // oven
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="1.5" />
      <rect x="7" y="9" width="10" height="8" rx="1" ry="1" strokeWidth="1.5" />
      <circle cx="8" cy="7" r="0.7" fill="currentColor" />
      <circle cx="12" cy="7" r="0.7" fill="currentColor" />
      <circle cx="16" cy="7" r="0.7" fill="currentColor" />
    </svg>
  );
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, teaser, description } = service;

  return (
    <article className="flip-card group rounded-xl border border-slate-100 bg-transparent shadow-sm transition-shadow hover:shadow-md overflow-hidden focus-within:shadow-md">
      <div className="flip-card-inner relative h-full min-h-[210px] sm:min-h-[230px]">
        {/* Front */}
        <div className="flip-card-face absolute inset-0 rounded-xl bg-slate-50/80 border border-slate-100 flex">
          <div className="p-5 flex flex-col">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
              {teaser ?? "Hover to see details"}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-back absolute inset-0 rounded-xl bg-primary text-white border border-primary/20 flex">
          <div className="p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs text-slate-50">{description.main}</p>
            </div>
            {description.note && (
              <p className="mt-3 text-[11px] text-slate-100/90">
                {description.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;

