"use client";

import { Property } from "../../lib/types";

interface PropertyCardProps {
  data: Property;
}

export function PropertyCard({ data }: PropertyCardProps) {
    console.log("data.images[0]",data.images[0])
  return (
    <div className="property-card ">
      <img src={data.images[0]} width={200}
          height={100} alt={data.title}/>
      {/* <Image
          src={data.images[0]}
          alt="Remote Image"
          width={600}
          height={400}
          priority
          className="rounded-lg"
        /> */}
        <div className="">
      <h1 style={{color:'black',fontSize:'25px', fontWeight:'500'}}>{data.title}</h1>
      <p style={{color:'black', fontWeight:'500'}}>${data.price}</p>
        </div>
    </div>
  );
}
