import useTitle from "../../../hooks/useTitle";
import CarRacing from "../../CarRacing/CarRacing";
import Advanture from "../Advanture/Advanture";
import Banner from "../Banner/Banner";
import CarGallery from "../CarGallery/CarGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ChampionStudents from './../ChampionStudents/ChampionStudents';

const Home = () => {
  useTitle("Home")
  return (
<>
<div className="flex flex-col gap-20">
      <Banner></Banner>
      <div>
        <div className="py-20 text-center md:w-2/4 px-5 mx-auto">
          <h1 className="text-4xl md:text-7xl py-5 uppercase font-mono">Shop by category</h1>
          <p>
            Browse our toy website's "Shop by category" section for easy
            navigation and quick access to a diverse range of toys.
          </p>
        </div>
        <ShopByCategory></ShopByCategory>
      </div>
      <div>
        <div className="py-20 text-center md:w-2/4 px-5 mx-auto">
          <h1 className="text-5xl md:text-7xl py-5 uppercase font-mono">Cars Gallery</h1>
          <p>
            Discover captivating miniature car replicas in our vibrant photo
            gallery, showcasing the essence of speed, elegance, and adventure.
          </p>
        </div>
        <CarGallery></CarGallery>
      </div>
      <div>
        <div className="py-20 text-center md:w-2/4 px-5 mx-auto">
          <h1 className="text-4xl md:text-7xl py-5 uppercase font-mono">
          Playtime Adventures
          </h1>
          <p>
          Accelerate your fun with "Playtime Adventures," the ultimate car racing destination for speed enthusiasts of all ages.
          </p>
        </div>
        <Advanture></Advanture>
      </div>
      <CarRacing></CarRacing>
      <ChampionStudents></ChampionStudents>
    </div>
</>
  );
};

export default Home;
