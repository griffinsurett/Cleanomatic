// src/components/PhoneNumber.jsx

export default function PhoneNumber({ type, number }) {
    return (
      <li className="phone-menu-item">
        <a
          href={`tel:${number}`}
          className="flex flex-col items-center p-[var(--spacing-md)]"
        >
          <span className="phone-type font-semibold capitalize">{type}</span>
          <span className="phone-number">{number}</span>
        </a>
      </li>
    );
  }
  