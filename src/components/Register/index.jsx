import { Box, Link, Stack } from "@mui/material";

import { infoContent } from "../../data/info";
import InfoCard from "../InfoCard";
import RegistrationForm from "../RegistrationForm";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Register = () => {
  return (
    <Box
      id="registration-section"
      className="flex flex-col w-full min-h-screen gap-4 p-5 text-white bg-center bg-cover bg-registerBanner lg:p-10 lg:flex-row lg:gap-14"
    >
      <Box className="flex-1 py-5 space-y-5 text-center lg:py-10 lg:text-start lg:space-y-8 ">
        <h1 className="text-2xl font-bold uppercase lg:text-4xl">
          Scholarship Exams for <br />
          Classes 25-27:
        </h1>
        <h1 className="text-2xl font-bold text-yellow-400 uppercase lg:text-4xl">
          Register Yourself now!
        </h1>

        <h1>
          Prepare for success with Pace IIT & Medical. Register your interest in
          our upcoming scholarship exams for Classes 2025-27. Don’t miss the
          opportunity to join the best JEE/NEET/Foundation classes in Pune!
        </h1>

        <Box className="hidden grid-cols-4 gap-2 text-white lg:grid">
          {infoContent.map((item) => (
            <InfoCard id={item.id} content={item.content} key={item.id} />
          ))}
        </Box>
        <Stack
          className="uppercase !hidden md:!flex "
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Link
            className="!text-orange-500 !font-semibold !italic !text-xl !decoration-[#FF8A4B]"
            href="#"
            underline="always"
          >
            NEET Course details <KeyboardArrowDownIcon />
          </Link>
          <Link
            className="!text-orange-500 !font-semibold !italic !text-xl !decoration-[#FF8A4B]"
            href="#"
            underline="always"
          >
            Eligibility <KeyboardArrowDownIcon />
          </Link>
        </Stack>
      </Box>
      <Box className="flex-1 p-2 bg-white rounded-lg md:p-5">
        <Box className="flex flex-col p-2 pt-5 bg-orange-400 rounded-lg md:p-5 lg:pb-15">
          <RegistrationForm />
        </Box>
      </Box>
      <Stack
        className="uppercase  md:!hidden  text-center"
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        <Link
          className="!text-orange-500 !font-semibold !italic !text-xl !decoration-[#FF8A4B]"
          href="#"
          underline="always"
        >
          NEET Course details <KeyboardArrowDownIcon />
        </Link>
        <Link
          className="!text-orange-500 !font-semibold !italic !text-xl !decoration-[#FF8A4B]"
          href="#"
          underline="always"
        >
          Eligibility <KeyboardArrowDownIcon />
        </Link>
      </Stack>
    </Box>
  );
};

export default Register;
