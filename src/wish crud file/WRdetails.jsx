import Swal from "sweetalert2";




const WRdetails = ({WR}) => {
    
   
    const {_id, image, name, writer, version, design} = WR


    
    const handleDelete = delete_id =>{
          
      console.log(_id)

      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
         
          fetch(`https://infinite-server-express-js.onrender.com/wishlistData/${_id}`,{

              method: 'DELETE',

          })
          .then( res => res.json())
          .then( data => {
             
         console.log(data)
         if(data.deletedCount > 0){
         Swal.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
         });

         }})}
        });




     }

   

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
              <button onClick={ ()=> handleDelete(WR._id) } className="btn  bg-cyan-600 book text-white ">Delete</button>
              <button className="btn  bg-cyan-600 book text-white ">Update</button>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default WRdetails;