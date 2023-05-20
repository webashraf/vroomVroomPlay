import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
const AllToys = () => {
  const { user } = useContext(ContextProvider);
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);
  const [sorting, setSorting] = useState("asc");
  useEffect(() => {
    fetch(`http://localhost:5000/allcars?sort=${sorting}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [sorting]);
  console.log(cars);

  // Handel Search //
  const handelSearch = (e) => {
    setSearch(e.target.value);
    fetch(`http://localhost:5000/toySearch/${search}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  };

  const handelSorting = (sortingMethod) => {
    console.log(sorting);
    setSorting(sortingMethod);
  };

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
            <button onClick={()=>handelSorting("asc")} className="btn bg-cyan-950">ASC</button>
            <button onClick={()=> handelSorting("dsc")} className="btn bg-cyan-900">DSC</button>
          </div>
          <div className="form-control ml-auto">
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
          </div>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {/* <th>Product Image</th> */}
              <th>Product Details</th>
              <th>Saller Info</th>
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
                    </h4>
                    <span>
                      <div className="flex gap-2 w-full ">
                        <strong>Total Ratings: </strong>
                        <Rating
                          className="mt-1"
                          placeholderRating={car.rating}
                          readonly
                          emptySymbol={
                            <AiOutlineStar className="text-yellow-500"></AiOutlineStar>
                          }
                          placeholderSymbol={
                            <AiFillStar className="text-yellow-500"></AiFillStar>
                          }
                        />
                        <h4 className="mt-1">{car.ratings}</h4>
                      </div>
                    </span>
                    <h4>
                      <strong>QTY : </strong> {car.availableQuantity}
                    </h4>
                  </td>
                  <td className=" uppercase">
                    <strong>Price : </strong> ${car.price}
                  </td>
                  <td>
                    <button className="btn bg-cyan-900 text-white">
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
