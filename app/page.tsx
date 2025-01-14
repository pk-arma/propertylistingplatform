import Link from "next/link";
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
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

      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-list">
        </div>
      </section>
    </div>
  );
};

export default HomePage;
