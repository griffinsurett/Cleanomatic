// src/components/LoopComponents/PhoneNumber.jsx
import { formatPhoneNumber } from "@/utils/ContentUtils";

export default function PhoneNumber({ item }) {
  // Use the phone number directly since it doesn't have the "tel:" prefix
  const phoneNumber = item.slug; 
  return (
    <article className="phone-menu-item">
      <a
        // Prepend "tel:" for the clickable link
        href={`tel:${phoneNumber}`}
        className="flex flex-col items-center p-[var(--spacing-md)]"
      >
        <span className="phone-type h4 lg:h3 italic">{item.label}:</span>
        <span className="phone-number h5 lg:h3 italic">{formatPhoneNumber(phoneNumber)}</span>
      </a>
    </article>
  );
}
