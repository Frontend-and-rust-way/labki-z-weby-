"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/1_C_De138ur_97HVfp34DGuQ.png",
    "/281023-10-most-read-books-Feature.webp",
    "/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.webp",
];

export default function AutoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute w-full h-[100%] overflow-hidden  z-[-1]">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Slide"
          className="absolute  z-[-1] top-0 left-0  w-full  h-full"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
}