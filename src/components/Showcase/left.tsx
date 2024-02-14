import React from "react";
import { BikeDelivery } from "../Assets";
import { motion } from "framer-motion";
const Left = () => {
  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-orange-500 font-bold">Bike Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[1rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
      Experience Authentic Syrian & Lebanese Cuisine in the
        <span className="text-orange-600 text-[2rem] lg:text-[4rem]">
          {" "}
          Heart of Leuven
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">

Savor the rich flavors of the Middle East at our restaurant, where traditional recipes meet modern flair.
Indulge in a culinary journey through Syria and Lebanon, where each dish is crafted with care and passion.
From aromatic spices to mouthwatering mezze, discover the true essence of Levantine cuisine.
Join us for a dining experience like no other.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Order Now
      </motion.button>
    </div>
  );
};

export default Left;
