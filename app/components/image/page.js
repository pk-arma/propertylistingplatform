



const Image = ({data})=>{
    return (
        <div className="">
         <img src={data.images[0]} alt={data.title} /> 
        </div>
    )
}