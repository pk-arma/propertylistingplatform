"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/properties?${search}`);
  };

  return (
    <header className="header">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/properties">Properties</Link>
      </nav>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
}
