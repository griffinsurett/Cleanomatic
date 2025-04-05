// src/components/LoopComponents/PhoneNumber.jsx
import { formatPhoneNumber } from "@/utils/ContentUtils";

export default function PhoneNumber({ item }) {
  // Use the phone number directly since it doesn't have the "tel:" prefix
  const phoneNumber = item.slug; 
  return (
    <li className="phone-menu-item">
      <a
        // Prepend "tel:" for the clickable link
        href={`tel:${phoneNumber}`}
        className="flex items-center p-[var(--spacing-md)]"
      >
        <span className="phone-type h5 italic pr-[var(--spacing-sm)]">{item.label}:</span>
        <span className="phone-number h5 italic">{formatPhoneNumber(phoneNumber)}</span>
      </a>
    </li>
  );
}
