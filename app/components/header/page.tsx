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
        <div className="flex ">
        <div className="m-3 border-solid border-2 border-wight-500">
        <Link href="/">Home</Link>
        </div>
        <div className="m-3 border-solid border-2 border-wight-500">
        <Link href="/properties">Properties</Link>
        </div>
        </div>

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
