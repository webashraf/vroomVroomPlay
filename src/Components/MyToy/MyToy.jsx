import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MyToy = () => {
  const { user } = useContext(ContextProvider);
  console.log(user);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/mycars?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setCars(data));
    }
  }, [user]);

  console.log(cars);



  const handelDeleteCar = id => {
    console.log(id);
    fetch(`http://localhost:5000/deletecar/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json()"
        } 
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }










  return (
    <div>
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
                    <h4><strong>Description : </strong> {car.description}</h4>
                    <span>
                    <div className="flex gap-2 w-full ">
                    <strong>Total Ratings: </strong>
                          <Rating className="mt-1"
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
                  </td>
                  <td>
                    <h4 className="font-bold uppercase">{car.sallerName}</h4>
                    <h4>{car.seller_email}</h4>
                  </td>
                  <td className=" uppercase"><strong>Price : </strong> ${car.price}</td>
                  <td>
                    <button className="btn bg-cyan-900 text-white">
                      Update
                    </button>{" "}
                    &nbsp;
                    <button onClick={()=>handelDeleteCar(car._id)} className="btn bg-cyan-950 text-white">
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
