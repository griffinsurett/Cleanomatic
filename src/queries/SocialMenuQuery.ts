// src/queries/SocialMenuQuery.ts
import { SocialData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

/**
 * Maps the social media data from SocialData into query items,
 * then builds and returns the menu queries for the Social Media Menu.
 * (No icons are used in this query.)
 */
export async function getSocialMenuItems() {
  // Map each social item to a query item.
  const socialItems = SocialData.map((social) => ({
    id: social.title.toLowerCase(),
    label: social.title,
    // Use the URL as the slug.
    slug: social.href,
    // You can set a weight for ordering, adjust if needed.
    weight: 10,
  }));

  // Build and return the menu queries for the Social Menu.
  return await buildMenuQueries({ SocialMenu: socialItems });
}
