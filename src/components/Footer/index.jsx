import { Box, Divider } from "@mui/material"


const Footer = () => {
  return (
    <Box className="px-5 md:px-10 lg:px-24 text-center space-y-3 md:space-y-5 lg:space-y-6 text-lg font-normal text-[#545454] ">
      <Box>
        <h1 className="text-lg ">Email ID – info@iitianspace.com</h1>
        <h1 className="text-lg ">
          Phone – 022 6177 9777, 77000 44483, 89769 95814
        </h1>
      </Box>
      <Divider
        sx={{
          borderTop: "1px dashed red", // Set dashed style and red color
          marginY: 2, // Add vertical margin if needed
        }}
      />
      <h1 className="text-black">
        All right reserved | IITians PACE Education Pvt. Ltd.
      </h1>
    </Box>
  );
}

export default Footer