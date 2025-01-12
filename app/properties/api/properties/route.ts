import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   // Fetch properties based on query params
//   const properties = [
//     {
//       id: "1",
//       title: "Modern Apartment",
//       price: 1200,
//       location: "Downtown",
//       specs: { beds: 2, baths: 1, area: 850 },
//       images: ["/images/property1.jpg"],
//       status: "available",
//     },
//   ];
//   return NextResponse.json(properties);
// }

export async function fetchProducts() {
    const response = await fetch(
      `https://dummyjson.com/products/`
    );
    if (!response.ok) throw new Error("Failed to fetch products");
    return NextResponse.json(response)
  }