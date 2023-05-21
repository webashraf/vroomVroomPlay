import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
  const [singleCar, setSingleCar] = useState({});
  const { user } = useContext(ContextProvider);
  useTitle("My Toy");
  // console.log(user);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState("asc");

  useEffect(() => {
    if (!(user === null)) {
      // console.log(user?.email);
      fetch(`https://a-11-server-side.vercel.app/mycars?email=${user?.email}&sort=${sorting}`)
        .then((res) => res.json())
        .then((data) => setCars(data));
    }
  }, [loading, user, sorting]);
  // console.log(loading);

  const handelDeleteCar = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://a-11-server-side.vercel.app/deletecar/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json()",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(!loading);
            console.log(loading);
            console.log(data);
          });
      }
    });
  };

  // Update Toy Codes //
  // Update Toy Codes //
  // Update Toy Codes //
  // Update Toy Codes //
  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const availableQuantity = parseInt(form.availableQuantity.value);
    const description = form.description.value;
    const carId = form.carId.value;
    const toy = {
      photoUrl,
      name,
      price,
      availableQuantity,
      description,
    };
    console.log(toy);

    fetch(`https://a-11-server-side.vercel.app/updateAItem/${carId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(!loading);
        console.log(data);
      });
  };

  const handelPrimaryUpdateModal = (carId) => {
    console.log(carId);
    fetch(`https://a-11-server-side.vercel.app/singleCars/${carId}`)
      .then((res) => res.json())
      .then((data) => setSingleCar(data));
  };

  // console.log(singleCar);
  const { availableQuantity, description, name, photoUrl, price, _id } = singleCar;

  // Handel Sorting //
  const handelSorting = (sortingMethod) => {
    // console.log(sorting);
    setSorting(sortingMethod);
  };

  return (
    <div>
      <div>
        {/* The button to open modal */}
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="max-w-[600px] w-full h-[90vh] overflow-scroll rounded-lg bg-white">
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="">
                <button className="btn btn-square bg-cyan-900 pointer-events-none">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>{" "}
              </label>
            </div>

            <form onSubmit={handleUpdateToy} className="card-body">
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    defaultValue={photoUrl}
                    required
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    required
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={price}
                    required
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={availableQuantity}
                    name="availableQuantity"
                    placeholder="Available Quantity"
                    className="input input-bordered"
                  />
                  <input
                    type="text"
                    className="input input-bordered hidden"
                    defaultValue={_id}
                    name="carId"
                    id=""
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  placeholder="Description"
                  className="input input-bordered h-40"
                  id=""
                  cols=""
                  rows="20"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-cyan-950 textarea"
                  type="submit"
                  name=""
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Modal Content End */}
        {/* Modal Content End */}
        {/* Modal Content End */}
        {/* Modal Content End */}
        {/* Modal Content End */}
        {/* Modal Content End */}
        {/* Modal Content End */}
      </div>
      {cars.length < 1 && (
        <h1 className="text-4xl uppercase text-center py-20">Toy not found</h1>
      )}
      <div className="  bg-[url('https://images.pexels.com/photos/6209485/pexels-photo-6209485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-bottom bg-no-repeat bg-cover">
        <div className="text-center py-20 mx-auto text-white bg-[#1648557b] h-full">
          <h1 className="text-7xl py-5 uppercase font-mono px-20">My Toys</h1>
        </div>
      </div>
      <div className="btn-group pt-10">
            <button onClick={()=>handelSorting("asc")} className={`btn ${(sorting === "asc") ? "bg-cyan-950" : "bg-cyan-800"}`}>ASC</button>
            <button onClick={()=> handelSorting("dsc")} className={`btn ${(sorting === "dsc") ? "bg-cyan-950" :   "bg-cyan-800"}`}>DSC</button>
          </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
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
                  <td>
                    <img src={car.photoUrl} className="w-[200px]" alt="" />
                  </td>
                  <td>
                    <h4 className="font-bold uppercase">{car.name}</h4>
                    <h4 className="">
                      <strong>Description : </strong>{" "}
                      {car.description.slice(0, 40)}...
                    </h4>
                    <span>
                      <div className="flex gap-2 w-full ">
                        <strong>Total Ratings: </strong>
                        <Rating
                          className="mt-1"
                          placeholderRating={car.ratings}
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
                  </td>
                  <td>
                    <h4 className="font-bold uppercase">{car.sallerName}</h4>
                    <h4>{car.saller_email}</h4>
                  </td>
                  <td className=" uppercase">
                    <strong>Price : </strong> ${car.price}
                  </td>
                  <td>
                    <label
                      onClick={() => handelPrimaryUpdateModal(car._id)}
                      htmlFor="my-modal-6"
                      className="btn bg-cyan-900"
                    >
                      Update
                    </label>
                    {/* <button className="btn bg-cyan-900 text-white">
                      Update
                    </button>{" "} */}
                    &nbsp;
                    <button
                      onClick={() => handelDeleteCar(car._id)}
                      className="btn bg-cyan-950 text-white"
                    >
                      Delete
                    </button>
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

export default MyToy;
