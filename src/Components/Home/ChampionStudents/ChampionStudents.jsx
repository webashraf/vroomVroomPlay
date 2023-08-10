import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Rivew.css"
import { useContext, useEffect, useState } from "react"
import { ContextProvider } from "../../../AuthProvider/AuthProvider"
const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

const ChampionStudents = () => {
  const { user } = useContext(ContextProvider);
  const [champions, setChampions] = useState([])
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )



  useEffect(() => {
    fetch(`https://a-11-server-side.vercel.app/champion`)
      .then(res => res.json())
      .then(data => setChampions(data))
  }, [user])
  console.log(champions);

  return (
    <div className="wrapper">
      <div className="scene">
        {/* {champions?.length} */}
        <div className="carousel keen-slider" ref={sliderRef}>
          {champions.slice(0, 6).map(champion =>
            <div key={champion?._id} className="carousel__cell number-slide2">
              <div className="">
                {/* <div className="w-[120px] h-[80px] overflow-hidden object-bottom object-cover mb-2">
                  <img src={champion?.photoUrl} className="w-full" alt="" />
                </div> */}
                <div>
                  <h4 className="text-xs font-serif text-center">Name: {champion?.name}</h4>
                  <h4 className="text-xs font-serif text-center">Sports: {champion?.sports}</h4>
                  {/* <h4 className="text-xs font-serif text-center">performance: {champion?.winedCategory?.map((v, i) => <p key={i}>{v}</p>)}</h4> */}
                  <h4 className="text-xs font-serif text-center">Position: {champion?.position}</h4>
                  <h4 className="text-xs font-serif text-center">Total Trophy: {champion?.totalTrophy}</h4>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  )
}

export default ChampionStudents;