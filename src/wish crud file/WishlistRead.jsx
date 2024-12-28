import { useEffect } from "react";
import { useState } from "react";
import WRdetails from "./WRdetails";



const WishlistRead = () => {

    
    const [WR, setWR] = useState([])

    useEffect( () =>{

    fetch('https://infinite-server-express-js.onrender.com/wishlistData')
    .then( res => res.json())
    .then( data => setWR(data) )

    } , [])


    return (
        <div className=" mt-10 mb-10  flex justify-start ">

         <div className=" grid grid-cols-2 gap-10 ">

          
            {

               WR.map( WR => <WRdetails WR={WR} ></WRdetails>   )

            }



         </div>
            
        </div>
    );
};

export default WishlistRead;