// src/components/Button.jsx
import ButtonIcon from "./ButtonIcon";
import { ButtonVariants, baseButtonClasses } from "./ButtonVariants.js";

export default async function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  disabled,
  children,
  className = "",
  href,
  variant,         // "primary", "secondary", or "underline"
  iconProps = {},
  showIcon = true,
  ...props
}) {
  // 1) Determine variant defaults
  variant = variant || "primary";
  const {
    variantClasses,
    buttonClasses,
    iconDefaults,
  } = ButtonVariants[variant] || ButtonVariants.primary;

  // 2) Merge icon defaults
  const mergedIconProps = { ...iconDefaults, ...iconProps };
  const {
    element,
    position = "right",
    className: iconCustomClass = "",
    hoverOnly,
    animateIcon,
  } = mergedIconProps;

  // 3) Build container classes
  const containerDefaults = "relative inline-flex items-center group";
  const combinedButtonClasses =
    variant === "underline"
      ? `${className} ${variantClasses} transition-colors duration-300 ease-in-out ${containerDefaults}`
      : `${className} ${variantClasses} ${buttonClasses || baseButtonClasses} ${containerDefaults}`;

  // 4) Handle disabled / element choice
  const computedDisabled = disabled ?? false;
  const ComponentFinal = computedDisabled
    ? "button"
    : ComponentProp || (href ? "a" : "button");

  // 5) Prepare props for <button> vs. <a>
  const additionalProps = { ...props };
  if (ComponentFinal === "button") {
    additionalProps.disabled = computedDisabled;
  } else {
    additionalProps.href = computedDisabled ? undefined : href;
    if (computedDisabled) {
      // grey out & remove pointer events
      combinedButtonClasses += " pointer-events-none opacity-50";
    }
  }

  // 6) Render
  return (
    <ComponentFinal
      {...(ComponentFinal === "button"
        ? { type }
        : { href: additionalProps.href })}
      onClick={computedDisabled ? undefined : onClick}
      className={combinedButtonClasses}
      {...(ComponentFinal === "button" ? additionalProps : {})}
    >
      {showIcon && position === "left" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          iconCustomClass={iconCustomClass}
        />
      )}
      {children}
      {showIcon && position === "right" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          iconCustomClass={iconCustomClass}
        />
      )}
    </ComponentFinal>
  );
}
