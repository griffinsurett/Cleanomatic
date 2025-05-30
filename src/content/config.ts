// src/content/config.ts
import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Isolated Heading Schema – allows a string, an object, or an array of these.
export const headingSchema = z.union([
  z.string(),
  z.object({
    text: z.string(),
    class: z.string().optional(),
    tagName: z.string().optional(),
  }),
  z.array(
    z.union([
      z.string(),
      z.object({
        text: z.string(),
        class: z.string().optional(),
        tagName: z.string().optional(),
      }),
    ])
  ),
]);

// Isolated Description Schema – allows either a string or an object (no arrays)
export const descriptionSchema = z.union([
  z.string(),
  z.object({
    text: z.string(),
    class: z.string().optional(),
  }),
]);

const buttonSchema = z.object({
  text: z.string().optional(),
  class: z.string().optional(),
  link: z.string().optional(),
  variant: z.enum(["primary", "secondary", "underline"]).optional(),
});

const sectionSchema = z.object({
  collection: z.string().optional(),
  query: z.string().optional(),
  variant: z.string().optional(),
  component: z.union([z.function(), z.string()]).optional(),
  heading: headingSchema.optional(),
  description: descriptionSchema.optional(),
  descriptionClass: z.string().optional(),
  buttons: z.array(buttonSchema).optional(),
  buttonsSectionClass: z.string().optional(),
  sectionClass: z.string().optional(),
  itemsClass: z.string().optional(),
  itemClass: z.string().optional(),
  contentClass: z.string().optional(),
  headingAreaClass: z.string().optional(),
  topContentClass: z.string().optional(),
  itemPlacement: z.union([z.string(), z.array(z.string())]).optional(),
  childPlacement: z.union([z.string(), z.array(z.string())]).optional(),
  buttonsPlacement: z.union([z.string(), z.array(z.string())]).optional(),
  childSlotClass: z.string().optional(),
  manualOrder: z.boolean().optional(),
  sortBy: z.enum(["date", "title", "slug", "id"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  client: z.enum(["load", "idle", "visible"]).optional(),
  slider: z
    .object({
      enabled: z.boolean(),
      hideScrollbar: z.boolean().optional(), 
      autoplay: z.boolean().optional(),
      autoplaySpeed: z.number().optional(),
      infinite: z.boolean().optional(),
      slidesToShow: z.number().optional(),
      slidesToScroll: z.number().optional(),
      arrows: z.boolean().optional(),
    })
    .optional(),
});

export const QueryItemSchema = z.object({
  id: z.string(),
  label: z.string().optional(),
  slug: z.string().optional(),
  position: z.enum(["prepend", "append"]).optional(),
  parent: z.string().nullable().optional(),
  weight: z.number().optional(),
  respectHierarchy: z.boolean().default(false),
});

export const metaSchema = z.object({
  heading: headingSchema.optional(),
  description: descriptionSchema.optional(),
  layout: z.string().optional(),
  itemsLayout: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  ogType: z.string().optional(),
  hasPage: z.boolean().default(true),
  itemsHasPage: z.boolean().default(true),
  defaultSection: sectionSchema.optional(),
  sections: z.array(sectionSchema).optional(),
  itemsSections: z.array(sectionSchema).optional(),
  addToQuery: z.array(QueryItemSchema).optional(),
  addItemsToQuery: z.array(QueryItemSchema).optional(),
});

// Update baseSchema to include ogType as well.
const baseSchema = ({ image }: { image: Function }) =>
  z.object({
    title: z.string(),
    featuredImage: image().optional(),
    heading: headingSchema.optional(),
    description: descriptionSchema.optional(),
    order: z.number().optional(),
    layout: z.string().optional(),
    itemsLayout: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    ogType: z.string().optional(), // NEW: Include ogType in individual items too.
    hasPage: z.boolean().optional(),
    sections: z.array(sectionSchema).optional(),
    addToQuery: z.array(QueryItemSchema).optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
  });

export const collections = {
  services: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        icon: z.string().optional(),
        parent: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
  testimonials: defineCollection({
    schema: ({ image }) => baseSchema({ image }),
  }),
  faq: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        /**
         * Accept either a single service **or** an array of services.
         * Use service slugs. Astro turns them into full references.
         */
        services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
   serviceAreas: defineCollection({
    loader: file("src/content/serviceAreas/serviceAreas.json"), // file-loaded collection
    schema: ({ image }) => baseSchema({ image }).extend({
      tags: z.array(z.string()).optional(),
    }),
  }),
  gallery: defineCollection({
    loader: file("src/content/gallery/gallery.json"), // file-loaded collection
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        src: image(),
      }),
  }),
  benefits: defineCollection({
    loader: file("src/content/benefits/benefits.json"), // file-loaded collection
    schema: ({ image }) => baseSchema({ image }),
  }),
  missionVision: defineCollection({
    loader: file("src/content/missionVision/missionVision.json"),
    schema: ({ image }) => baseSchema({ image }),
  }),
  process: defineCollection({
    loader: file("src/content/process/ourProcess.json"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
          services: z
          .union([reference("services"), z.array(reference("services"))])
          .optional(),
      }),
  }),
};
