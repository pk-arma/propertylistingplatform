'use client'

import { useEffect, useState } from "react";
import PropertyList from "../components/server/PropertyList";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
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
    fetchProducts(query, page);
  }, [query, page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  const handleSearch = () => {
    setPage(1);
    fetchProducts(query, 1);
  };

  return (
    <div>
      <h1>Products</h1>

      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products"
          style={{color:'black'}}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
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
