/**
 * Generates a WhatsApp deep link with a pre-filled message.
 * @param service - Optional service name (e.g. "Wedding Planning")
 * @param phone   - Your WhatsApp number with country code, no spaces/symbols
 */
export function getWhatsAppLink(
  service?: string,
  phone = "91XXXXXXXXXX" // ← Replace with your real number
): string {
  const message = service
    ? `Hi, I'm interested in your ${service} services. Please share more details and pricing.`
    : "Hi, I would like to enquire about your event management services.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
