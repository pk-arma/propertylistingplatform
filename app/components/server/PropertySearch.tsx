import { searchProperties } from "../../lib/actions";
import PropertyList from "./PropertyList";

export default async function PropertySearchPage({ searchParams }: { searchParams: string }) {

  const properties = await searchProperties(searchParams,1,1);

  return (
    <div>
      <h1>Search Results</h1>
      <PropertyList properties={properties} />
    </div>
  );
}
