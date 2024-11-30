/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

// Importing images dynamically based on the `id`
import info1 from "../../../src/assets/info/info1.png";
import info2 from "../../../src/assets/info/info2.png";
import info3 from "../../../src/assets/info/info3.png";
import info4 from "../../../src/assets/info/info4.png";


const InfoCard = ({ content, id }) => {

  const images = {
    1: info1,
    2: info2,
    3: info3,
    4: info4,
   
  };

  return (
    <Box className="flex flex-col gap-2 items-center bg-white p-5 text-gray-800">
      <img
        height={50}
        width={50}
        src={images[id]} 
        alt={content}
      />

      <h1 className="uppercase text-center font-extrabold">{content}</h1>
    </Box>
  );
};

export default InfoCard;
