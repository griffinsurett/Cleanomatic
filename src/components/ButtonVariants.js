// src/components/ButtonVariants.js
import DefaultIcon from "@/assets/cleanomaticvanright3.png";

// Shared base classes
export const baseButtonClasses =
  "rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] relative inline-flex items-center group transition-colors duration-300 ease-in-out text-base font-semibold text-stroke md:text-lg xl:text-2xl uppercase italic";

const sharedIconDefaults = {
  hoverOnly: true,
  animateIcon: true
};

export const ButtonVariants = {
  primary: {
    variantClasses:
      "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-secondary)]",
    buttonClasses: baseButtonClasses,
    // default to your PNG icon—user can override via iconProps
    iconDefaults: {
      ...sharedIconDefaults,
      src: DefaultIcon,
      position: "right"
    }
  },
  secondary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
    iconDefaults: {
      ...sharedIconDefaults,
      src: DefaultIcon,
      position: "right"
    }
  },
  underline: {
    variantClasses:
      "hover:underline hover:decoration-[var(--color-bg)]",
    // buttonClasses: baseButtonClasses,
    iconDefaults: {
      hoverOnly: false,
      animateIcon: false,
      position: "right"
    }
  }
};
