import { Property } from "../../lib/types";
import { PropertyCard } from "../client/PropertyCard";

export default function PropertyList({ properties=[] }: { properties: Property[] }) {
  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.id} data={property} />
      ))}
    </div>
  );
}
