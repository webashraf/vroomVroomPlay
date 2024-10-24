import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";


const Login = () => {
    const [view, setView] = useState(false);
    const [errorM, setErrorM] = useState(null);
    useTitle("Log In")
    const {signUpWithGoogle, signInWithEmailPassword} =
    useContext(ContextProvider);
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        signInWithEmailPassword(email, password)
          .then((result) => {
            setErrorM(null);
            form.reset();
            navigate(from, {replace: true})
          })
          .catch((error) => {
            setErrorM("Email or Password dosen't match!!!")
          });
          form.reset();
      };

    const googleSignIn = () => {
        signUpWithGoogle()
          .then((result) => {
            navigate(from, {replace: true});
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2 px-10">
            <h1 className="text-5xl font-bold">
           Login VroomVroomPlay now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-white">
            <form onSubmit={handleLoginWithEmailAndPassword} className="card-body pb-4">
            <div className="text-red-500 font-bold m-4 p-3 rounded-lg">
              {errorM}
            </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
                <input className="btn mb-2 bg-blue-950" type="submit" value="Login" />
              </div>
              <p className="text-center">
                Are you new to here &nbsp;
                <Link className="text-blue-800 font-bold" to={"/register"}>
                  register now!!
                </Link>{" "}
              </p>
            </form>
            <div className="flex justify-between gap-6 px-6 pb-4">
              <button
              onClick={googleSignIn}
                className="btn flex-grow bg-blue-950"
              >
                <AiOutlineGoogle className="text-xl text-orange-500"></AiOutlineGoogle> &nbsp;
                GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
