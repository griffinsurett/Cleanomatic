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
    buttonClasses: "", // Override default button classes for underline.
    iconDefaults: {
      className: "hidden",
      hoverOnly: false,
      animateIcon: false,
    },
  },
};

// Mark this component as async so we can await getImage()
export default async function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  children,
  className = "",
  href,
  variant, // "primary", "secondary", or "underline"
  iconProps = {}, // Consolidated icon properties
  showIcon = true, // New prop: controls whether an icon is rendered
  ...props
}) {
  // Default the variant to "primary" if not provided.
  variant = variant || "primary";

  // Pull in the variant defaults.
  const { variantClasses, buttonClasses, iconDefaults } =
    buttonVariantDefaults[variant] || buttonVariantDefaults.primary;

  // Merge the variant's icon defaults with any custom iconProps.
  const mergedIconProps = { ...iconDefaults, ...iconProps };
  const {
    element,               // The actual icon element (e.g., <img />, emoji, etc.)
    position = "right",    // "left" or "right"
    className: iconCustomClass = "", // Additional class for the icon container
    hoverOnly,             // from mergedIconProps
    animateIcon,           // from mergedIconProps
  } = mergedIconProps;

  // If showIcon is true and no custom element is provided,
  // use Astro's getImage to optimize the default icon.
  let optimizedDefaultIcon = null;
  if (showIcon && element === undefined) {
    optimizedDefaultIcon = await getImage({ src: DefaultIcon }, {
      format: "webp",
      quality: 20,
      width: 40, // Adjust width as needed
    });
  }

  // Set finalIcon to either the custom icon element or the optimized default icon.
  const finalIcon = showIcon
    ? element !== undefined
      ? element
      : // Display the optimized default icon.
        <img src={optimizedDefaultIcon?.src} alt="Icon" className="h-4 w-10" />
    : null;

  // Determine icon container classes if an icon is to be rendered.
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

  // If the merged icon props specify a class that contains "hidden", then just use that.
  const finalIconContainerClass = iconCustomClass.includes("hidden")
    ? iconCustomClass
    : `${iconCustomClass} ${iconContainerClasses}`.trim();

  // Ensure the button container is positioned relatively so that any inline icon behavior works.
  const containerDefaults = "relative inline-flex items-center group";

  // Build the overall class names.
  const combinedClassNames =
    variant === "underline"
      ? `${className} ${variantClasses} transition-colors duration-300 ease-in-out ${containerDefaults} inline-flex items-center group`
      : `${className} ${variantClasses} ${buttonClasses} ${containerDefaults}`;

  // Determine the component to render.
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
