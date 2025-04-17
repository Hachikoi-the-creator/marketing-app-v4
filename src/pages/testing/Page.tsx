// pages/test.tsx or a component
import { useState } from "react";
import IconPicker from "./IconPicker.tsx";

export default function TestPage() {
  const [selected, setSelected] = useState("");

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Pick an icon</h1>
      <IconPicker onSelect={(slug) => setSelected(slug)} />

      {selected && (
        <div className="flex items-center gap-2 pt-4">
          <img
            src={`https://cdn.simpleicons.org/${selected}`}
            alt={selected}
            className="w-8 h-8"
          />
          <span className="font-medium">{selected}</span>
        </div>
      )}
    </div>
  );
}
