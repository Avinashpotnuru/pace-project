
import { Box, Button} from "@mui/material";
import { Admission, Footer, Header, Register } from "../../components";
import PersonIcon from "@mui/icons-material/Person";
const LandingPage = () => {
  return (
    <Box className="relative mb-40">
      
      <Header />
      <Register />
      <Admission />
      <Footer/>
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
        <Box
          gap={3}
          spacing={2}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Button
            endIcon={<PersonIcon />}
            className="!bg-[#0813D0] !text-white flex items-center gap-3 !P-2 md:!p-3 lg:!p-5 !rounded-full !font-extrabold !uppercase tracking-tight text-[10px] "
          >
            Register for Ace of Pace Now!
          </Button>
          <Button
            
            className="!bg-[#0813D0] !text-white flex items-center gap-3 !P-2 md:!p-3 lg:!p-5 !rounded-full !font-extrabold !uppercase tracking-tight text-[10px] "
          >
            course details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
