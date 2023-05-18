const AddAToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
    const sallerName = form.sallerName.value;
    const categoriy = form.categoriy.value;
    const subCategoriy = form.subCategoriy.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const toy = {
      photoUrl,
      name,
      sallerName,
      categoriy,
      subCategoriy,
      price,
      ratting,
      availableQuantity,
      description,
    };
    console.log(toy);
  };

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
                  <input
                    type="text"
                    name="categoriy"
                    placeholder="Categoriy"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Categoriy</span>
                  </label>
                  <input
                    type="text"
                    name="subCategoriy"
                    placeholder="Sub Categoriy"
                    className="input input-bordered"
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
