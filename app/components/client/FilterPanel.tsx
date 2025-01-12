"use client";

import { useState } from "react";

export function FilterPanel({ onFilter }: { onFilter: (filters: Record<string, string>) => void }) {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onFilter({ location });
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
