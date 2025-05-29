import Button from "@/components/Button.jsx";
import Heading from "@/components/Heading.jsx";
import { formatPhoneNumber } from "@/utils/ContentUtils";

const iconsvgClass = "h-7 w-7 transition-default hover:h-9 hover:w-9 cursor-pointer";

// Updated Mail Icon Component (envelope)
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconsvgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Inline Phone Icon Component remains the same
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconsvgClass} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.09-.21 11.72 11.72 0 0 0 3.66 1.17 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 1.17 3.66 1 1 0 0 1-.21 1.09l-2.2 2.2z" />
  </svg>
);

/**
 * MenuCard component
 * 
 * Renders a card for an individual menu item.
 * Expects an "item" prop with at least the following structure:
 * {
 *   id: string,
 *   label: string,
 *   slug: string
 * }
 * 
 * If the item's id is "email" or the slug contains an "@" symbol, it prepends 'mailto:'.
 * Otherwise, it assumes a phone number and prepends 'tel:'.
 * A circular container wraps the icon (which is clickable) and is rendered above the heading.
 * 
 * You can customize the appearance by passing additional className or props.
 */
export default function MenuCard({ item, className = "", ...props }) {
  // Determine if the item is an email.
  const isEmail = item.id === "email" || (typeof item.slug === "string" && item.slug.includes("@"));
  // Prepend correct protocol.
  const linkHref = isEmail ? `mailto:${item.slug}` : `tel:${item.slug}`;
  // Format contact value.
  const formattedValue = isEmail ? item.slug : formatPhoneNumber(item.slug);

  return (
    <article
      className={`menu-card load scale-up w-full h-[25vh] text-center flex flex-col justify-center items-center border border-[var(--color-border)] shadow-sm ${className}`}
      {...props}
    >
      {/* Icon container wrapped in a clickable link */}
      <a href={linkHref} className="rounded-full bg-accent text-bg flex items-center justify-center p-[var(--spacing-md)] mb-[var(--spacing-sm)]">
        {isEmail ? <MailIcon /> : <PhoneIcon />}
      </a>
      
      {/* Heading for the menu item */}
      <Heading tagName="h4" className="my-[var(--spacing-sm)] text-center h4">
        {item.label}
      </Heading>
      
      {/* Button for the formatted contact value */}
      <Button
        variant="underline"
        href={linkHref}
        className="text-center flex items-center justify-center"
        showIcon={false}
      >
        {formattedValue}
      </Button>
    </article>
  );
}
