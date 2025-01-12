"use client";

import { Property } from "../../lib/types";

interface PropertyCardProps {
  data: Property;
}

export function PropertyCard({ data }: PropertyCardProps) {
  return (
    <div className="property-card">
      <img src={data.images[0]} alt={data.title} />
      <h3>{data.title}</h3>
      <p>${data.price}</p>
    </div>
  );
}
