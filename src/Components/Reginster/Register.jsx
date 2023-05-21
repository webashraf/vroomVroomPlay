import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [view, setView] = useState(false);
  const [errorM, setErrorM] = useState(null);
  useTitle("Register")

  const { signUpWithGoogle, registerWithEmailAndpassword } =
    useContext(ContextProvider);

  const signUpWithEmailAndPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.userPhoto.value;
    const userName = form.name.value;

    console.log(email, password, photoUrl, userName);

    registerWithEmailAndpassword(email, password)
      .then((result) => {
        setErrorM(null);
        updateUserProfile(result.user, userName, photoUrl);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("weak-password")) {
          setErrorM("Password must be longer than 6 characters!!");
          return;
        } else {
          setErrorM(error.message);
        }
      });

    const updateUserProfile = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
      form.reset();
    };
  };

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
          <form
            onSubmit={signUpWithEmailAndPassword}
            className="card-body pb-2"
          >
            <div className="text-red-500 font-bold m-4 p-3 rounded-lg">
              {errorM}
            </div>

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
              <input
                className="btn mb-2 bg-blue-950"
                type="submit"
                value="Register"
              />
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
