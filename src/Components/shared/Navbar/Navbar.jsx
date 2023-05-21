import { useContext } from "react";
import { ContextProvider } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import "./Navba.css";

const Navbar = () => {
  const { user, handleSignOut, loader } = useContext(ContextProvider);
  // if (loader) {
  //   return (
  //     <div className="flex justify-center items-center h-screen flex-col gap-10">
  //       <h2 className="text-3xl text-blue-950 font-mono">Loading....</h2>
  //       <progress className="progress w-56 text-center"></progress>
  //     </div>
  //   );
  // }
  const SignOutUser = () => {
    handleSignOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  console.log(user);
  const menu = (
    <>
    <Link to={"/"} className="">VroomVroomPlay</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/alltoys"}>All toy</Link>
      <li>Blogs</li>
      {user && (
        <>
          <Link to={"/mytoy"}>My toy</Link>
          <Link to={"/addtoy"}>Add a toy</Link>
          <li onClick={SignOutUser}>Log Out</li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b-8 border-b-cyan-950 py-6">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-6 font-semibold "
            >
              {menu}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl w-[200px]">
            <img className="w-full" src="../../../../public/Untitled-1-Recovered.png" alt="" />
            
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
            {menu}
          </ul>
        </div>
        <div className="navbar-end relative">
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
            <Link
              className="btn bg-blue-950 text-white"
              to={"/login"}
            >
              Login
            </Link>
          )}
          <h2 className="userNameAuth absolute top-10 font-bold text-blue-900 bg-white p-5 shadow-2xl rounded-xl z-10 -right-1 hidden">{user?.displayName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
