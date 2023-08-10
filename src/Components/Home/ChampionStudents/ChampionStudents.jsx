import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import './Champ.css'

// import required modules
import { Pagination } from 'swiper/modules';

const ChampionStudents = () => {
  // const { user } = useContext(ContextProvider);
  const [champions, setChampions] = useState([])



  useEffect(() => {
    fetch(`https://a-11-server-side.vercel.app/champion`)
      .then(res => res.json())
      .then(data => setChampions(data))
  }, [])
  console.log("champions", champions);
  return (
    <div className='py-10 bg-[url("https://images.pexels.com/photos/4940934/pexels-photo-4940934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
          champions.map(champ => {
            return <SwiperSlide key={champ?._id} className='shadow-2xl'>

              <div className='h-[330px] '>
                <div className='w-[300px] h-[200px] overflow-hidden'>
                  <img src={champ?.photoUrl} alt="" />
                </div>
                <div className='font-serif text-white'>
                  <h4>Candidate Name: {champ?.name}</h4>
                  <h4>Position: {champ?.position}</h4>
                  <h4>Total Trophy: {champ?.totalTrophy}</h4>
                </div>
              </div>
            </SwiperSlide>
          })
        }


      </Swiper>
    </div>
  );
}

export default ChampionStudents;