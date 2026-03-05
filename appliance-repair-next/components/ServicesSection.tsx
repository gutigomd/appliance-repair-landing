import { SERVICES } from "@/lib/constants/services";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Appliance repair services
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-xl">
              Certified technicians for all major household appliances. We diagnose, repair and
              test your equipment on the same visit whenever possible.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            Serving single‑family homes, condos, rentals and small businesses.
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

