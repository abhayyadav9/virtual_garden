// import React from 'react';
// import { useUser } from '../contexts/useContext';

// // Sample data for medicinal plants
// const plants = [
//   {
//     name: "Aloe Vera",
//     img: "https://dukaan.b-cdn.net/700x700/webp/media/8c16c85b-26c5-49fd-bac6-3a2add3f0fc5.png",
//     description: "Aloe Vera is well known for its soothing properties and is commonly used to treat sunburn and other skin irritations.",
//   },
//   {
//     name: "Lavender",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/330px-Single_lavender_flower02.jpg",
//     description: "Lavender is popular for its calming effects and is often used in aromatherapy to reduce stress and anxiety.",
//   },
//   {
//     name: "Peppermint",
//     img: "https://cdn.mos.cms.futurecdn.net/TBk4mufJgZZ4jSbW4K6Raj-1600-80.jpg.webp",
//     description: "Peppermint is known for its digestive benefits and is used to relieve symptoms of nausea and indigestion.",
//   },
//   {
//     name: "Echinacea",
//     img: "https://i0.wp.com/scotlandgrowsmagazine.com/wp-content/uploads/2021/02/echinaceaedited.jpg?resize=723%2C606&ssl=1",
//     description: "Echinacea is often used to boost the immune system and may help reduce the duration of colds.",
//   },
//   {
//     name: "Ginger",
//     img: "https://m.media-amazon.com/images/I/71pWzcfmLUL._SL1500_.jpg",
//     description: "Ginger is widely used to alleviate nausea, improve digestion, and reduce inflammation.",
//   },
//   {
//     name: "Turmeric",
//     img: "https://www.padmamnursery.com/cdn/shop/products/61vZDe-zmxL.jpg?v=1687777208",
//     description: "Turmeric contains curcumin, which has powerful anti-inflammatory and antioxidant effects.",
//   },
//   {
//     name: "Chamomile",
//     img: "https://www.vedonic.com/cdn/shop/products/1IbU5fD62H1SFkHxNQvLFVB06S3ciKeSj_1024x1024.jpg?v=1659536047",
//     description: "Chamomile is used for its calming effects and can help with sleep disorders and digestive issues.",
//   },
//   {
//     name: "Garlic",
//     img: "https://www.thespruce.com/thmb/9ZfZ_2BUSaX84fOQzkaUAWEgpR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hardneck-and-softneck-garlic-2540056-02-187d9130324346319f9d2df16a7124c5.jpg",
//     description: "Garlic is known for its cardiovascular benefits and can help lower blood pressure and cholesterol levels.",
//   },
//   {
//     name: "Ginseng",
//     img: "https://www.bhg.com/thmb/MgFSuq2-6fIW8noBFhQ2DSNMcrs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-471194514-2ed618b4108041cebcab5178237a3628.jpg",
//     description: "Ginseng is used to boost energy, improve mental performance, and reduce stress.",
//   },
//   {
//     name: "Ashwagandha",
//     img: "https://m.media-amazon.com/images/I/61vfn4o1sCL.jpg",
//     description: "Ashwagandha is an adaptogen that helps the body cope with stress and can enhance overall vitality.",
//   },
// ];

// const MedicinalPlantCard = ({ img, name, description }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       <img src={img} alt={name} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-2">{name}</h2>
//         <p className="text-gray-700">{description}</p>
//       </div>
//     </div>
//   );
// };

// const PlantGallery = () => {
//   const {published} = useUser()
//   return (
//     <div className="p-4">
//       {/* Responsive grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {plants.map((plant, index) => (
//           <MedicinalPlantCard
//             key={index}
//             img={plant.img}
//             name={plant.name}
//             description={plant.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlantGallery;

import React from 'react';
import { useUser } from '../contexts/useContext';
import PublishCard from './PublishCard';


const PlantGallery = () => {
  const { published } = useUser(); // Get the published data from the context

  return (
    <div className="p-4">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {published && published.length > 0 ? (
          published.map((publishItem, index) => (
            <PublishCard
              key={index}
              title={publishItem.title}
              description={publishItem.description}
              image={publishItem.image} // Assuming the image is a URL
              tag={publishItem.tag}

              />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No published items to display</div>
        )}
      </div>
    </div>
  );
};

export default PlantGallery;
