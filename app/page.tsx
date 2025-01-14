'use client'
// app/page.tsx
import { useState, useEffect } from "react";
import Link from "next/link";


const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<[]>([]);
   console.log("properties",properties)
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch properties on page load
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=5"); // Limit to 5 for featured
        const data = await response.json();
        setProperties(data.products);  // Assuming `products` is the array of properties
      } catch (error) {
        console.error("Failed to fetch properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="home-page">
      {/* Platform Overview */}
      <section className="overview">
        <h1>Welcome to the Property Listing Platform</h1>
        <p>
          Discover the best properties, available for sale and rent. Our platform
          provides detailed listings with easy search and filter options. Find your dream property today!
        </p>
        <Link href="/properties">
          <button className="explore-btn">Explore All Properties</button>
        </Link>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-list">
          {/* {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.images[0]} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>Price: ${property.price}</p>
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
