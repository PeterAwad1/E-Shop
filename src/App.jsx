import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Hero from "./components/hero/Hero";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partner from "./components/Partners/Partner";
import Footer from "./components/Footer/Footer";
import PopSection from "./components/PopSection/PopSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  function handlePopupToggle() {
    setIsPopupOpen(!isPopupOpen);
  }
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      daley: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden ">
      <div className="mx-4">
        <Navbar onPopupToggle={handlePopupToggle} />

        <Hero onPopupToggle={handlePopupToggle} />
        <Category />
        <Category2 />
        <ServiceSection />
        <Banner data={BannerData} />
        <Product />
        <Banner data={BannerData2} />
        <Blogs />
        <Partner />
        <Footer />
        <PopSection
          isPopupOpen={isPopupOpen}
          onPopupToggle={handlePopupToggle}
        />
      </div>
    </div>
  );
}

export default App;
