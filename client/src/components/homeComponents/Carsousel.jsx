import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoScanCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    img: "https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg",
    text: "Slide 1 Text (Top Left)",
    textPosition: "top-left",
  },
  {
    img: "https://media.happiesthealth.com/2022/10/siddha.jpg",
    text: "Slide 2 Text (Bottom Left)",
    textPosition: "bottom-left",
  },
  {
    img: "https://5.imimg.com/data5/YR/BX/MY-38745154/unani-medicines-1000x1000.jpg",
    text: "Slide 3 Text (Top Right)",
    textPosition: "top-right",
  },
  {
    img: "https://www.antaramresort.com/wp-content/uploads/2023/10/Meditation-small.jpg",
    text: "Slide 4 Text (Bottom Right)",
    textPosition: "bottom-right",
  },
  {
    img: "https://images.mid-day.com/images/images/2024/jan/ayurvedickidneytreatment1_d.jpg",
    text: "Slide 5 Text (Center)",
    textPosition: "center",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Add fade transition
  };

  return (
    <div className="relative w-full h-[90vh]  overflow-hidden z-10">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="  h-[89vh] ">
            <img
              src={item.img}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover transition-transform duration-500 ease-in-out h-[80vh] md:h-[90vh] md:mt-4"
            />
            <div
              className={`absolute p-4 ${getTextPositionClasses(
                item.textPosition
              )} text-white text-3xl font-bold bg-black bg-opacity-0`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-8 right-4 p-4 text-white text-2xl font-bold bg-gray-500 bg-opacity-70 rounded-md">
        <Link to="/scan-image" className="hover:pointer">
          <div className="flex flex-row gap-2">
            Scan Your Plant <IoScanCircleSharp className="mt-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};

// Helper function to return Tailwind classes for text positioning
const getTextPositionClasses = (position) => {
  switch (position) {
    case "top-left":
      return "top-4 left-4";
    case "bottom-left":
      return "bottom-4 left-4";
    case "top-right":
      return "top-4 right-4";
    case "bottom-right":
      return "bottom-4 right-4";
    case "center":
      return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
    default:
      return "";
  }
};

export default Carousel;
