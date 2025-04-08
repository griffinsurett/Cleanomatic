// src/queries/BusinessHoursQuery.ts
import { SiteData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

/**
 * Maps the business hours from SiteData into query items,
 * then builds and returns the query for Business Hours.
 *
 * In each query item:
 * - The 'label' is the day of the week.
 * - The 'slug' is used to store the operating hours (i.e. the menu item value).
 */
export async function getBusinessHours() {
  // Define the order for the days of the week.
  const daysOrder: Record<string, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  const businessHoursItems = SiteData.businessHours.map((bh) => ({
    id: bh.day.toLowerCase(),
    label: bh.day,       // Day of the week is used as the label
    slug: bh.hours,      // Hours string will be the menu item displayed
    weight: daysOrder[bh.day] || 0,
  }));

  // Build and return the business hours query using the standard buildMenuQueries utility
  return await buildMenuQueries({ BusinessHours: businessHoursItems });
}
