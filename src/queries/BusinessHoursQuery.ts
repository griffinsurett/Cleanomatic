// src/queries/BusinessHoursQuery.ts
import { SiteData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

/**
 * Groups and maps the business hours from SiteData into query items,
 * then builds and returns the query for Business Hours.
 *
 * Requirements:
 * - Group Monday through Thursday as "Mon-Thurs" if all four days share identical hours.
 *   Otherwise, list each day individually (using full day names).
 * - Always output Friday as a single day with its full name.
 * - Group Saturday and Sunday as "Sat-Sun" if both share identical hours.
 *   Otherwise, list them individually (using full day names).
 *
 * In each query item:
 * - The 'label' is the day label (abbreviated for ranges, or full for single days).
 * - The 'slug' stores the operating hours.
 */
export async function getBusinessHours() {
  // Define an order mapping for consistency
  const daysOrder: Record<string, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  // Get the business hours data from SiteData.
  const businessHoursList = SiteData.businessHours;
  const result: Array<{ id: string; label: string; slug: string; weight: number }> = [];

  // Process Monday through Thursday:
  const monThursDays = ["Monday", "Tuesday", "Wednesday", "Thursday"];
  const monThursItems = businessHoursList.filter(item => monThursDays.includes(item.day));
  if (monThursItems.length === 4 && monThursItems.every(item => item.hours === monThursItems[0].hours)) {
    result.push({
      id: "mon-thurs",
      label: "Mon-Thurs",  // abbreviated when grouped
      slug: monThursItems[0].hours,
      weight: daysOrder["Monday"],
    });
  } else {
    // Use full day names individually if hours differ.
    monThursItems.forEach(item => {
      result.push({
        id: item.day.toLowerCase(),
        label: item.day, // full day name
        slug: item.hours,
        weight: daysOrder[item.day],
      });
    });
  }

  // Process Friday as a single day:
  const friday = businessHoursList.find(item => item.day === "Friday");
  if (friday) {
    result.push({
      id: "friday",
      label: friday.day, // full name "Friday"
      slug: friday.hours,
      weight: daysOrder["Friday"],
    });
  }

  // Process Saturday and Sunday:
  const weekendDays = ["Saturday", "Sunday"];
  const weekendItems = businessHoursList.filter(item => weekendDays.includes(item.day));
  if (weekendItems.length === 2 && weekendItems.every(item => item.hours === weekendItems[0].hours)) {
    result.push({
      id: "sat-sun",
      label: "Sat-Sun", // abbreviated group label
      slug: weekendItems[0].hours,
      weight: daysOrder["Saturday"],
    });
  } else {
    // Use full day names individually if hours differ.
    weekendItems.forEach(item => {
      result.push({
        id: item.day.toLowerCase(),
        label: item.day, // full day name
        slug: item.hours,
        weight: daysOrder[item.day],
      });
    });
  }

  // Build and return the business hours query using the standard buildMenuQueries utility.
  return await buildMenuQueries({ BusinessHours: result });
}
