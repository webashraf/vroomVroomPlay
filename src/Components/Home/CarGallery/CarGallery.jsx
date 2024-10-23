import AOS from 'aos';
import 'aos/dist/aos.css';
import LightGallery from "lightgallery/react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./CarGallery.css";
// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";

// Plugins
const CarGallery = () => {
   const lightGallery = useRef(null);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`https://a-11-server-side.vercel.app/mycars`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {

return cars.map((item) => {
      return (
        <div
          key={item._id}
          data-lg-size="1400-800"
          className="gallery-item overflow-hidden"
          data-src={item.photoUrl}
        >
  

          <img className="img-responsive h-full w-full object-cover hover-zoom " src={item.photoUrl} />
        </div>
      );
    });

  }, [cars]);

  useEffect(() => {
    lightGallery.current.refresh();
  }, [cars]);

  // AOS //
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [cars]);



  return (
    <div className="" data-aos="zoom-in-left">
            <LightGallery 
            className=""
                plugins={[lgZoom]}
                elementClassNames="custom-class-name"
                onInit={onInit}
            >
                {getItems()}
            </LightGallery>
    </div>
  );
};

export default CarGallery;
