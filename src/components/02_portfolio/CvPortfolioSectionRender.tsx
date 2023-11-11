import CvPortfolioProjects from "./projects/CvPortfolioProjects";

const CvPortfolioSectionRender = () => {
  return (
    <div className=" bg-orange-200 rounded-[1rem] px-4 py-8 w-section md:mb-12 mb-8 animate-opening">
      <CvPortfolioProjects />
    </div>
  );
};

export default CvPortfolioSectionRender;
