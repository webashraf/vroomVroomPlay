import { Gallery } from "react-grid-gallery";





const BGVideo = () => {


  const carsOb = [
    {car: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 273, heght: 426},
    {car: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 1127, heght: 750},
    {car: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 284, heght: 426},
    {car: 'https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 1050, heght: 750},
    {car: 'https://images.pexels.com/photos/627721/pexels-photo-627721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 3543, heght: 2149},
    {car: 'https://images.pexels.com/photos/833393/pexels-photo-833393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 5184, heght: 3888},
    {car: 'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 4640, heght: 6960},
    {car: 'https://images.pexels.com/photos/752615/pexels-photo-752615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 2605, heght: 1621},
    {car: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 3915, heght: 5872},
    {car: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 4700, heght: 3133},
    {car: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  width: 4101, heght: 6152}
  ]










  return (
<>
<Gallery images={carsOb} />
</>
  );
};


export default BGVideo;
