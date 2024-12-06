import { Box, Divider } from "@mui/material";

import { courseDetailsContent } from "../../data/courseContent";

const CourseDetails = () => {
  return (
    <>
      <Box
        id="course-section"
        className=" flex flex-col  justify-center  items-center md:items-start lg:flex-row p-5 pb-10 lg:p-10 gap-3 lg:gap-14 lg:px-14 bg-[#ff8a4b] "
      >
        <Box className="">
          <Box className="text-center m-auto  flex flex-col items-center md:items-start">
            <h1 className="text-2xl lg:text-4xl font-bold uppercase text-white text-center md:text-left">
              NEET <br />
              course details
            </h1>
            <Divider
              sx={{
                borderTop: "1px dashed white",
                marginY: 2,
                width: "50%",
              }}
            />
          </Box>

          <Box>
            <h1 className="text-sm lg:text-2xl font-bold uppercase text-black text-center md:text-left italic">
              Eligibility
            </h1>
            <h1 className="text-xl lg:text-3xl font-extrabold uppercase text-white text-center md:text-left">
              Students studying in class <br />{" "}
              <span className="text-black">6th, 7th, 8th, 9th or 10th</span>
            </h1>
          </Box>
        </Box>
        <Divider
          sx={{
            borderColor: "white", // Set the divider's color to white
            borderWidth: "1px", // Set the thickness
            borderStyle: "solid", // Style the border
            display: { sm: "none", md: "block" }, // Show only on medium and larger screens
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />

        <Box className="flex-1 space-y-3 lg:space-y-5 bg-white p-5 md:p-8 rounded-lg m-auto">
          {courseDetailsContent.map((item) => (
            <h1 key={item.id} className="text-black">
              {item.title}
            </h1>
          ))}
        </Box>
      </Box>
      <Box className="bg-[#551E00]">
        <h1 className="text-sm lg:text-2xl font-normal  text-white md:text-center text-left p-5 lg:p-10 lg:px-20">
          T&C – Students who have appeared for the online scholarship exam and
          have qualified for scholarships will be called for an interview by
          faculty at their respective centers.
        </h1>
      </Box>
    </>
  );
};

export default CourseDetails;
