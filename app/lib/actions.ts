"use server";

export async function searchProperties(query: string) {
  const response = await fetch(
    `https://dummyjson.com/products/search?${encodeURIComponent(query)}`
  );
  if (!response.ok) throw new Error("Failed to search products");
  return response.json();
}
