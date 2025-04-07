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
          <Box className="flex flex-col items-center m-auto text-center md:items-start">
            <h1 className="text-2xl font-bold text-center text-white uppercase lg:text-4xl md:text-left">
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
            <h1 className="text-sm italic font-bold text-center text-black uppercase lg:text-2xl md:text-left">
              Eligibility
            </h1>
            <h1 className="text-xl font-extrabold text-center text-white uppercase lg:text-3xl md:text-left">
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

        <Box className="flex-1 p-5 m-auto space-y-3 bg-white rounded-lg lg:space-y-5 md:p-8">
          {courseDetailsContent.map((item) => (
            <h1 key={item.id} className="text-black">
              {item.title}
            </h1>
          ))}
        </Box>
      </Box>
      <Box className="bg-[#551E00]">
        <h1 className="p-5 text-sm font-normal text-left text-white lg:text-2xl md:text-center lg:p-10 lg:px-20">
          T&C – Students who have appeared for the online scholarship exam and
          have qualified for scholarships will be called for an interview by
          faculty at their respective centers.
        </h1>
      </Box>
    </>
  );
};

export default CourseDetails;
