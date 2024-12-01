import { AppBar, Button, Toolbar } from "@mui/material";


import companyLogo from "../../assets/companyLogo.png";
const GradientAppBar = () => {
  return (
    <AppBar
      position="static"
      className="header-background px-5 py-2"
      sx={{
       
        boxShadow: "none", 
      }}
    >
      <Toolbar className="flex items-center justify-between">
        <img
          className="w-[93px] h-[53px] lg:w-[104px] lg:h-[60px]"
          src={companyLogo}
          alt="Company Logo"
        />

        <Button
          className="text-white border border-[#0813D0] rounded-[5px] text-[12px] font-light uppercase !bg-[#0813D0] 
  md:text-[14px] "
          variant="contained"
        >
          call us now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default GradientAppBar;
