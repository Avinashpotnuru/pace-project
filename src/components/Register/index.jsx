import { Box, Link, Stack } from "@mui/material";

import { infoContent } from "../../data/info";
import InfoCard from "../InfoCard";
import RegistrationForm from "../RegistrationForm";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Register = () => {
  return (
    <Box className="bg-registerBanner bg-cover bg-center min-h-screen w-full p-5 lg:p-10 flex flex-col lg:flex-row text-white gap-4 lg:gap-14">
      <Box className="flex-1 text-center lg:text-start space-y-5 lg:space-y-8 ">
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">
          Scholarship Exams for <br />
          Classes 25-27:
        </h1>
        <h1 className="text-2xl lg:text-4xl font-bold uppercase text-yellow-400">
          Register Yourself now!
        </h1>

        <h1>
          Prepare for success with Pace IIT & Medical. Register your interest in
          our upcoming scholarship exams for Classes 2025-27. Don’t miss the
          opportunity to join the best JEE/NEET/Foundation classes in Pune!
        </h1>

        <Box className="lg:grid grid-cols-4 text-white hidden  gap-2">
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
      <Box className="flex-1 bg-white p-5 rounded-lg">
        <Box className="flex flex-col items-center bg-orange-400 p-5 pt-5  lg:pb-40 rounded-lg">
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
