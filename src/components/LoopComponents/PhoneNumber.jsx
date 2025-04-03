// src/components/LoopComponents/PhoneNumber.jsx
import { uppercase, formatPhoneNumber } from "@/utils/ContentUtils";

export default function PhoneNumber({ type, number }) {
  return (
    <li className="phone-menu-item">
      <a
        href={`tel:${number}`}
        className="flex flex-col items-center p-[var(--spacing-md)]"
      >
        <span className="phone-type h3">{uppercase(type)}:</span>
        <span className="phone-number h6">{formatPhoneNumber(number)}</span>
      </a>
    </li>
  );
}
