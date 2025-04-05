// src/queries/PhoneNumberMenuQuery.ts
import { ContactData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

/**
 * Maps the phone numbers from ContactData into query items,
 * then builds the menu queries.
 */
export async function getPhoneNumberMenuItems() {
  // Map phone numbers into query items without any formatting modifications.
  const PhoneNumberMenu = ContactData.phone.map((phone) => ({
    id: phone.type,
    label: phone.type.toUpperCase(),
    // Store the raw phone number.
    slug: phone.number,
    weight: phone.type === "office" ? 10 : 20,
  }));

  // Build and return the menu queries for the phone number items.
  return await buildMenuQueries({ PhoneNumberMenu });
}
