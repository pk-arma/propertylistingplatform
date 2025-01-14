import { getServerSideProps } from "next/dist/build/templates/pages";
import { searchProperties } from "../../lib/actions";
type Props = Awaited<ReturnType<typeof getServerSideProps>>['props']
// Define the correct props type


// Update the page component with the correct type annotation
async function PropertyPage({ params }: Props) {
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
      {/* <img src={property.images[0]} alt={property.title} /> */}
    </div>
  );
}
export default PropertyPage;

