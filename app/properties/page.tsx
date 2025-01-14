import PropertyList from "../components/server/PropertyList";
import { searchProperties } from "../lib/actions";
import { useRouter } from "next/router";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string; page?: string }>;
}) {
  // Wait for searchParams to resolve
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { location = "", page = "1" } = await searchParams;

  // Fetch properties based on location and page
  const properties = await searchProperties(location, parseInt(page, 10),1);

  // Pagination controls
  const handleNext = () => {
    const nextPage = parseInt(page, 10) + 1;
    router.push(`/properties?location=${location}&page=${nextPage}`);
  };

  const handlePrevious = () => {
    const prevPage = Math.max(parseInt(page, 10) - 1, 1);
    router.push(`/properties?location=${location}&page=${prevPage}`);
  };

 

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
        <button onClick={handlePrevious} disabled={parseInt(page, 10) === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
