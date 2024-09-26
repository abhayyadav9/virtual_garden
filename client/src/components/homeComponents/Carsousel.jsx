import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselItems = [
  {
    img: "https://thumbs.dreamstime.com/z/virtual-garden-filled-different-plants-flowers-each-representing-investment-portfolio-users-can-explore-serene-317257447.jpg?w=992",
    text: 'Slide 1 Text (Top Left)',
    textPosition: 'top-left'
  },
  {
    img: 'https://www.knollgardens.co.uk/wp-content/uploads/2018/05/entrance8594-1024x683.jpg',
    text: 'Slide 2 Text (Bottom Left)',
    textPosition: 'bottom-left'
  },
  {
    img: "https://www.knollgardens.co.uk/wp-content/uploads/2018/05/Allium-Lucy-Ball3604-1024x690.jpg",
    text: 'Slide 3 Text (Top Right)',
    textPosition: 'top-right'
  },
  {
    img: "https://www.knollgardens.co.uk/wp-content/uploads/2018/05/long-walk8398-1024x683.jpg",
    text: 'Slide 4 Text (Bottom Right)',
    textPosition: 'bottom-right'
  },
  {
    img: "https://www.knollgardens.co.uk/wp-content/uploads/2018/05/long-walk8398-1024x683.jpg",
    text: 'Slide 5 Text (Center)',
    textPosition: 'center'
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
            <img src={item.img} alt={`Slide ${index + 1}`} className="w-full object-cover transition-transform duration-500 ease-in-out h-[80vh] md:h-[90vh] md:mt-4" />
            <div className={`absolute p-4 ${getTextPositionClasses(item.textPosition)} text-white text-3xl font-bold bg-black bg-opacity-0`}>
              {item.text}
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-4 right-4 p-4 text-white text-2xl font-bold bg-black bg-opacity-0 rounded-md">
        Static Bottom Right Text
      </div>
    </div>
  );
};

// Helper function to return Tailwind classes for text positioning
const getTextPositionClasses = (position) => {
  switch (position) {
    case 'top-left':
      return 'top-4 left-4';
    case 'bottom-left':
      return 'bottom-4 left-4';
    case 'top-right':
      return 'top-4 right-4';
    case 'bottom-right':
      return 'bottom-4 right-4';
    case 'center':
      return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    default:
      return '';
  }
};

export default Carousel;
