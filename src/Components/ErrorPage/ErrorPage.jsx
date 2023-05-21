import Lottie from "lottie-react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import animationData from "../../../public/errorAnimation.json";
const ErrorPage = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen bg-[url('https://images.pexels.com/photos/54277/pexels-photo-54277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"

        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <Lottie animationData={animationData} loop={true} />;
              <h1 className="mb-5 text-7xl font-bold ">
                Erorr!!!
              </h1>
              <p className="mb-5">Page not found.</p>
              <Link to={"/"} className="btn bg-cyan-900">
                <BsArrowLeft></BsArrowLeft> &nbsp; Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
