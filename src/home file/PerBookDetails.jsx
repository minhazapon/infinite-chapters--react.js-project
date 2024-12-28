import { useLoaderData } from "react-router-dom";



const PerBookDetails = () => {
   
    const data = useLoaderData()


    const {_id, image, book_name, writer, version, review,  pages, publish_year, rating, publisher} = data

    return (

        <div className=" per-book-div ">
        <div className=" per-flex ">
        <div className="max-w-lg p-4 shadow-md per-bg  text-gray-100">
        <div>
        <p className=" IC-text book ">Infinite Chapters ({book_name}) </p>
        </div>
        <div className="space-y-4">
        <div className="space-y-2">
        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
        <div className="flex items-center text-xs">
        <span> {version} </span>
        </div>
        </div>
        <div className="space-y-2">
        <a rel="noopener noreferrer" href="#" className="block">
        <h3 className="text-xl font-semibold text-white book"> By: {writer} </h3>
        <h3 className="text-xl font-semibold text-white book"> pages: {pages} </h3>
        <h3 className="text-xl font-semibold text-white book"> publish_year: {publish_year} </h3>
        <h3 className="text-xl font-semibold text-white book"> rating: {rating} </h3>
        <h3 className="text-xl font-semibold text-white book"> publisher: {publisher} </h3>
        </a>
        <p className="leading-snug text-gray-400 book"> {review} </p>
        </div>
        </div>
        <div>
        <button className=" mt-5 bg-cyan-600 text-white book btn ">Add in favorite list</button>
        </div>
        </div>
        </div>
        </div>

    );
};

export default PerBookDetails;