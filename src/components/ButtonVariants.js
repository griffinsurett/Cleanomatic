// src/components/ButtonVariants.js

// Shared base classes: spacing, container layout, and transition
export const baseButtonClasses =
  "rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] relative inline-flex items-center group transition-colors duration-300 ease-in-out  text-base font-semibold text-stroke md:text-lg xl:text-2xl uppercase italic";// Shared default icon behavior
const sharedIconDefaults = { hoverOnly: true, animateIcon: true };

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
    variantClasses:
      "underline text-bg hover:text-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: { hoverOnly: false, animateIcon: false },
  },
};
