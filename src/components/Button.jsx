// src/components/Button.jsx

export default function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  children,
  classname = "",
  href,
  variant, // "primary" or "secondary"
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
  }

  // Combine any passed class names with variant-specific classes, default padding,
  // no border-radius, and a transition on hover.
  const combinedClassNames = `${classname} ${variantClasses} rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] transform transition-all duration-300 ease-in-out`;

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
