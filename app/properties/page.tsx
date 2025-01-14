

import PropertyList from "../components/server/PropertyList";
import { searchProperties } from "../lib/actions";
import {Pagination} from "../components/pagination/page";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string; page?: string }>;
}) {
  const { location = "", page=1} = await searchParams;
 console.log("locations",location,page)
  const properties = await searchProperties(location||"",10,Number(page)||3);
  return (
    <div>
      <h1>Products List</h1>
      <div className="loading-skeleton">
        <div className="loading-card"></div>
        <div className="loading-card"></div>
        <div className="loading-card"></div>
      </div>

      <div>
        <PropertyList properties={properties?.products} />
      </div>

      <div className="pagination">
        <Pagination totalItems={properties?.products?.length} itemsPerPage={9} currentPage={Number(page)}/>
      </div>
    </div>
  );
}
