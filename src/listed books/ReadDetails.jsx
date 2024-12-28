


const ReadDetails = ({read}) => {

    const {_id, image, book_name, writer, version, review,  pages, publish_year, rating, publisher} = read

    return (

        <div>
        <div className=" book-details-div ">
        <div>
        <div>
        <div>
        <img className=" details-image " src={image} alt="" />
        </div>
        <div className=" mt-5 yi-text  ">
        <p className=" book young-text ">Young Adult</p>
        <p className=" book young-text ">Identity</p>
        </div>
        <div>
        <p className=" book-name book">{book_name}</p>
        </div>
        <div>
        <p className=" book-name book">By: {writer}</p>
        </div>
        <div className=" hr-div ">
        <hr className="  "></hr>
        </div>
        <div className=" vr-div ">
        <p className=" book ">{version}</p>
        <div className=" rating-div ">
        <p>{rating}</p>
        <div className="rating rating-xs">
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ReadDetails;