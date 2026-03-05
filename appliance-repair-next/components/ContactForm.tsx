"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validation/contact";
import type { ContactFormValues } from "@/types/forms";
import { submitContact } from "@/lib/api/contact";

const ContactForm = () => {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      description: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    setServerMessage(null);
    setServerError(null);

    const result = await submitContact(values);

    if (!result.success) {
      setServerError(result.message);

      if (result.fieldErrors) {
        for (const [field, messages] of Object.entries(result.fieldErrors)) {
          const message = messages?.[0];
          if (!message) continue;
          if (field === "name" || field === "phone" || field === "description") {
            setError(field, { message });
          }
        }
      }
    } else {
      setServerMessage(
        "Thank you! Your request has been submitted. We will contact you shortly to confirm your appointment."
      );
      reset();
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Schedule your appliance repair
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-xl">
            Share a few details about your appliance and the issue you’re experiencing. Our
            coordinator will call you to confirm the exact time window and pricing.
          </p>
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <dt className="font-semibold text-slate-900">Hours</dt>
              <dd className="mt-1">
                Mon – Sat, 8:00 AM – 7:00 PM
                <br />
                Emergency support available
              </dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <dt className="font-semibold text-slate-900">Service area</dt>
              <dd className="mt-1">
                Major metro areas across the U.S.
                <br />
                Ask about your ZIP code
              </dd>
            </div>
          </dl>
        </div>

        <div className="w-full max-w-lg lg:justify-self-end">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-7">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Request service online
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              We typically respond within 15–30 minutes during business hours.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-4 space-y-4"
              noValidate
              aria-label="Service request form"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                  Phone number (US) <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="(555) 123‑4567"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                <p className="mt-1 text-[11px] text-slate-400">
                  Please enter a valid 10‑digit U.S. phone number.
                </p>
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Describe the problem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  {...register("description")}
                  className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
                  placeholder="Appliance type, brand, age, what’s happening, and any error codes on the display."
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? "description-error" : undefined}
                />
                {errors.description && (
                  <p id="description-error" className="mt-1 text-xs text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {serverError && (
                <p className="text-xs text-red-600" role="alert">
                  {serverError}
                </p>
              )}

              {serverMessage && (
                <p className="text-xs text-emerald-600" role="status">
                  {serverMessage}
                </p>
              )}

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

