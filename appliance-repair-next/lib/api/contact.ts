import type { ContactFormValues } from "@/types/forms";

export type ContactApiResponse =
  | { success: true }
  | { success: false; message: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(
  values: ContactFormValues
): Promise<ContactApiResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values)
  });

  const data = (await response.json().catch(() => ({}))) as Partial<ContactApiResponse>;

  if (!response.ok) {
    return {
      success: false,
      message: data && "message" in data && typeof data.message === "string"
        ? data.message
        : "Unable to submit your request. Please try again.",
      fieldErrors:
        data && "fieldErrors" in data && typeof data.fieldErrors === "object"
          ? (data.fieldErrors as Record<string, string[]>)
          : undefined
    };
  }

  return { success: true };
}

