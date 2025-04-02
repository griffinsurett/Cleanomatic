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
    <li className="card p-[var(--spacing-xl)] flex md:flex-1/2 flex-col justify-center text-left">
      <div className="card-content md:w-9/12 flex flex-col items-start">
      <Heading tagName={"h3"} className="h3 mb-[var(--spacing-sm)] text-[var(--color-text)]">{item.data.title}</Heading>
      <p className="mb-[var(--spacing-sm)]">{item.data.description || item.body}</p>
      </div>
      {effectiveHasPage && (
        <Button variant={"underline"} href={`/${collectionName}/${item.slug}`}>
          View More
        </Button>
      )}
    </li>
  );
}