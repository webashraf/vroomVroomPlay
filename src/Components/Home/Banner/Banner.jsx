import Lottie from "lottie-react";
import carAnimation1 from "../../../../public/carAnimation1.json";
import carAnimation2 from "../../../../public/carAnimation2.json";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Banner = () => {
  // AOS //
  useEffect(() => {
    AOS.init();
  }, []);
  // useEffect(() => {
  //   AOS.refresh();
  // }, []);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/w6Z4drc/pexels-photo-1194420.jpg"
            className="w-full"
          />
          <div className="content-site absolute mt-auto w-full px-20 flex items-center justify-between h-full bg-[#10101095] ">
            <div className="text-white w-1/2 my-auto z-10" data-aos="fade-right">
              <h1 className="text-6xl mb-3 font-serif">
                VroomVroomPlay: Fueling Imagination with Exhilarating Car Toys!
              </h1>
              <p className="">
                VroomVroomPlay: Where Fun and Adventure Collide! Discover our
                exhilarating collection of car toys that fuel imagination and
                create lasting memories. From speedy racers to rugged
                off-roaders, each toy is designed to deliver endless excitement.
                Unleash the thrill of play and let their imaginations soar with
                VroomVroomPlay!
              </p>
            </div>
            <div className="w-[40%]" data-aos="fade-left">
              <Lottie animationData={carAnimation2} loop={true} />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/rk3VJ91/pexels-photo-1702624.jpg"
            className="w-full"
          />
          <div className="content-site absolute mt-auto w-full px-20 flex items-center justify-between h-full bg-[#10101095] ">
            <div
              className="text-white w-1/2 my-auto z-10"
              data-aos="fade-right"
            >
              <h1 className="text-6xl mb-3 font-serif">
                Emotion in Motion: Exploring Baby's Joy with Toy Cars!
              </h1>
              <p className="">
                Discover Joyful Expressions: Baby's Delight with Toy Cars! Let
                their imaginations race with excitement as they explore the
                world of toy cars. Experience the pure delight and heartwarming
                emotions that come alive with each playful interaction. Start
                their journey of joy today!
              </p>
            </div>
            <div className="w-[40%]" data-aos="fade-left">
              <Lottie animationData={carAnimation1} loop={true} />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/hWbY0s1/pexels-photo-1266808.jpg"
            className="w-full"
          />
          <div className="content-site absolute mt-auto w-full px-20 flex items-center justify-between h-full bg-[#10101095] ">
            <div
              className="text-white w-1/2 my-auto z-10"
              data-aos="fade-right"
            >
              <h1 className="text-6xl mb-3 font-serif">
                Rev Up the Fun: Explore Our World of Car Toys!
              </h1>
              <p className="">
                Unleash the Fun: Discover an Exciting Range of Car Toys! Fuel
                your child's imagination with our hand-picked selection of
                captivating car toys. From speedy racers to rugged off-roaders,
                each toy is built to deliver endless hours of entertainment. Let
                their imagination hit the accelerator as they embark on
                thrilling adventures and exciting races. Start the adventure
                today and watch their joy ignite!
              </p>
            </div>
            <div className="w-[40%]" data-aos="fade-left">
              <img src="https://i.ibb.co/L5zbHTG/boy.png" alt="" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
