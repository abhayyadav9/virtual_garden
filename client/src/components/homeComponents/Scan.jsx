import React, { useState } from "react";
import { useUser } from "../contexts/useContext";
import PlantGallery from "./PlantGallery";

const Scan = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlant, setIsPlant] = useState(false);
  const [matchedPlant, setMatchedPlant] = useState(null); // State to store the matched plant
  const { published } = useUser(); // Get the published data from context

  // Handler for file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Resize the uploaded image
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 400; // Set a maximum width for the image
        const scaleSize = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scaleSize;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert the resized image back to a blob and display it
        canvas.toBlob((blob) => {
          const resizedImageUrl = URL.createObjectURL(blob);
          setSelectedImage(resizedImageUrl);
        });
      };

      // Check if the uploaded file name contains any of the published titles
      const foundPlant = published.find((pub) =>
        file.name.toLowerCase().includes(pub.title.toLowerCase())
      );

      if (foundPlant) {
        setIsPlant(true);
        setMatchedPlant(foundPlant); // Set the matched plant
      } else {
        setIsPlant(false);
        setMatchedPlant(null); // Reset if no plant is found
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Scan Your Plant</h1>

      {/* Upload Button */}
      <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        Upload from Gallery
      </label>

      {/* Display the selected image */}
      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage}
            alt="Uploaded Plant"
            className="rounded-md shadow-lg max-w-md"
          />
        </div>
      )}

      {/* Show result based on plant match */}
      {isPlant ? (
        <p className="text-green-600 font-bold mt-4">
          This is a recognized plant!
        </p>
      ) : (
        selectedImage && (
          <p className="text-red-600 font-bold mt-4">
            Sorry! This plant information not found in our database!
          </p>
        )
      )}

      {/* Render the PlantGallery if a plant is found */}
      {matchedPlant?matchedPlant.description:" "





      }

      {/* Additional button to trigger scan action */}
      {selectedImage && (
        <button
          onClick={() => alert("Scanning the plant...")}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Scan Plant
        </button>
      )}
    </div>
  );
};

export default Scan;



import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
    </div>
  );
}
