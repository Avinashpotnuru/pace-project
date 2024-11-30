import { Box, Divider, Stack } from "@mui/material";
import { scholarshipContent } from "../../data/scholarshipExam";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";


import scholarship1 from "../../assets/scholarship/scholarShip1.jpg";
import scholarship2 from "../../assets/scholarship/scholarShip2.jpg";
import scholarship3 from "../../assets/scholarship/scholarShip3.jpg";
import scholarship4 from "../../assets/scholarship/scholarShip4.jpg";
import scholarship5 from "../../assets/scholarship/scholarShip5.jpg";

const ScholarshipExam = () => {
  const [selectArrow, setSelectArrow] = useState(1);

  const images = [
    scholarship1,
    scholarship2,
    scholarship3,
    scholarship4,
    scholarship5,
  ];

  const isSelected = (id) => {
    return selectArrow === id;
  };

  return (
    <Box className="px-5 md:px-10 lg:px-28 bg-[#fff8ee] py-14 lg:py-12">
      <h1 className="font-normal lg:py-6 text-sm lg:w-1/2">
        Hurry! Final opportunity to maximize your scholarship with a limited
        syllabus and join the best peer group. The syllabus expands in
        November—this is your last chance to secure a higher scholarship with
        reduced content. Don’t miss out, enroll now!
      </h1>
      <Box className="flex flex-col md:flex-row gap-2 py-5 md:gap-4 lg:gap-8">
        <Box className="flex-1">
          <Box>
            {scholarshipContent.map((item) => (
              <Box key={item.id}>
                <Stack
                  onClick={() => setSelectArrow(item.id)}
                  direction="row"
                  justifyContent="space-between"
                >
                  <h1
                    className={`font-bold ${
                      isSelected(item.id) ? "text-[#272727]" : "text-[#878787]"
                    }`}
                  >
                    {item.content}
                  </h1>
                  {isSelected(item.id) && (
                    <PlayArrowIcon className="text-[#FF8A4B]" />
                  )}
                </Stack>
                <Divider sx={{ borderColor: "blue", marginY: 2 }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex-1">
          <img
            className="w-full h-auto"
            src={images[selectArrow - 1]} // Use the correct image index
            alt="Scholarship"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScholarshipExam;
