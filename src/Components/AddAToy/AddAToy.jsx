import CreatableSelect from "react-select/creatable";
import { useState } from "react";

const AddAToy = () => {
  const [subCategoriy, setSubCategoriy] = useState(null);
  const [categoriy, setCategoriy] = useState(null);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
    const sallerName = form.sallerName.value;
    // const categoriy = form.categoriy.value;
    // const subCategoriy = form.subCategoriy.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const select = form.select.value;
    const toy = {
      photoUrl,
      name,
      sallerName,
      price,
      ratting,
      availableQuantity,
      description,
      subCategoriy,
      categoriy,
    };
    console.log(categoriy, subCategoriy);
  };

  const carCategoriy = [
    { value: "Remote Control", label: "Remote Control" },
    { value: "Police Car", label: "Police Car" },
    { value: "Sports Car", label: "Sports Car" },
  ];
  const carSubCategoriy = [
    { value: "High-Teach Racer", label: "High-Teach Racer" },
    { value: "Off-Road Warriors", label: "Off-Road Warriors" },
    { value: "Speed Demons", label: "Speed Demons" },
    { value: "Crime Fighters", label: "Crime Fighters" },
    { value: "Traffic Controllers", label: "Traffic Controllers" },
    { value: "Special Force", label: "Special Force" },
    { value: "Speed Titans", label: "Speed Titans" },
    { value: "Supercar Legends", label: "Supercar Legends" },
    { value: "Luxury Cruisers", label: "Luxury Cruisers" },
  ];

  return (
    <div>
      <h1 className="text-7xl">ADD A toy page</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="bg-white">
            <form onSubmit={handleAddToy} className="card-body">
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
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
                    placeholder="Saller Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Categoriy</span>
                  </label>
                  <CreatableSelect
                className="w-full"
                defaultValue={setCategoriy}
                onChange={setCategoriy}
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
                    defaultValue={setSubCategoriy}
                    onChange={setSubCategoriy}
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
                    <span className="label-text">Rattings</span>
                  </label>
                  <input
                    type="text"
                    name="ratting"
                    placeholder="Rattings"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
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
