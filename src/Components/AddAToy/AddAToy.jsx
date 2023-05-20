import { useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { ContextProvider } from "../../AuthProvider/AuthProvider";

const AddAToy = () => {
  const [subCategory, setSubCategory] = useState(null);
  const [category, setCategory] = useState(null);
  const { user } = useContext(ContextProvider);

  console.log(user);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
    const sallerName = form.sallerName.value;
    const sub_category = subCategory.value;
    const price = form.price.value;
    const ratings = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    // const select = form.select.value;
    const toy = {
      photoUrl,
      name,
      sallerName,
      price,
      sub_category,
      category,
      ratings,
      availableQuantity,
      description,
      saller_email: user.email,
    };
    console.log(toy);

    fetch(`http://localhost:5000/addcar`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const carCategoriy = [
    { value: "Remote Control", label: "Remote Control" },
    { value: "Police Car", label: "Police Car" },
    { value: "Sports Car", label: "Sports Car" },
  ];
  const carSubCategoriy = [
    { value: "High_Teach_Racer", label: "High-Teach Racer" },
    { value: "Off-Road_Warriors", label: "Off-Road Warriors" },
    { value: "Speed_Demons", label: "Speed Demons" },
    { value: "Crime_Fighters", label: "Crime Fighters" },
    { value: "Traffic_Controllers", label: "Traffic Controllers" },
    { value: "Special_Force", label: "Special Force" },
    { value: "Speed_Titans", label: "Speed Titans" },
    { value: "Supercar_Legends", label: "Supercar Legends" },
    { value: "Luxury_Cruisers", label: "Luxury Cruisers" },
  ];

  return (
    <div className="py-10">
      <div className="hero min-h-screen bg-base-200 pb-10">
        <div className="">
          <h1 className="text-5xl py-10 text-center font-mono uppercase">
            ADD A toy
          </h1>
          <div className="bg-white rounded-lg shadow-2xl">
            <form onSubmit={handleAddToy} className="card-body">
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
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
                    required
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Saller Name</span>
                  </label>
                  <input
                    type="text"
                    name="sallerName"
                    defaultValue={user?.displayName}
                    placeholder="Saller Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Categoriy</span>
                  </label>
                  <CreatableSelect
                    name="category"
                    required
                    className="w-full"
                    defaultValue={setCategory}
                    onChange={setCategory}
                    options={carCategoriy}
                    isMulti
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Categoriy</span>
                  </label>
                  <CreatableSelect
                    className=""
                    required
                    defaultValue={setSubCategory}
                    onChange={setSubCategory}
                    options={carSubCategoriy}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Ratings</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Ratings"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="availableQuantity"
                    placeholder="Available Quantity"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={"Introducing the TurboTec Toy Car: a sleek and fast miniature racer. With its aerodynamic design and vibrant red body, it's sure to turn heads. Equipped with a powerful electric motor, precise steering, and reliable brakes, it offers unmatched speed and control. Built to last, it guarantees endless fun both indoors and outdoors. Customize it with decals and accessories for a personal touch. Unleash the champion within and conquer the race track!"}
                  placeholder="Description"
                  className="input input-bordered h-40"
                  id=""
                  cols=""
                  rows="20"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary textarea"
                  type="submit"
                  name=""
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
