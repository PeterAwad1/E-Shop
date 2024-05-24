import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
  },
];
function Blogs() {
  return (
    <div className="mb-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold dark:text-white text-black mb-2">
            Recent News
          </h1>
          <p className="text-gray-500 text-sm">Explore Our Blogs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="flex flex-col gap-2 justify-center  sm:pl-3 pt-12 sm:pt-0 order-2 sm:order-1 z-10 relative"
            >
              <img
                src={data.image}
                alt="Headphone"
                className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
              />
              <p className="text-gray-500 text-sm">{data.published}</p>
              <h1 className="font-bold line-clamp-1">{data.title}</h1>
              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {data.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
