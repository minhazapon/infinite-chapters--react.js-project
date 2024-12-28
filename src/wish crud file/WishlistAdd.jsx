import Swal from "sweetalert2";




const WishlistAdd = () => {



    const handleAdd = e =>{

      e.preventDefault()
      const form = e.target
      const image = form.image.value 
      const name = form.name.value 
      const writer = form.writer.value 
      const version = form.version.value 
      const design = form.design.value 
      const allItems = { image, name, writer, version, design }
      console.log(allItems)
      
      fetch('http://localhost:5000/wishlistData', {

        method:'POST',
        headers:{
           
            'content-type': 'application/json'

        },
        body: JSON.stringify(allItems)
      })

      .then( res => res.json())
      .then( data => {

       console.log(data)

       if(data.insertedId){

       Swal.fire({
       title: 'Successfully added!',
       text: 'Do you want to continue',
       icon: 'success',
       confirmButtonText: 'Cool'
       })
       form.reset()  
       }}) 


    }



    return (
        <div className=" ml-20 mr-20 mb-20 mt-20 bg-slate-100 p-10 rounded-xl ">

        <div class="max-w-md mx-auto bg-white shadow-md rounded-md p-6 book">
          <h2 class="text-2xl font-bold mb-4">Add WishList</h2>
          <form onSubmit={handleAdd} >
        
            <div class="mb-4">
            <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
            <input type="url" placeholder="Image" required  class=" p-5 mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500" name="image" id="" />
            </div>
        
            <div class="mb-4">
              <label for="name" class="  block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                required
                class="mt-1 p-5 block w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
        
           
            <div class="mb-4">
              <label for="writer" class="block text-sm font-medium text-gray-700">Writer</label>
              <input
                type="text"
                id="writer"
                name="writer"
                placeholder="Enter writer's name"
                required
                class="mt-1 p-5 block w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
        
           
            <div class="mb-4">
              <label for="version" class="block text-sm font-medium text-gray-700">Version</label>
              <input
                type="text"
                id="version"
                name="version"
                placeholder="Enter version"
                required
                class="mt-1 p-5 block w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
        
         
            <div class="mb-4">
              <label for="design" class="block text-sm font-medium text-gray-700">Design</label>
              <input
                type="text"
                id="design"
                name="design"
                placeholder="Enter design"
                required
                class="mt-1 p-5 block w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
            <input  class=" btn w-full bg-cyan-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit" value="Add" />
            </div>
          </form>
        </div>

            
        </div>
    );
};

export default WishlistAdd;