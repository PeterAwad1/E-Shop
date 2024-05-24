import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];
function Hero({ onPopupToggle }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    pouseonHover: false,
    pouseonFocus: true,
    cssEase: "ease-in-out",
  };
  return (
    <div className="container  ">
      <div className=" overflow-hidden min-h-[550px] rounded-3xl sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section*/}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-4 ">
                  <div className=" flex flex-col gap-4 justify-center text-center sm:pl-3 pt-12 sm:pt-0 order-2 sm:order-1 z-10 relative ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-once="true"
                      data-aos-duration="500"
                      className="text-2xl sm:text-6xl font-bold lg:text-2xl"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-once="true"
                      data-aos-duration="500"
                      className="text-5xl sm:text-6xl font-bold lg:text-7xl"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-once="true"
                      data-aos-duration="500"
                      className="text-5xl font-bold  uppercase text-white dark:text-white/5 sm:text-[60px] md:text-[80px] xl:text-[150px] "
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-daley="300"
                    >
                      <button className="btn" onClick={onPopupToggle}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2 ">
                    <div
                      className="relative z-10 "
                      data-aos="zoom-in"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <img
                        src={data.img}
                        alt={data.subtitle}
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4) relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
