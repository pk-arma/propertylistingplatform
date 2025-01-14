

import PropertyList from "../components/server/PropertyList";
import { searchProperties } from "../lib/actions";
import Pagination from "./pagination/page";
import Search from "./search/page";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string; page?: string }>;
}) {
  const { location = "",page=1 } = await searchParams;
  const currentPage = Number(page)
  const properties = await searchProperties(location, 1,currentPage);
 console.log('properties',properties?.products)
  return (
    <div>
      <h1>Products List</h1>
      <Search placeholder="Search items..." />
      <div className="loading-skeleton">
        <div className="loading-card"></div>
        <div className="loading-card"></div>
        <div className="loading-card"></div>
      </div>

      <div>
        <PropertyList properties={properties?.products} />
      </div>

      <div className="pagination">
        <Pagination totalItems={properties?.products.length} itemsPerPage={properties?.page} currentPage={currentPage}/>
      </div>
    </div>
  );
}
