'use client'

import { useEffect, useState } from "react";
import PropertyList from "../components/server/PropertyList";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { location?: string | undefined;};
}) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const limit = 10;

  const fetchProducts = async (searchQuery: string, page: number) => {
    setLoading(true);
    setError('');

    try {
      const skip = (page - 1) * limit;
      const url = searchQuery
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
            searchQuery
          )}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
       console.log(err)
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(searchParams.location||"", page);
  }, [searchParams?.location, page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };



  return (
    <div>
      <h1>Products List</h1>


      {loading && <div className="loading-skeleton">
  <div className="loading-card"></div>
  <div className="loading-card"></div>
  <div className="loading-card"></div>
</div>}
      {error && <p>{error}</p>}

      <div>
        <PropertyList properties={products}/>
      </div>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
