// import PropertyList from "../components/server/PropertyList";
import { searchProperties } from "../lib/actions";

export default async function PropertiesPage({ searchParams }: { searchParams: string}) {
    const data  = await searchParams;
  const properties = await searchProperties(data)||[{}];
   console.log("hello",properties,data)

  return (
    <div>
      <h1>Properties</h1>
      {/* <PropertyList properties={properties} /> */}
    </div>
  );
}
