import { NavLink } from "react-router-dom";



const Nav = () => {

    const navZ = <>
    
     <li className=" book  "><NavLink to='/'>Home</NavLink></li>
     <li className=" book  "><NavLink to='/listed'>Listed Books</NavLink></li>
     <li className=" book  "><NavLink to='/pages'>Pages to Read</NavLink></li>
     
    
    </>




    return (

      <div className=" bg-white ">

      <div className=" ml-16 mr-16 ">
      
      <div className="navbar bg-base-100 shadow-b-xl p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navZ}
            </ul>
          </div>
          <div className=" nav-logo ">
          <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/66/66168.png" alt="" />
          <a className=" book text-2xl">Infinite Chapters</a>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navZ}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <a className="btn book bg-cyan-600 text-white ">Sign In</a>
          <a className="btn book bg-cyan-600 text-white ">Sign Out</a>
        </div>
      </div>
          
      </div>
       
       <hr></hr>

      </div>
        
    );
};

export default Nav;