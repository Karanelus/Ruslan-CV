import CvPortfolioProjects from "./projects/CvPortfolioProjects";

const CvPortfolioSectionRender = () => {
  return (
    <div className="mb-8 w-section animate-opening rounded-[1rem] bg-orange-200 px-4 py-8 md:mb-12">
      <CvPortfolioProjects />
    </div>
  );
};

export default CvPortfolioSectionRender;
