import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const AllToys = () => {
  const { user } = useContext(ContextProvider);
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);
  const [sorting, setSorting] = useState("asc");
  
  const navigate = useNavigate()
  useTitle("All Toy");
  useEffect(() => {
    fetch(`https://a-11-server-side.vercel.app/allcars?sort=${sorting}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [sorting]);
  console.log(cars);

  // Handel Search //
  const handelSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    fetch(`https://a-11-server-side.vercel.app/toySearch/${search}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  };

  const handelSorting = (sortingMethod) => {
    console.log(sorting);
    setSorting(sortingMethod);
  };
  if (!cars) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-10">
        <h2 className="text-3xl text-blue-950 font-mono">Loading....</h2>
        <progress className="progress w-56 text-center"></progress>
      </div>
    );
  }

  const handelDetailsBtn = (id) => {
    if (!user) {
      Swal.fire({
        title: 'You have to log in first to view details',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go to login page'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/details/${id}`)
        }
      })
    }
    else{
      navigate(`/details/${id}`)
    }
  }
 
  // console.log(cars);
  return (
    <div>
      <div className="  bg-[url('https://images.pexels.com/photos/6209485/pexels-photo-6209485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-bottom bg-no-repeat bg-cover">
        <div className="text-center py-20 mx-auto text-white bg-[#1648557b] h-full">
          <h1 className="text-7xl py-5 uppercase font-mono px-20">All Toys</h1>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex w-full justify-between my-10">
          <div className="btn-group">
            <button
              onClick={() => handelSorting("asc")}
              className={`btn ${
                sorting === "asc" ? "bg-cyan-950" : "bg-cyan-800"
              }`}
            >
              ASC
            </button>
            <button
              onClick={() => handelSorting("dsc")}
              className={`btn ${
                sorting === "dsc" ? "bg-cyan-950" : "bg-cyan-800"
              }`}
            >
              DSC
            </button>
          </div>
          <form className="form-control ml-auto">
            <div className="input-group">
              <input
                type="text"
                onChange={handelSearch}
                placeholder="Search…"
                className="input input-bordered"
              />
              <button
                onClick={handelSearch}
                className="btn btn-square bg-cyan-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {/* <th>Product Image</th> */}
              <th>Saller Info</th>
              <th>Product Details</th>
              <th>Price</th>
              <th>Update and Delete</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, i) => (
              <>
                <tr className="hover" key={car._id}>
                  <th>{i + 1}</th>
                  {/* <td>
                    <img src={car.photoUrl} className="w-[200px]" alt="" />
                  </td> */}

                  <td>
                    <h4 className="font-bold uppercase">{car.sallerName}</h4>
                  </td>
                  <td>
                    <h4 className="font-bold uppercase">{car.name}</h4>
                    <h4>
                      <strong>Sub category : </strong> {car.sub_category}
                      <strong>QTY : </strong> {car.availableQuantity}
                    </h4>
                  </td>
                  <td className=" uppercase">
                    <strong>Price : </strong> ${car.price}
                  </td>
                  <td>
                    <button  onClick={()=>handelDetailsBtn(car._id)}
                      className="btn bg-cyan-900 text-white btn-block"
                    >
                      View Details
                    </button>{" "}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
