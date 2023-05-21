import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  const car = useLoaderData();
  useTitle("Details")
  console.log(car);
  const {
    availableQuantity,
    description,
    name,
    photoUrl,
    price,
    _id,
    ratings,
    sallerName,
    saller_email
  } = car;
  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-10">
        <h2 className="text-3xl text-blue-950 font-mono">Loading....</h2>
        <progress className="progress w-56 text-center"></progress>
      </div>
    );
  }
  return (
    <div>
      <div className="  bg-[url('https://images.pexels.com/photos/6209485/pexels-photo-6209485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-bottom bg-no-repeat bg-cover">
        <div className="text-center py-20 mx-auto text-white bg-[#1648557b] h-full">
          <h1 className="text-7xl py-5 uppercase font-mono px-20">Details Car</h1>
        </div>
      </div>
      <div className="flex justify-between gap-10 items-center mt-10">
        <div className="w-1/2 overflow-hidden">
          <img
            className="w-full hover:scale-150 transition-all"
            src={photoUrl}
            alt=""
          />
        </div>
        <div className="w-1/2 space-y-3">
          <h2 className="text-6xl font-bold">{name}</h2>
          <h2 className="">
            <strong>Car Id : </strong>
            <span className="underline font-thin">{_id}</span>
          </h2>
          <h2 className="">
            <strong>Saller Name : </strong>
            <span className="underline font-thin">{sallerName}</span>
          </h2>
          <h2 className="">
            <strong>Saller Email : </strong>
            <span className="underline font-thin">{saller_email}</span>
          </h2>
          <h2 className="">
            <strong>QTY : </strong>
            {availableQuantity} In stock.
          </h2>
          <h2 className="">
            <strong>Price : </strong>${price}
          </h2>
          <h2 className="">
            {" "}
            <span>
              <div className="flex gap-2 w-full ">
                <strong>Total Ratings: </strong>
                <Rating
                  className="mt-1"
                  placeholderRating={ratings}
                  readonly
                  emptySymbol={
                    <AiOutlineStar className="text-yellow-500"></AiOutlineStar>
                  }
                  placeholderSymbol={
                    <AiFillStar className="text-yellow-500"></AiFillStar>
                  }
                />
                <h4 className="mt-1">{ratings}</h4>
              </div>
            </span>
          </h2>
        </div>
      </div>
      <div className=" bg-slate-200 px-7 py-10">
        <p>
          <strong>Description : </strong> {description}
        </p>
      </div>
    </div>
  );
};

export default Details;
