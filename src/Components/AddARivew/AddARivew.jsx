import { useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const AddARivew = () => {


    const [category, setCategory] = useState(null);
    const { user } = useContext(ContextProvider);
    useTitle("Add Toy")
  
    console.log(user);
  
    const handleAddToy = (event) => {
      event.preventDefault();
  
      const form = event.target;

      const photoUrl = form.photoUrl.value;
      const name = form.name.value;
      const sallerName = form.sallerName.value;
      const trophyCategory = category;
      const saller_email = form.saller_email.value;
      const ratings = parseFloat(form.rating.value);
      const availableQuantity = parseInt(form.availableQuantity.value);
      const description = form.description.value;
      const toy = {
        photoUrl,
        name,
        userName: sallerName,
        userEmail: saller_email,
        winedCategory: trophyCategory,
        position: ratings,
        totalTrophy: availableQuantity,
        description,
      };
      console.log(toy);
  
      fetch(`https://a-11-server-side.vercel.app/add-champion`, {
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
      { value: "National", label: "National" },
      { value: "International", label: "International" },
      { value: "Olympic", label: "Olympic" },
      { value: "Other", label: "Other" },
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
                        <span className="label-text">Candidate Photo</span>
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
                        <span className="label-text">Candidate Name</span>
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
                        <span className="label-text">User Name</span>
                      </label>
                      <input
                        type="text"
                        name="sallerName"
                        value={user?.displayName}
                        placeholder="Saller Name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">User Email</span>
                      </label>
                      <input
                        type="text"
                        name="saller_email"
                        value={user?.email}
                        placeholder="Saller Email"
                        className="input input-bordered"
                      />
                    </div>
    
                  </div>
                  <div className="flex gap-6">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Candidate Position</span>
                    </label>
                    <select name="rating"  className="select select-bordered">

                      <option selected>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                    </select>
                  </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Event Category</span>
                      </label>
                      <CreatableSelect
                        name="category"
                        required
                        className="w-[200px]"
                        defaultValue={setCategory}
                        onChange={setCategory}
                        options={carCategoriy}
                        isMulti
                      />
                    </div>
    

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Available Trophy</span>
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
                      defaultValue={
                        "Introducing the TurboTec Toy Car: a sleek and fast miniature racer. With its aerodynamic design and vibrant red body, it's sure to turn heads. Equipped with a powerful electric motor, precise steering, and reliable brakes, it offers unmatched speed and control. Built to last, it guarantees endless fun both indoors and outdoors. Customize it with decals and accessories for a personal touch. Unleash the champion within and conquer the race track!"
                      }
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
    

export default AddARivew;