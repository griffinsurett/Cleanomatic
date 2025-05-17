// src/components/ButtonVariants.js

// The shared base classes for all non-underline variants
export const baseButtonClasses =
  "rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] transform transition-all duration-300 ease-in-out text-base font-semibold text-stroke md:text-lg xl:text-2xl uppercase italic";

// Default icon behavior for each variant
const sharedIconDefaults = {
  hoverOnly: true,
  animateIcon: true,
};

// Per-variant definitions
export const ButtonVariants = {
  primary: {
    variantClasses:
      "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { ...sharedIconDefaults },
  },
  secondary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { ...sharedIconDefaults },
  },
  underline: {
    variantClasses: "",
    buttonClasses: "",      // no base styling for underline
    iconDefaults: {
      hoverOnly: false,     // always show underline icon
      animateIcon: false,   // no animation
    },
  },
};
