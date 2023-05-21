import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [cars, setCars] = useState([]);
  const [subCategory, setSubCategory] = useState("Crime_Fighters");

  const handelCarBySubCategory = (subCarCategory) => {
    // console.log(subCategory);
    setSubCategory(subCarCategory);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/cars/${subCategory}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [subCategory]);

  // console.log(cars);

  if (!cars) {
    return (
      <div className="flex justify-center items-center flex-col gap-10">
        <h2 className="text-3xl text-blue-950 font-mono">Loading....</h2>
        <progress className="progress w-56 text-center"></progress>
      </div>
    );
  }

  return (
    <div>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList
          className={"bg-cyan-950 text-white text-center font-bold pt-5"}
        >
          <Tab onClick={() => handelCarBySubCategory("High_Teach_Racer")}>
            Remote Control Car
          </Tab>
          <Tab onClick={() => handelCarBySubCategory("Crime_Fighters")}>
            Police Cars
          </Tab>
          <Tab onClick={() => handelCarBySubCategory("Speed_Titans")}>
            Sports Cars
          </Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList
              className={"bg-cyan-800 text-white text-center font-bold pt-5"}
            >
              <Tab onClick={() => handelCarBySubCategory("High_Teach_Racer")}>
                High-Tech Racers
              </Tab>
              <Tab onClick={() => handelCarBySubCategory("Off-Road_Warriors")}>
                Off-Road Warriors
              </Tab>
              <Tab onClick={() => handelCarBySubCategory("Speed_Demons")}>
                Speed Demons
              </Tab>
            </TabList>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList
              className={"bg-cyan-800 text-white text-center font-bold pt-5"}
            >
              <Tab onClick={() => handelCarBySubCategory("Crime_Fighters")}>
                Crime Fighters
              </Tab>
              <Tab
                onClick={() => handelCarBySubCategory("Traffic_Controllers")}
              >
                Traffic Controllers
              </Tab>
              <Tab onClick={() => handelCarBySubCategory("Special_Force")}>
                Special Forces
              </Tab>
            </TabList>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList
              className={"bg-cyan-800 text-white text-center font-bold pt-5"}
            >
              <Tab onClick={() => handelCarBySubCategory("Speed_Titans")}>
                Speed Titans
              </Tab>
              <Tab onClick={() => handelCarBySubCategory("Supercar_Legends")}>
                Supercar Legends
              </Tab>
              <Tab onClick={() => handelCarBySubCategory("Luxury_Cruisers")}>
                Luxury Cruisers
              </Tab>
            </TabList>
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>{" "}
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>{" "}
            <TabPanel>
              <div className="flex justify-around">
                {cars.map((car) => (
                  <>
                    <div className="shadow-2xl rounded-lg p-10 flex flex-row gap-10 items-center my-14">
                      <div className="w-1/2">
                        {" "}
                        <img
                          className="w-full rounded-lg"
                          src={car.photoUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-2xl">
                          <strong>Name : </strong>
                          {car.name}
                        </h1>
                        <h4>
                          <strong>Price : </strong>
                          {car.price}
                        </h4>

                        <div className="flex gap-2 w-full ">
                          <span>ratings: </span>
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
                        <button className="viewDetailsBtn  btn bg-blue-950 text-white">
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
