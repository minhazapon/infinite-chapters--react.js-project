import { useLoaderData } from "react-router-dom";



const PerBookDetails = () => {
   
    const data = useLoaderData()


    const {_id, image, book_name, writer, version, review,  pages, publish_year, rating, publisher} = data

    return (
        <div className=" per-book-div ">

            <div>











            </div>
            
        </div>
    );
};

export default PerBookDetails;