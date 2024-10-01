// import React, { useState } from "react";
// import { useUser } from "../contexts/useContext";
// import { useTheme } from "next-themes";
// import PublishCard from "./PublishCard";

// const Scan = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isPlant, setIsPlant] = useState(false);
//   const [matchedPlant, setMatchedPlant] = useState(null); // State to store the matched plant
//   const { published } = useUser(); // Get the published data from context
//   const { theme } = useTheme();

//   // Handler for file input change
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       // Resize the uploaded image
//       const imageUrl = URL.createObjectURL(file);
//       const img = new Image();
//       img.src = imageUrl;
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");
//         const maxWidth = 400; // Set a maximum width for the image
//         const scaleSize = maxWidth / img.width;
//         canvas.width = maxWidth;
//         canvas.height = img.height * scaleSize;
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//         // Convert the resized image back to a blob and display it
//         canvas.toBlob((blob) => {
//           const resizedImageUrl = URL.createObjectURL(blob);
//           setSelectedImage(resizedImageUrl);
//         });
//       };

//       // Check if the uploaded file name contains any of the published titles
//       const foundPlant = published.find((pub) =>
//         file.name.toLowerCase().includes(pub.title.toLowerCase())
//       );

//       if (foundPlant) {
//         setIsPlant(true);
//         setMatchedPlant([foundPlant]); // Set the matched plant as an array
//       } else {
//         setIsPlant(false);
//         setMatchedPlant(null); // Reset if no plant is found
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
//       <h1 className="text-2xl font-bold mb-4">Scan Your Plant</h1>

//       {/* Upload Button */}
//       <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={handleImageUpload}
//         />
//         Upload from Gallery
//       </label>

//       {/* Display the selected image */}
//       {selectedImage && (
//         <div className="mt-4">
//           <img
//             src={selectedImage}
//             alt="Uploaded Plant"
//             className="rounded-md shadow-lg max-w-md"
//           />
//         </div>
//       )}

//       {/* Show result based on plant match */}
//       {isPlant ? (
//         <p className="text-green-600 font-bold mt-4">
//           This is a recognized plant!
//         </p>
//       ) : (
//         selectedImage && (
//           <p className="text-red-600 font-bold mt-4">
//             Sorry! This plant information not found in our database!
//           </p>
//         )
//       )}

//       {/* Render the matchedPlant details */}
//       {matchedPlant && (
//         <div className="p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {matchedPlant.length > 0 ? (
//               matchedPlant.map((matchedItem) => (
//                 <PublishCard
//                   key={matchedItem.publishId} // Use a unique key
//                   title={matchedItem.title}
//                   description={matchedItem.description}
//                   image={matchedItem.image}
//                   tag={matchedItem.tag}
//                   author={matchedItem.author}
//                   id={matchedItem._Id}
//                 />
//               ))
//             ) : (
//               <div className="col-span-full text-center text-gray-500">
//                 No published items to display
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Additional button to trigger scan action */}
//       {selectedImage && (
//         <button
//           onClick={() => alert("Scanning the plant...")}
//           className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Scan Plant
//         </button>
//       )}
//     </div>
//   );
// };

// export default Scan;

import React, { useState } from "react";
import { useUser } from "../contexts/useContext";
import { useTheme } from "next-themes";
import PublishCard from "./PublishCard";

const Scan = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlant, setIsPlant] = useState(false);
  const [matchedPlant, setMatchedPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isScanned, setIsScanned] = useState(false); // New state to track scan initiation
  const { published } = useUser();
  const { theme } = useTheme();

  // Handler for file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 400;
        const scaleSize = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scaleSize;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert the resized image back to a blob and display it
        canvas.toBlob((blob) => {
          const resizedImageUrl = URL.createObjectURL(blob);
          setSelectedImage(resizedImageUrl);
          setIsScanned(false); // Reset scan state when a new image is uploaded
        });
      };

      const foundPlant = published.find((pub) =>
        file.name.toLowerCase().includes(pub.title.toLowerCase())
      );

      if (foundPlant) {
        setIsPlant(true);
        setMatchedPlant([foundPlant]);
      } else {
        setIsPlant(false);
        setMatchedPlant(null);
      }
    }
  };

  // Function to handle the scanning action
  const handleScan = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsScanned(true); // Mark the scan as completed after the loading finishes
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Scan Your Plant</h1>

      {/* Upload Button */}
      <label className="cursor-pointer flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-200 text-black font-bold py-2 px-4 transition duration-200 ease-in-out">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <span className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 7 9-7"
            />
          </svg>
          <span>Upload from Gallery</span>
        </span>
      </label>

      {/* Display the selected image */}
      {selectedImage && (
        <div className="mt-1">
          <img
            src={selectedImage}
            alt="Uploaded Plant"
            className="rounded-md shadow-lg max-w-md "
          />
        </div>
      )}

      {/* Show result based on plant match */}
      {isPlant ? (
        <p className="text-green-600 font-bold "></p>
      ) : (
        selectedImage && (
          <p className="text-red-600 font-bold mt-4">
            Sorry! This plant information not found in our database!
          </p>
        )
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="mt-4">
          <p className="text-blue-500 font-bold">Scanning...</p>
          <div className="loader"></div>
        </div>
      )}

      {/* Show scan button when image is uploaded and not loading */}
      {selectedImage && !isLoading && (
        <button
          onClick={handleScan}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
        >
          Scan Plant
        </button>
      )}

      {/* Render the matchedPlant details only after clicking Scan */}
      <div className="flex justify-center items-center">
  {matchedPlant && isScanned && !isLoading && (
    <div className="p-4 mt-6 w-full max-w-5xl text-center">
      {isPlant ? (
        <p className="text-green-600 font-bold mt-4">
          This is a recognized plant!
        </p>
      ) : (
        selectedImage &&  <p className="text-red-600 font-bold mt-4">
        Sorry! This plant information not found in our database!
      </p>
      )}
      
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {matchedPlant.map((matchedItem) => (
          <PublishCard
            key={matchedItem.publishId}
            title={matchedItem.title}
            description={matchedItem.description}
            image={matchedItem.image}
            tag={matchedItem.tag}
            author={matchedItem.author}
            id={matchedItem._Id}
          />
        ))}
      </div>
    </div>
  )}
</div>

    </div>
  );
};

export default Scan;
