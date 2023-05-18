import { useContext } from "react";
import { ContextProvider } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(ContextProvider);

  console.log(user);
  const menu = (
    <>
      <Link to={"/"}>Home</Link>
      <li>All toy</li>
      <li>My toy</li>
      <li>Add a toy</li>
      <li>Blogs</li>
      <Link to={"/login"}>Login</Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
          <a className="btn btn-ghost normal-case text-xl">
          VroomVroomPlay.com
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-semibold">{menu}</ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="rounded-full w-10 overflow-hidden h-10">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
        </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
