/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const InfoCard = ({ content, id }) => {
  return (
    <Box className="flex flex-col  gap-2  items-center        bg-white p-5 text-gray-800">
      <img
        height={50}
        width={50}
        src={`../../../src/assets/info/info${id}.png`}
        alt={content}
      />

      <h1 className="uppercase text-center font-extrabold"> {content} </h1>
    </Box>
  );
};

export default InfoCard;
