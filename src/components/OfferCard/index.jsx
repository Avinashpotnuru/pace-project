/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";


const OfferCard = ({index,activeIndex,cards,date,scholarship}) => {
  return (
    <Box
      key={index}
      className="flex-shrink-0 snap-center flex flex-col items-center w-full p-2 bg-[#f7f7f7] rounded-lg shadow-lg"
    >
      <Box className="h-[30%]  flex flex-col items-center space-y-3">
        <h1 className="text-2xl font-light">Admission period</h1>
        <Divider sx={{ borderColor: "#FF8A4B", width: "100%" }} />
        <h1 className="text-xl font-semibold uppercase">{date}</h1>
      </Box>
      <Box className="  bg-rounded-lg shadow-lg p-2 h-64 flex flex-col items-center justify-around w-full bg-[#FF8A4B] rounded-lg ">
        <h1 className="text-xl font-light uppercase">scholarship upto</h1>
        <h1 className="text-5xl  font-extrabold uppercase">{scholarship}</h1>
        <h1 className="text-xl font-light uppercase">on tuition fee</h1>
        <Box className="flex space-x-2 mt-4 md:hidden ">
          {cards.map((_, index) => (
            <Box
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === activeIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
             
}

export default OfferCard;
