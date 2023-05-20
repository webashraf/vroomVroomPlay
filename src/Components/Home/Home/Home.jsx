import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import CarGallery from "../CarGallery/CarGallery";
import Advanture from "../Advanture/Advanture";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner></Banner>
      <div>
        <div className="py-20 text-center w-2/4 mx-auto">
          <h1 className="text-7xl py-5 uppercase font-mono">Shop by category</h1>
          <p>
            Browse our toy website's "Shop by category" section for easy
            navigation and quick access to a diverse range of toys.
          </p>
        </div>
        <ShopByCategory></ShopByCategory>
      </div>
      <div>
        <div className="py-20 text-center w-2/4 mx-auto">
          <h1 className="text-7xl py-5 uppercase font-mono">Cars Gallery</h1>
          <p>
            Discover captivating miniature car replicas in our vibrant photo
            gallery, showcasing the essence of speed, elegance, and adventure.
          </p>
        </div>
        <CarGallery></CarGallery>
      </div>
      <div>
        <div className="py-20 text-center w-2/4 mx-auto">
          <h1 className="text-7xl py-5 uppercase font-mono">
          Playtime Adventures
          </h1>
          <p>
            Discover captivating miniature car replicas in our vibrant photo
            gallery, showcasing the essence of speed, elegance, and adventure.
          </p>
        </div>
        <Advanture></Advanture>
      </div>
    </div>
  );
};

export default Home;
