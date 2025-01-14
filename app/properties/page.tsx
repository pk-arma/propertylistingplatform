

import PropertyList from "../components/server/PropertyList";
import { searchProperties } from "../lib/actions";
import Pagination from "./pagination/page";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string; page?: string }>;
}) {
  // Wait for searchParams to resolve
  const { location = "",page=1 } = await searchParams;

  // Fetch properties based on location and page
  const currentPage = Number(page)
  const properties = await searchProperties(location, 1,currentPage);
 console.log('properties',properties?.products)
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
        <PropertyList properties={properties?.products} />
      </div>

      {/* Pagination */}
      <div className="pagination">
        <Pagination totalItems={properties?.products.length} itemsPerPage={properties?.page} currentPage={currentPage}/>
      </div>
    </div>
  );
}
