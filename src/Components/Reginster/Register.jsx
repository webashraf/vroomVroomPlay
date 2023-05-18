import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [view, setView] = useState(false);
  const { signUpWithGoogle } = useContext(ContextProvider);

  const googleSignIn = () => {
    signUpWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:w-1/2 px-10">
          <h1 className="text-5xl font-bold">Join VroomVroomPlay today!</h1>
          <p className="py-6">
            roomVroomPlay: Ignite Your Gaming Passion! Immerse, Compete,
            Conquer. Join our vibrant community and experience gaming like never
            before. Unleash the thrill today!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body pb-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>

              <input
                type="text"
                placeholder="Photo Url"
                name="userPhoto"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type={view ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />

              {
                <div className="mt-3" onClick={() => setView(!view)}>
                  {view ? (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye></AiFillEye>
                  )}
                </div>
              }

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn mb-2 bg-blue-950">Sign Up</button>
              <p className="text-center">
                Allready have an account ?{" "}
                <Link className="text-blue-800 font-bold" to={"/login"}>
                  Login now!!
                </Link>
              </p>
            </div>
          </form>
          <div className="flex justify-between gap-6 px-6 pb-4">
            <button
              onClick={googleSignIn}
              className="btn flex-grow bg-blue-950"
            >
              <AiOutlineGoogle className="text-xl text-orange-500"></AiOutlineGoogle>{" "}
              &nbsp; GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
