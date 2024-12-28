



const WRdetails = ({WR}) => {
    
   
    const {image, name, writer, version, design} = WR
   

    return (
        <div>


        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title book"> Name: {name} </h2>
            <p className=" book " >By: {writer} </p>
            <p className=" book " >Version: {version} </p>
            <p className=" book " >Design: {design} </p>
            <div className="card-actions">
              <button className="btn  bg-cyan-600 book text-white ">Buy Now</button>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default WRdetails;