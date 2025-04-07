// src/components/Button.jsx
import DefaultIcon from "@/assets/cleanomaticvanright3.png";
import { getImage } from "astro:assets";

// Default base button classes for non-underline variants.
const baseButtonClasses =
  "rounded-none py-[var(--spacing-md)] px-[var(--spacing-2xl)] transform transition-all duration-300 ease-in-out text-base font-semibold text-stroke md:text-lg xl:text-2xl uppercase italic";

// Consolidate variant defaults here.
const buttonVariantDefaults = {
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
    variantClasses:
      "underline text-[var(--color-primary)] hover:text-[var(--color-secondary)]",
    buttonClasses: "",
    iconDefaults: {
      className: "hidden",
      hoverOnly: false,
      animateIcon: false,
    },
  },
};

export default async function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  children,
  className = "",
  href,
  variant, // "primary", "secondary", or "underline"
  iconProps = {}, // Consolidated icon properties
  showIcon = true, // Controls whether an icon is rendered
  ...props
}) {
  variant = variant || "primary";
  const { variantClasses, buttonClasses, iconDefaults } =
    buttonVariantDefaults[variant] || buttonVariantDefaults.primary;

  const mergedIconProps = { ...iconDefaults, ...iconProps };
  const {
    element,
    position = "right",
    className: iconCustomClass = "",
    hoverOnly,
    animateIcon,
  } = mergedIconProps;

  // If no custom icon is provided, use getImage to generate an optimized default icon.
  let optimizedDefaultIcon = null;
  if (showIcon && element === undefined) {
    optimizedDefaultIcon = await getImage({ src: DefaultIcon }, {
      format: "webp",
      quality: 80,
      width: 40,    // Explicit width in pixels
      height: 40,   // Explicit height in pixels
      sizes: "40px" // Inform the browser the rendered image is ~40px wide
    });
  }

  const finalIcon = showIcon
    ? element !== undefined
      ? element
      : <img src={optimizedDefaultIcon?.src} alt="Icon" className="h-4 w-10" />
    : null;

  let iconContainerClasses = "";
  if (finalIcon) {
    if (hoverOnly) {
      if (animateIcon) {
        iconContainerClasses =
          position === "right"
            ? "inline-flex w-0 overflow-hidden transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:ml-2 group-hover:translate-x-0 group-hover:opacity-100"
            : "inline-flex w-0 overflow-hidden transform translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:mr-2 group-hover:translate-x-0 group-hover:opacity-100";
      } else {
        iconContainerClasses =
          position === "right"
            ? "inline-flex w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:ml-2 group-hover:opacity-100"
            : "inline-flex w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:mr-2 group-hover:opacity-100";
      }
    } else {
      iconContainerClasses =
        position === "right" ? "ml-2 inline-flex" : "mr-2 inline-flex";
    }
  }

  const finalIconContainerClass = iconCustomClass.includes("hidden")
    ? iconCustomClass
    : `${iconCustomClass} ${iconContainerClasses}`.trim();

  const containerDefaults = "relative inline-flex items-center group";
  const combinedClassNames =
    variant === "underline"
      ? `${className} ${variantClasses} transition-colors duration-300 ease-in-out ${containerDefaults} inline-flex items-center group`
      : `${className} ${variantClasses} ${buttonClasses} ${containerDefaults}`;

  const ComponentFinal = ComponentProp ?? (href ? "a" : "button");

  return (
    <ComponentFinal
      {...(ComponentFinal === "button" ? { type } : {})}
      {...(ComponentFinal === "a" ? { href } : {})}
      onClick={onClick}
      className={combinedClassNames}
      {...props}
    >
      {children}
      {finalIcon && position === "right" && (
        <span className={finalIconContainerClass}>
          {finalIcon}
        </span>
      )}
      {finalIcon && position === "left" && (
        <span className={finalIconContainerClass}>
          {finalIcon}
        </span>
      )}
    </ComponentFinal>
  );
}
