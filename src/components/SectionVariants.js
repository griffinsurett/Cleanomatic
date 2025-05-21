// src/components/SectionVariants.js

import HeroBg from "@/assets/cleanomatic-truck-1.jpg";
import FAQimg from "@/assets/glen-rushton-PjeZGaKunAI-unsplash.jpg";
import truck2 from "@/assets/truck2.jpg";
/**
 * SectionVariants
 *
 * Define a “variant” for each content collection so that
 * <Section variant="services" …> will pull in these defaults.
 * Any props you pass directly to <Section> will be appended
 * (not overwritten) on top of these.
 */
export const SectionVariants = {
  // ─────────── Primary Hero ───────────
  primaryHero: {
    sectionClass:
      "min-h-[100vh] md:min-h-[80vh] xl:min-h-[100vh] flex flex-col items-center justify-center bg-cover bg-fixed bg-center z-100 md:p-[var(--spacing-sm)] text-bg text-base md:text-xl",
    contentClass: "w-8/10 sm:mt-0 xl:mt-[-50px]",
    headingAreaClass: "xl:max-w-7/8",
    descriptionClass: "slide-up",
    backgroundMedia: {
      image: {
        src: HeroBg,                // you’ll need to import HeroBg at top
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed",
      },
      overlayClass: "bg-black opacity-50",
    },
    buttonsSectionClass: "flex justify-start mt-[var(--spacing-md)] order-last sm:mt-0 scale-up",
    topContentClass: "",            // no special top-content logic
    childPlacement: "top-content-section",
    childSlotClass: "",             // handled inline
    buttonsPlacement: "content-section",
  },
  // ─────────── Benefits ───────────
  imageCol: {
    sectionClass: "flex justify-center items-center text-left section-sm",
    contentClass:
      "flex justify-between items-start content-container py-[var(--spacing-2xl)] flex-col-reverse md:flex-row-reverse gap-[var(--spacing-xl)] lg:gap-[var(--spacing-2xl)]",
    itemsClass:
      "flex flex-col items-start justify-start gap-[var(--spacing-md)]",
    itemClass:"list-disc list-inside ml-6",
    buttonsSectionClass: "hidden",
    headingAreaClass: "flex flex-col",
    backgroundMedia: undefined,
    topContentClass: "flex flex-col gap-[var(--spacing-md)] w-full lg:w-12/20",
    itemPlacement: "top-content-section",
    childPlacement: "",
    childSlotClass: "lg:sticky lg:top-0 w-full lg:w-8/20",
    buttonsPlacement: "top-content-section",
    descriptionClass: "load slide-down"
  },

    imageCol2: {
    sectionClass: "flex justify-center items-center text-left section-sm",
    contentClass:
      "flex justify-between items-center content-container py-[var(--spacing-2xl)] flex-col-reverse md:flex-row-reverse gap-[var(--spacing-xl)] lg:gap-[var(--spacing-2xl)]",
    itemsClass:
      "flex flex-col items-start justify-start gap-[var(--spacing-md)]",
    itemClass: "",
    buttonsSectionClass: "hidden",
    headingAreaClass: "flex flex-col",
    backgroundMedia: undefined,
    topContentClass: "flex flex-col gap-[var(--spacing-md)]",
    itemPlacement: "top-content-section",
    childPlacement: "",
    childSlotClass: "lg:sticky lg:top-0",
    buttonsPlacement: "top-content-section",
    descriptionClass: "slide-down"
  },
imageCol3: {
    sectionClass: "flex flex-col lg:flex-row items-center justify-center",
    contentClass: "w-full flex flex-col justify-center items-center",
    childSlotClass: "flex flex-col w-9/10 items-start justify-center gap-[var(--spacing-xl)]",
  },
  // ─────────── FAQ ───────────
  faq: {
    sectionClass:
      "section-sm w-full flex justify-center items-center bg-bg py-[50px]",
    contentClass: "flex justify-between flex-col xl:flex-row content-container",
    itemsClass: "flex flex-col gap-[var(--spacing-lg)]",
    buttonsSectionClass: "hidden",
    headingAreaClass: "text-center lg:text-left load slide-left",
    backgroundMedia: undefined,
    topContentClass: "xl:mr-[var(--spacing-2xl)] xl:sticky xl:top-0",
    itemPlacement: "",
    childPlacement: "top-content-section",
    childSlotClass: "hidden lg:block",
  },

  // ─────────── Testimonials ───────────
  testimonials: {
    sectionClass:
      "section-main flex justify-center items-center w-full text-center text-bg px-[var(--spacing-xl)]",
    contentClass:
      "content-container load slide-up container flex flex-wrap flex-col justify-center items-center w-full py-[var(--spacing-2xl)] px-[var(--spacing-lg)]",
    itemsClass:
      "flex flex-wrap md:flex-nowrap justify-center items-stretch gap-[var(--spacing-xl)] my-[var(--spacing-lg)] md:my-[var(--spacing-2xl)]",
    backgroundMedia: {
      image: {
        src: truck2,
        imageClass: "filter brightness-50 bg-cover bg-center xl:bg-fixed load fade-in",
      },
      overlayClass: "bg-black opacity-50",
    },
    buttonsSectionClass: "load scale-up",
  },

  // ─────────── Gallery1 ───────────
  gallery: {
    sectionClass:
      "section-main flex justify-center items-center text-center px-[var(--spacing-xl)]",
    contentClass:
      "content-container flex flex-col justify-center w-full px-[var(--spacing-lg)]",
    itemsClass:
      "flex flex-wrap justify-between items-stretch gap-[var(--spacing-sm)]",
    buttonsSectionClass: "hidden",
    backgroundMedia: undefined,
  },

   // ─────────── Gallery ───────────
  gallery2: {
    sectionClass:
      "flex justify-center items-center text-center px-[var(--spacing-xl)]",
    contentClass:
      "content-container flex flex-col justify-center w-full px-[var(--spacing-lg)]",
    itemsClass:
      "flex flex-wrap justify-between items-stretch gap-[var(--spacing-sm)]",
    buttonsSectionClass: "hidden",
    backgroundMedia: undefined,
  },

  // ─────────── Mission & Vision ───────────
  missionVision: {
    sectionClass:
      "section-md flex justify-center items-center load slide-up text-center px-[var(--spacing-xl)] bg-accent text-bg",
    contentClass:
      "content-container flex flex-col justify-center w-full py-[var(--spacing-xl)] px-[var(--spacing-lg)]",
    itemsClass:
      "flex items-center gap-[var(--spacing-xl)] py-[var(--spacing-xl)] flex-col xl:flex-row",
    backgroundMedia: undefined,
  },

  // ─────────── Service Areas ───────────
  serviceAreas: {
    sectionClass:
      "section-lg py-[var(--spacing-lg)] flex justify-center items-center text-center bg-accent text-bg lg:px-[var(--spacing-lg)] load fade-in",
    contentClass: "content-container load slide-up",
    itemsClass:
      "w-full flex flex-wrap justify-center items-stretch gap-[var(--spacing-md)] my-[var(--spacing-lg)] md:my-[var(--spacing-2xl)]",
    buttonsSectionClass: "hidden",
    backgroundMedia: undefined,
  },

  // ─────────── Services ───────────
  services: {
    sectionClass:
      "section-main flex justify-center text-center bg-bg px-[var(--spacing-xl)]",
    contentClass:
      "box-container flex flex-col justify-center items-center py-[var(--spacing-xl)] px-[var(--spacing-lg)]",
    itemsClass:
      "flex flex-wrap justify-center items-center gap-[var(--spacing-xl)] my-[var(--spacing-lg)] md:my-[var(--spacing-2xl)]",
  },
    textCol: {
    sectionClass:"flex justify-start items-center w-full lg:w-12/20",
    childSlotClass:"flex flex-col",
    childPlacement:"top-content-section",
    itemClass:"list-decimal list-inside ml-6"
  },
   headAndP: {
    sectionClass:"flex justify-center items-center pb-[var(--spacing-2xl)]",
    contentClass:"flex justify-center items-center",
    childSlotClass:"flex flex-col",
    topContentClass:"text-left",
    childPlacement:"top-content-section",
  },
  contentImgSec: {
    sectionClass: "flex justify-center items-center text-center w-full lg:w-8/20 lg:sticky lg:top-0"
  }
};
