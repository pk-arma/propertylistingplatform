"use server";

const limit = 10;
export  const searchProperties = async (searchQuery: string, page: number,id:number) => {
  try {
    const skip = (page - 1) * limit;
    const url = searchQuery
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchQuery
        )} &limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products/${id}?limit=${limit}&skip=${skip}`;

    const response = await fetch(url);
    const data = await response.json();
return data;
  } catch (err) {
     console.log(err)
  } finally {
  }
};
