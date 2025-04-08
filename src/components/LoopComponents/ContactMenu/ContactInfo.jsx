// src/components/LoopComponents/ContactInfo.jsx
import { formatPhoneNumber } from "@/utils/ContentUtils";

export default function ContactInfo({ item }) {
  // Determine if the item is an email based on its id
  const isEmail = item.id === "email";
  // Build the correct link depending on the type: mailto: for email, tel: for phone numbers
  const linkHref = isEmail ? `mailto:${item.slug}` : `tel:${item.slug}`;

  return (
    <li className="contact-info-item">
      <span className="contact-type pr-[var(--spacing-xs)] h6 text-stroke italic">{item.label}:</span>
      <a href={linkHref}>
        <span className="contact-value">
          {isEmail ? item.slug : formatPhoneNumber(item.slug)}
        </span>
      </a>
    </li>
  );
}
