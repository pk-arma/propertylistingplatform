import PropertyList from "../components/server/PropertyList";
import { searchProperties } from "../lib/actions";
import Link from "next/link";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string; page?: string }>;
}) {
  // Wait for searchParams to resolve
  const { location = "", page = "1" } = await searchParams;

  // Fetch properties based on location and page
  const properties = await searchProperties(location, 1, parseInt(page, 10));

  // Parse page number for pagination
  const currentPage = parseInt(page, 10);
  const nextPage = currentPage + 1;
  const prevPage = Math.max(currentPage - 1, 1);

  return (
    <div>
      <h1>Products List</h1>

      {/* Loading skeleton */}
      <div className="loading-skeleton">
        <div className="loading-card"></div>
        <div className="loading-card"></div>
        <div className="loading-card"></div>
      </div>

      {/* Property List */}
      <div>
        <PropertyList properties={properties} />
      </div>

      {/* Pagination */}
      <div className="pagination">
        {/* Previous Page Link */}
        <Link href={`/properties?location=${location}&page=${prevPage}`}>
          <button disabled={currentPage === 1}>Previous</button>
        </Link>
        <span>Page {currentPage}</span>
        {/* Next Page Link */}
        <Link href={`/properties?location=${location}&page=${nextPage}`}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
