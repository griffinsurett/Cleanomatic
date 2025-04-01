// src/components/PhoneNumber.jsx

import { uppercase } from "@/utils/ContentUtils";

export default function PhoneNumber({ type, number }) {
    return (
      <li className="phone-menu-item">
        <a
          href={`tel:${number}`}
          className="flex flex-col items-center p-[var(--spacing-md)]"
        >
          <span className="phone-type h2">{type}:</span>
          <span className="phone-number h6">{number}</span>
        </a>
      </li>
    );
  }
  