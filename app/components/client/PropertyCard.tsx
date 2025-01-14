"use client";

import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import { Property } from "../../lib/types";

interface PropertyCardProps {
  data: Property;
}

export function PropertyCard({ data }: PropertyCardProps) {
  const router = useRouter();

  const handleClick = () => {
    console.log("data.id:", data.id);

    // Navigate to the property details page with query parameters
    router.push(`/properties/${data.id}`);
  };

  return (
    <div
      className="property-card"
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        cursor: "pointer",
        marginBottom: "16px",
        maxWidth: "300px",
      }}
    >
      {/* Display property image */}
      <img
        src={data.images[0]} // Assuming data.images[0] always exists
        width={200}
        height={100}
        alt={data.title}
        style={{ borderRadius: "8px", marginBottom: "8px" }}
      />
      <div>
        {/* Display property title */}
        <h1
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
            margin: "0 0 8px 0",
          }}
        >
          {data.title}
        </h1>

        {/* Display property price */}
        <p
          style={{
            color: "black",
            fontWeight: "500",
            margin: "0",
          }}
        >
          ${data.price}
        </p>
      </div>
    </div>
  );
}
