import { useEffect, useState } from "react";
import ReadDetails from "./ReadDetails";




const ReadBook = () => {

    const [read, setRead] = useState([])


    useEffect( () =>{
    
      fetch('https://infinite-server-express-js.onrender.com/bookData')
      .then( res => res.json())
      .then( data => setRead(data) )
    } , [])
  


    return (
        <div className=" read-div flex justify-center mt-10 ">
            <div className=" grid  md:grid-cols-3 gap-20 ">
                {
                   read.map( read => <ReadDetails read={read}></ReadDetails> )
                }
            </div>
        </div>
    );
};

export default ReadBook;