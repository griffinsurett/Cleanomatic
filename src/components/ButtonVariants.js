// src/components/ButtonVariants.js

export const baseButtonClasses =
  "rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] transform transition-all duration-300 ease-in-out text-base font-semibold text-stroke md:text-lg xl:text-2xl uppercase italic";

export const ButtonVariants = {
  primary: {
    variantClasses:
      "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: {
      hoverOnly: true,
      animateIcon: true,
    },
  },
  secondary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: {
      hoverOnly: true,
      animateIcon: true,
    },
  },
  underline: {
    variantClasses: "",
    buttonClasses: "", // Overrides base button classes
    iconDefaults: {
      hoverOnly: false,
      animateIcon: false,
    },
  },
};
