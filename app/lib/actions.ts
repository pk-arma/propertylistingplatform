"use server";

export  const searchProperties = async (searchQuery: string, limit: number,skip:number) => {
  try {
    const url = searchQuery
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchQuery
        )}&limit=${limit}&skip=${skip}`
       :`https://dummyjson.com/products/search?limit=${limit}&skip=${skip}`

    const response = await fetch(url);
    const data = await response.json();
return data;
  } catch (err) {
     console.log(err)
  } finally {
  }
};

export  const searchByIdProperties = async (id:number|undefined) => {
  try {
    const url =`https://dummyjson.com/products/${id}`

    const response = await fetch(url);
    const data = await response.json();
return data;
  } catch (err) {
     console.log(err)
  } finally {
  }
};
