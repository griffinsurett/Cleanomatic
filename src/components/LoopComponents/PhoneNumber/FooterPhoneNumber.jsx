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
      >
        <span className="phone-type pr-[var(--spacing-xs)]">{item.label}:</span>
        <span className="phone-number">{formatPhoneNumber(phoneNumber)}</span>
      </a>
    </li>
  );
}
