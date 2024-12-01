import { Box } from "@mui/material";
import ourTeam from "../../assets/ourTeam.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const OurAlumini = () => {
  const images = Array.from(
    { length: 15 },
    (_, i) => `../../../src/assets/team/team${i + 1}.png`
  );

 
  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    chunks.push(images.slice(i, i + chunkSize));
  }

   const renderIndicator = (onClickHandler, isSelected, index, label) => {
    return (
      <li
        className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${
          isSelected ? "bg-orange-500" : "bg-gray-300"
        }`}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        role="button"
        tabIndex={0}
        aria-label={`Slide ${label}`}
      />
    );
  };

  return (
    <>
      <Box className="md:flex flex-col items-center text-[#545454] p-5 lg:p-10 space-y-3 lg:space-y-5 text-center hidden">
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">
          Our Alumini
        </h1>
        <h1>
          PACE is proud of its alumni in leading conglomerates like Google,
          Facebook, Twitter, LinkedIn, Tesla, McKinsey and many more across the
          globe.
        </h1>
        <img src={ourTeam} alt="Our Team" />
      </Box>

      <Box className="p-5 md:hidden">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
          renderIndicator={renderIndicator}
        >
          {chunks.map((chunk, index) => (
            <div
              key={index}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
              {chunk.map((image, imgIndex) => (
                <div key={imgIndex} className="bg-white p-2 shadow rounded">
                  <img
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    className="rounded w-full"
                  />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default OurAlumini;
