// src/components/LoopComponents/PhoneNumber.jsx
import { uppercase, formatPhoneNumber } from "@/utils/ContentUtils";

export default function PhoneNumber({ type, number }) {
  return (
    <li className="phone-menu-item">
      <a
        href={`tel:${number}`}
        className="flex flex-col items-center p-[var(--spacing-md)]"
      >
        <span className="phone-type h4 lg:h3 italic">{uppercase(type)}:</span>
        <span className="phone-number h5 lg:h4 italic">{formatPhoneNumber(number)}</span>
      </a>
    </li>
  );
}
