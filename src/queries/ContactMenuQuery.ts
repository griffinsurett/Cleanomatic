// src/queries/ContactMenuQuery.ts
import { ContactData } from "@/content/SiteData";
import { buildMenuQueries } from "@/utils/ArrayQueryUtils";

/**
 * Maps the phone numbers and email address from ContactData into query items,
 * then builds and returns the menu queries for the Contact Menu.
 */
export async function getContactMenuItems() {
  // Map phone numbers into query items.
  const phoneItems = ContactData.phone.map((phone) => ({
    id: phone.type,
    label: phone.type.toUpperCase(),
    slug: phone.number,
    weight: phone.type === "office" ? 10 : 20,
  }));

  // Create an item for the email address.
  const emailItem = {
    id: "email",
    label: "EMAIL",
    slug: ContactData.email,
    weight: 30,
  };

  // Combine phone items and the email item.
  const ContactMenu = [...phoneItems, emailItem];

  // Build and return the menu queries for the Contact Menu.
  return await buildMenuQueries({ ContactMenu });
}
