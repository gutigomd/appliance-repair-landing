import type { Service } from "@/types/service";

export const SERVICES: Service[] = [
  {
    id: "fridge",
    title: "Refrigerator Repair",
    icon: "fridge",
    teaser: "Cooling issues, leaks, ice makers",
    description: {
      main:
        "Cooling issues, leaks, ice maker failures, noisy operation and emergency same‑day service to protect your food.",
      note: "Most repairs completed in a single visit; parts stocked for major U.S. brands."
    }
  },
  {
    id: "washer",
    title: "Washer Repair",
    icon: "washer",
    teaser: "Leaks, no‑spin, drainage problems",
    description: {
      main:
        "Leaks, no‑spin, off‑balance drums, drainage problems and error codes for front‑ and top‑loading machines.",
      note: "We service high‑efficiency, traditional and stackable units from leading brands."
    }
  },
  {
    id: "dishwasher",
    title: "Dishwasher Repair",
    icon: "dishwasher",
    teaser: "Dirty dishes, leaks, standing water",
    description: {
      main:
        "Poor cleaning results, standing water, leaks, unusual noises and control panel issues fixed quickly.",
      note: "We handle built‑in, panel‑ready and compact dishwashers in modern U.S. kitchens."
    }
  },
  {
    id: "oven",
    title: "Oven & Range Repair",
    icon: "oven",
    teaser: "Uneven heating, ignition issues",
    description: {
      main:
        "Uneven baking, burner ignition failures, temperature inaccuracies and control issues on gas and electric units.",
      note: "We service slide‑in, freestanding and wall ovens, including convection models."
    }
  }
];

