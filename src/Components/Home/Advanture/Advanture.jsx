import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Advanture = () => {
    // AOS //
    useEffect(() => {
      AOS.init();
    }, []);
    useEffect(() => {
      AOS.refresh();
    }, []);
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row" data-aos="zoom-in-right">
        <div className="grid flex-grow  card bg-white rounded-box place-items-center p-10 text-center lg:w-[800px]">
          <img className="rounded-lg mb-10 " src="https://images.pexels.com/photos/4491565/pexels-photo-4491565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 className="text-3xl mb-2">How Toy Cars Boost Brainpower</h3>
          <p>"Promotes cognitive development: Playing with toy cars stimulates cognitive skills such as problem-solving, spatial awareness, and critical thinking. Children learn to plan routes, solve obstacles, and make decisions, fostering their cognitive abilities in a fun and engaging way."</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow  card bg-white rounded-box place-items-center p-10 text-center lg:w-[800px]">
          <img className="rounded-lg mb-10" src="https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 className="text-3xl mb-2">The Educational Benefits of Toy Cars</h3>
          <p>"Develops fine motor skills and coordination: Playing with toy cars helps children enhance their hand-eye coordination, as they maneuver the vehicles around obstacles, turn corners, and navigate different surfaces."</p>
        </div>
      </div>
    </div>
  );
};

export default Advanture;
