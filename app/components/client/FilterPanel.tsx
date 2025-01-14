"use client";

import { useState } from "react";

interface FilterPanelProps {
  onFilter: (filters: Record<string, string>) => void;
}

export function FilterPanel({ onFilter }: FilterPanelProps) {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim() === "") {
      alert("Please enter a location to search.");
      return;
    }
    onFilter({ location });
  };

  return (
    <div className="flex items-center gap-2">
      {/* Search input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search by location"
        className="px-4 py-2 border rounded w-64 focus:ring focus:outline-none"
      />
      {/* Search button */}
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}
