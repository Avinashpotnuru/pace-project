import  { useRef, useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import OfferCard from "../OfferCard";

import {offerData} from "../../data/offers"


const Admission = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = Array.from({ length: 4 });

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -current.offsetWidth, behavior: "smooth" });
    } else {
      current.scrollBy({ left: current.offsetWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const { current } = scrollRef;
    const cardWidth = current.offsetWidth;
    const newIndex = Math.round(current.scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", handleScroll, { passive: true });
      return () => current.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box className="my-6 md:px-8 xl:px-36">
      <Box className="py-3 lg:py-8 ">
        <h1 className="text-2xl font-extrabold text-center uppercase lg:text-3xl">
          admission 2025 – 27
        </h1>
        <h1 className="text-2xl font-extrabold text-center text-blue-600 uppercase lg:text-3xl">
          scholarship criteria
        </h1>
      </Box>
      <Box className="flex flex-col items-center justify-center md:hidden">
        <Box className="relative flex items-center justify-center w-full p-7">
         
          <IconButton
            onClick={() => scroll("left")}
            className="absolute z-10 transform -translate-y-1/2 bg-white shadow-lg top-1/2 -left-6 sm:-left-10 lg:hidden"
          >
            <ArrowBackIos />
          </IconButton>

        
          <Box
            ref={scrollRef}
            className="flex overflow-x-scroll lg:overflow-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {offerData.map((val) => (
              <OfferCard
                key={val.id}
                {...val}
                cards={cards}
                activeIndex={activeIndex}
              />
            ))}
          </Box>

         
          <IconButton
            onClick={() => scroll("right")}
            className="absolute z-10 transform -translate-y-1/2 bg-white shadow-lg top-1/2 -right-6 sm:-right-10 lg:hidden"
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
      <Box className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4">
        {offerData.map((val) => (
          <OfferCard
            key={val.id}
            {...val}
            cards={cards}
            activeIndex={activeIndex}
          />
        ))}
      </Box>
      <h1 className="p-5 text-center text-red-500 lg:p-10">
        Note : Maximum criteria for online exams will be 15% less for each time
        period.
      </h1>
    </Box>
  );
};

export default Admission;
