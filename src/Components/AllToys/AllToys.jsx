import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
const AllToys = () => {
  const { user } = useContext(ContextProvider);
  console.log(user);
  const [cars, setCars] = useState([]);
  useEffect(() => {
      fetch(`https://a-11-server-side.vercel.app/mycars`)
        .then((res) => res.json())
        .then((data) => setCars(data));
  }, [user]);

  console.log(cars);
  return (
    <div>
      <div className="overflow-x-auto">
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
                    <h4>{car.saller_email}</h4>
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
