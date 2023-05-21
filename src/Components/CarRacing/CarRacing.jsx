import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CarRacing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="hero py-20 px-10 bg-slate-200" data-aos="zoom-in-left">
        <div className="hero-content flex-col md:flex-row gap-10">
          <img
          
            src="https://i.ibb.co/8sJ12DV/bb8cd26484f4e7683afcd38b167c6626.jpg"
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">We help car racing organize events for kids</h1>
            <p className="py-6">
            Discover a world of excitement and endless fun at our toy website, where we specialize in organizing thrilling car racing events for kids. From miniature racetracks to customizable car designs, we offer unique experiences that ignite their passion for racing. Revolutionize their playtime with our innovative ideas and make every event a memorable adventure.
            </p>
            <Link to={"/alltoys"} className="btn bg-cyan-900">See Our Cars</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRacing;
