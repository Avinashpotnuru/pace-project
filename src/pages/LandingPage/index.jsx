
import { Box, Button} from "@mui/material";
import { AboutPace, Admission, CourseDetails, Footer, Header, OurAlumini, Register, ScholarshipExam } from "../../components";
import PersonIcon from "@mui/icons-material/Person";
import CustomModal from "../../components/Criteria";
const LandingPage = () => {
  return (
    <Box className="relative mb-40">
      <Header />
      <Register />
      <Admission />
      <ScholarshipExam />
      <AboutPace />
      <CourseDetails />
      <OurAlumini />
      <Footer />
      <CustomModal/>
      <Box
        sx={{
          position: "fixed", // Fixed position relative to the viewport
          bottom: "16px", // Distance from the bottom
          left: "50%", // Position from the left (centered)
          transform: "translateX(-50%)", // Offset to truly center it
          zIndex: 1000,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Ensure button is above other elements
        }}
      >
        <Box gap={1} spacing={2} display="flex">
          <Button
            href="#registration-section"
            endIcon={<PersonIcon />}
            className="!bg-[#0813D0] !text-white flex items-center lg:!p-3 lg:!px-3  !rounded-full !font-extrabold !uppercase tracking-tight !text-[10px] "
          >
            Register for Ace of Pace Now!
          </Button>
          <Button
            href="#course-section"
            className="!bg-[#0813D0] !text-white flex items-center   !rounded-full !font-extrabold !uppercase tracking-tight !text-[10px] "
          >
            course details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
