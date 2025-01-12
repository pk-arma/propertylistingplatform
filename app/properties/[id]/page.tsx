import { searchProperties } from "../../lib/actions";

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
   console.log("params",params)
  const property = await searchProperties(params.id);
 
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-detail">
      <h1>{property.title}</h1>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <p>Beds: {property.specs.beds}</p>
      <p>Baths: {property.specs.baths}</p>
      <p>Area: {property.specs.area} sq ft</p>
      <img src={property.images[0]} alt={property.title} />
    </div>
  );
}
