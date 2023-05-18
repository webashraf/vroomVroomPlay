import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { useState } from "react";


const Login = () => {
    const [view, setView] = useState(false);
    

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2 px-10">
            <h1 className="text-5xl font-bold">
           Join VroomVroomPlay today!
            </h1>
            <p className="py-6">
            roomVroomPlay: Ignite Your Gaming Passion! Immerse, Compete, Conquer. Join our vibrant community and experience gaming like never before. Unleash the thrill today!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  className="input input-bordered"
                />

{
                  <div className="mt-3" onClick={() => setView(!view)}>
                    {view ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}
                  </div>
                }



                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">
                Are you new to here
                <Link className="" to={"/register"}>
                  register now!!
                </Link>{" "}
              </p>
            </form>
            <div className="flex justify-between mt-3 gap-6 px-6 pb-4">
              <button
                className="btn flex-grow"
              >
                <AiOutlineGoogle className="text-xl"></AiOutlineGoogle> &nbsp;
                GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
