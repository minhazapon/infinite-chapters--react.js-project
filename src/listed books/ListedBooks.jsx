import ListTabs from "./ListTabs";



const ListedBooks = () => {



    return (
        <div className=" ml-20 mr-20 ">

            <div>

            <div className=" book-flex mt-16  ">
            <p className=" book book-text ">Book</p>
            <img className=" book-img " src="https://cdn-icons-gif.flaticon.com/12035/12035096.gif"  alt="" />
            </div>
            <hr></hr>

            </div>



            <div>
                <div>

                  <ListTabs></ListTabs>

                </div>
            </div>
             
        </div>
    );
};

export default ListedBooks;