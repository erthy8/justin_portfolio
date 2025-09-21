import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onClose]);

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  function SlickArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SlickArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[99] flex justify-center items-center h-screen"
      onClick={onClose}
    >
      <div
        className="bg-white py-4 px-4 sm:px-6 md:px-9 rounded-lg mx-auto z-[999] absolute top-[2rem] sm:top-[4.5rem] border border-black w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-4xl max-h-[90vh] overflow-auto"
        onClick={handleContentClick} // Prevents modal close when clicking on the content
      >
        <h2 className="text-xl font-bold text-black mb-4 text-center">
          {project.name}
        </h2>
        {project.award && (
          <div className="text-center mb-4">
            <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
              🏆 {project.award}
            </span>
          </div>
        )}
        <div className="slider-container my-6 px-2 sm:px-4 flex justify-center">
          <Slider {...settings} className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] h-[12rem] sm:h-[16rem] md:h-[20rem] p-0">
            {project.photos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden w-full h-[12rem] sm:h-[16rem] md:h-[20rem] flex justify-center items-center"
              >
                <img
                  src={photo}
                  alt={`Slide ${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </Slider>
        </div>

        <ul className="list-disc pl-5 py-2">
          {project.bullets.map((point, index) => (
            <li key={index} className="text-gray-600">
              {point}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {project.link === null ? (
            <span className="inline-block bg-[#4d52ff] text-white p-2 mt-2 rounded hover:cursor-not-allowed">
              Private Repo
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4d52ff] text-white p-2 mt-2 rounded hover:cursor-pointer hover:text-white"
            >
              Link
            </a>
          )}
          {project.website ? <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4d52ff] text-white p-2 mt-2 rounded hover:cursor-pointer hover:text-white"
          >
            Website
          </a> : null}
          {project.video ? <a
            href={project.video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4d52ff] text-white p-2 mt-2 rounded hover:cursor-pointer hover:text-white"
          >
            Video
          </a> : null}
        </div>
        <button
          onClick={onClose}
          className="block ml-auto bg-red-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
