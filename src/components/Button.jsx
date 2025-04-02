// src/components/Button.jsx

export default function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  children,
  classname = "",
  href,
  variant, // "primary", "secondary", or "underline"
  ...props
}) {
  // Default to an anchor tag if href is provided and no override is specified,
  // otherwise default to a button.
  const Component = ComponentProp ?? (href ? "a" : "button");

  // Default the variant to "primary" if not provided.
  variant = variant || "primary";

  // Define variant classes based on the `variant` prop.
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-primary)]";
  } else if (variant === "secondary") {
    variantClasses = "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)]";
  } else if (variant === "underline") {
    variantClasses = "underline text-[var(--color-primary)] hover:text-[var(--color-secondary)]";
  }

  // Use a different set of utility classes for the underline variant.
  const combinedClassNames =
    variant === "underline"
      ? `${classname} ${variantClasses} transition-colors duration-300 ease-in-out`
      : `${classname} ${variantClasses} rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] transform transition-all duration-300 ease-in-out h4`;

  return (
    <Component
      {...(Component === "button" ? { type } : {})}
      {...(Component === "a" ? { href } : {})}
      onClick={onClick}
      className={combinedClassNames}
      {...props}
    >
      {children}
    </Component>
  );
}
