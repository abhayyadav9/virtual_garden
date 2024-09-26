import React from "react";
import PlantGallery from "./homeComponents/PlantGallery";
import FAQ from "./homeComponents/FAQ";
import Carousel from "./homeComponents/Carsousel";
import Vr from "./OurGarden/Vr";


const       Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Carousel Section */}
      <div className="relative">
        <Carousel />
      </div>

      {/* Plant Gallery Section */}
      <div className=" flex flex-col md:flex-row  gap-6">
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Medicinal Plants
            </h2>
            <div className="py-4">
              <PlantGallery />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;