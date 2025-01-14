"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FilterPanel } from "../client/FilterPanel";

export default function Header() {
  const router = useRouter();

  // Updated `handleSearch` function for better readability and type safety
  const handleSearch = (filters: Record<string, string>) => {
    const query = new URLSearchParams(filters).toString();
    router.push(`/properties?${query}`);
  };

  return (
    <header className="header p-4 bg-gray-100 shadow-md">
      <nav className="flex items-center justify-between">
        {/* Navigation links */}
        <div className="flex gap-4">
          <Link href="/" className="px-4 py-2 border rounded hover:bg-gray-200">
            Home
          </Link>
          <Link href="/properties" className="px-4 py-2 border rounded hover:bg-gray-200">
            Properties
          </Link>
        </div>
      </nav>
      {/* Filter panel */}
      <div className="mt-4">
        <FilterPanel onFilter={handleSearch} />
      </div>
    </header>
  );
}
