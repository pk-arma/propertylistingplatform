import { getServerSideProps } from "next/dist/build/templates/pages";
type Props = Awaited<ReturnType<typeof getServerSideProps>>['searchParams']


export default async function PropertySearchPage({ searchParams }: Props ) {
   console.log("searchParams",searchParams)
  return (
    <div>
      <h1>Search Results</h1>
      
    </div>
  );
}
