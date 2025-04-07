import { Box } from "@mui/material";
import ourTeam from "../../assets/ourTeam.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const OurAlumini = () => {
  const images = Object.values(
    import.meta.glob("../../assets/team/*.png", { eager: true, as: "url" })
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
      <Box className="flex flex-col items-center text-[#545454] p-5 lg:p-10 space-y-3 lg:space-y-5 text-center ">
        <h1 className="text-2xl font-bold uppercase lg:text-4xl">
          Our Alumini
        </h1>
        <h1 className="text-base lg:text-lg ">
          PACE is proud of its alumni in leading conglomerates like Google,
          Facebook, Twitter, LinkedIn, Tesla, McKinsey and many more across the
          globe.
        </h1>
        <img className="hidden w-full h-auto md:block" src={ourTeam} alt="Our Team" />
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
              className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4"
            >
              {chunk.map((image, imgIndex) => (
                <div key={imgIndex} className="p-2 bg-white rounded shadow">
                  <img
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    className="w-full rounded"
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
