import PropertyList from "@/app/components/server/PropertyList";
import { searchProperties } from "../../lib/actions";


export default async function PropertySearchPage({ searchParams }: { searchParams: string }) {
  const properties = await searchProperties(searchParams);
  return (
    <div>
      <h1>Search Results</h1>
      <PropertyList properties={properties} />
    </div>
  );
}
