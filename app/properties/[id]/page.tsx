import Image from "next/image";
import { searchByIdProperties } from "../../lib/actions";
// Define the correct props type


// Update the page component with the correct type annotation 
 async function PropertyPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const slug = (await params).id;
  const property = await searchByIdProperties(Number(slug));
     console.log('res',property)
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="product-card" >
      <h1 className="">{property?.title}</h1>
    <div className="property-detail flex">
      <div className="product-card">
      <h3> name: {property.title}</h3>
      <p><span className=""> Price:</span> ${property.price}</p>
      <p> Descriptions:{property.description}</p>
      {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
    </div>
    <div className="product-card">
    <Image
      src={property.thumbnail}
      width={500}
      height={500}
      alt={property.title}
    />
    </div>
    </div>
    
    </div>
  );
}
export default PropertyPage;

