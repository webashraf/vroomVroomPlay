import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextProvider } from "../../../AuthProvider/AuthProvider";
import "./Navba.css";

const Navbar = () => {
  const { user, handleSignOut, loader, preUser } = useContext(ContextProvider);
  console.log("Userrrrrrrrrrrrrrrrrrrrrrrrr", preUser);
  const SignOutUser = () => {
    handleSignOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const menu = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-4 border-b-cyan-950" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-4 border-b-cyan-950" : ""
        }
        to={"/alltoys"}
      >
        All toy
      </NavLink>
      {user || preUser && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 border-b-cyan-950" : ""
            }
            to={"/mytoy"}
          >
            My toy
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 border-b-cyan-950" : ""
            }
            to={"/addtoy"}
          >
            Add a toy
          </NavLink>

          <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-4 border-b-cyan-950" : ""
        }
        to={"/add-champions"}
      >
        Add Champions
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-4 border-b-cyan-950" : ""
        }
        to={"/blog"}
      >
        Blogs
      </NavLink>
           {user && <li onClick={SignOutUser}>Log Out</li>}
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-white border-b-8 border-b-cyan-950 py-6">



        <div className="navbar-start  w-full md:w-auto justify-between ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>


            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 gap-6 font-semibold z-30"
            >
              {menu}
            </ul>
            
          </div>

          <div className="flex items-center flex-col md:flex-row gap-5 ">
            <Link
              to={"/"}
              className="btn btn-ghost normal-case text-xl w-[200px]"
            >
              <img
                className="w-full"
                src="https://i.ibb.co/3Whk9x4/Untitled-1-Recovered.png"
                alt=""
              />
            </Link>
          </div>
          
        </div>

        
        <div className="navbar-end hidden lg:flex gap-5  md:ml-auto md:mr-5">
          <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
            {menu}
          </ul>
        <div className="relative">
          {user ? (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar userProPic"
            >
              <div className="rounded-full w-10 overflow-hidden h-10 ">
                <img src={!loader && user?.photoURL} alt="" />
              </div>
            </label>
          ) : (
            <Link className="btn btn-sm bg-blue-950 text-white" to={"/login"}>
              Login
            </Link>
          )}
          <h2 className="userNameAuth absolute top-10 font-bold text-blue-900 bg-white p-5 shadow-2xl rounded-xl z-10 -right-1 hidden">
            {user?.displayName}
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
