// components/IconPicker.tsx
import { useState, useMemo } from "react";
import * as simpleIcons from "simple-icons";

export default function IconPicker({
  onSelect,
}: {
  onSelect: (iconSlug: string) => void;
}) {
  const [query, setQuery] = useState("");

  // Convert the icons object to a searchable array
  const icons = useMemo(() => {
    return Object.values(simpleIcons)
      .filter((icon: any) => icon.slug && icon.title)
      .map((icon: any) => ({
        title: icon.title,
        slug: icon.slug,
      }));
  }, []);

  const filtered = useMemo(() => {
    return icons.filter((icon) =>
      icon.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, icons]);

  return (
    <div className="space-y-2 max-w-md">
      <input
        type="text"
        placeholder="Search icon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-3 py-2 rounded-md"
      />
      {query.length > 2 && (
        <div className="grid grid-cols-6 gap-3 max-h-64 overflow-y-auto">
          {filtered.map((icon) => (
            <button
              key={icon.slug}
              onClick={() => onSelect(icon.slug)}
              className="p-2 hover:bg-gray-100 rounded flex flex-col items-center text-xs"
            >
              <img
                src={`https://cdn.simpleicons.org/${icon.slug}`}
                alt={icon.slug}
                className="w-6 h-6"
              />
              {icon.slug}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
