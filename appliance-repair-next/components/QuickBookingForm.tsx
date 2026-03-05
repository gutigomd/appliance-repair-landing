"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validation/contact";
import type { ContactFormValues } from "@/types/forms";
import { submitContact } from "@/lib/api/contact";

const QuickBookingForm = () => {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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
    } else {
      setServerMessage("Thank you! We’ve received your request and will contact you shortly.");
      reset();
    }

    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 space-y-4"
      noValidate
      aria-label="Quick booking form"
    >
      <div>
        <label htmlFor="qb-name" className="block text-xs font-medium text-slate-700 mb-1">
          Full name
        </label>
        <input
          id="qb-name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="John Doe"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "qb-name-error" : undefined}
        />
        {errors.name && (
          <p id="qb-name-error" className="mt-1 text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="qb-phone" className="block text-xs font-medium text-slate-700 mb-1">
          Phone (US)
        </label>
        <input
          id="qb-phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="(555) 123‑4567"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "qb-phone-error" : undefined}
        />
        {errors.phone && (
          <p id="qb-phone-error" className="mt-1 text-xs text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="qb-description" className="block text-xs font-medium text-slate-700 mb-1">
          Brief issue description
        </label>
        <textarea
          id="qb-description"
          rows={3}
          {...register("description")}
          className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          placeholder="Brand, appliance type, what seems to be wrong..."
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "qb-description-error" : undefined}
        />
        {errors.description && (
          <p id="qb-description-error" className="mt-1 text-xs text-red-600">
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
        {submitting ? "Submitting..." : "Request Appointment"}
      </button>
    </form>
  );
};

export default QuickBookingForm;

