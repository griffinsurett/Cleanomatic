import Button from "../Button.jsx";
import Heading from "../Heading.jsx";

/**
 * Card component for rendering an individual item.
 * It uses the effective hasPage value (item's own value if defined,
 * otherwise the default provided via Section meta) to decide
 * whether to render the "View More" button.
 */
export default function Card({ item, collectionName, HasPage }) {
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;
  return (
    <li className="card text-left p-[var(--spacing-xl)] text-text bg-bg max-w-full md:max-w-6/12 h-auto">
      <Heading tagName={"h3"} className="h3 mb-[var(--spacing-sm)]">{item.data.title}</Heading>
      <p className="mb-[var(--spacing-sm)]">{item.data.description || item.body}</p>
      {effectiveHasPage && (
        <Button variant={"underline"} href={`/${collectionName}/${item.slug}`}>
          View More
        </Button>
      )}
    </li>
  );
}
