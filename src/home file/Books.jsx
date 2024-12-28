import { useEffect } from "react";
import { useState } from "react";
import BookDetails from "./BookDetails";
import { useLoaderData } from "react-router-dom";




const Books = () => {
   

    const [book, setBook] = useState([])

    useEffect( () => {

      fetch('http://localhost:5000/bookData')
      .then( res => res.json())
      .then( data => setBook(data) )

        
    } , [])

    // const bData = useLoaderData();




    return (
        <div className=" book-div  ">

            <div>
            <div className=" book-flex ">
            <p className=" book book-text ">Book</p>
            <img className=" book-img " src="https://cdn-icons-gif.flaticon.com/12035/12035096.gif"  alt="" />
            </div>
            <div className=" book-data-div ">
            <div className=" book-grid-div ">
            {book.map( book => <BookDetails book={book}></BookDetails> )}
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Books;