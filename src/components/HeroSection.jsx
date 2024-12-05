import HeroImg from "../assets/images/hero-img.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`, // Replace with your image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-2xl px-10 lg:px-20 text-center font-bold md:text-4xl lg:text-5xl container">
          STUDENTS’ INDUSTRIAL WORK EXPERIENCE SCHEME (SIWES)
          
          OLABISI ONABANJO UNIVERSITY, AGO-IWOYE
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
