// src/utils/componentMapping.ts

// Eagerly import all .jsx and .astro files from the LoopComponents directory.
const modules = import.meta.glob('../components/LoopComponents/*.{jsx,astro}', { eager: true });

// Create a mapping object from file name (without extension) to the default export.
const componentMapping: Record<string, any> = {};

for (const path in modules) {
  // Extract the file name from the path, e.g. "ServiceCard" from "../components/LoopComponents/ServiceCard.astro"
  const fileNameMatch = path.match(/\/([^\/]+)\.(jsx|astro)$/);
  if (fileNameMatch) {
    const fileName = fileNameMatch[1];
    componentMapping[fileName] = modules[path].default;
  }
}

export { componentMapping };
