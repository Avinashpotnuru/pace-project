import { Box, Link } from "@mui/material";

import aboutImage from "../../assets/aboutImage.webp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AboutPace = () => {
  return (
    <Box className="flex flex-col gap-3 px-5 py-10 lg:flex-row lg:gap-14 md:px-10 lg:px-24 lg:py-14 ">
      <Box className="flex-1">
        <img src={aboutImage} className="w-full h-auto" alt="About Pace" />
      </Box>
      <Box className="flex-1 space-y-3 lg:space-y-5">
        <h1 className="text-2xl font-bold uppercase lg:text-4xl">About</h1>
        <h1 className="text-2xl font-bold text-blue-800 uppercase lg:text-4xl">
          PACE IIT & Medical
        </h1>
        <h1>
          Established in 1999, PACE started with a handful of students, a few
          sessions old, the institute scaled new heights of success by providing
          coaching for Engineering and Medical entrance exam preparation. New
          milestones were set each year and the institute achieved a remarkable
          landmark with hundreds of selections in 2008.
          uppercase
        </h1>

        <Link
          className="!text-orange-500 !font-semibold !italic !text-xl !decoration-[#FF8A4B] uppercase"
          href="#"
          underline="always"
        >
          Our alumini <KeyboardArrowDownIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default AboutPace;
