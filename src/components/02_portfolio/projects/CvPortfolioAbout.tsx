import { useCvRuslanContext } from "../../../context/CvRuslanContext";

const CvPortfolioAbout = () => {
  const { aboutProjectRef, projectsContainer, portfolioChecking } = useCvRuslanContext();

  const provedProject = projectsContainer.find((prj) => prj.id === portfolioChecking.projectNum)!;

  return (
    <div ref={aboutProjectRef} className="duration-200 aspect-project py-2 px-4 flex flex-col gap-2 relative">
      <h3 className="text-left">{provedProject.nameOfProject}</h3>
      <p data-with-indent>{provedProject.about}</p>
      <div className="flex gap-4 justify-center absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-max">
        <button className="bg-white px-2 py-1 rounded-lg duration-150 hover:translate-y-[-0.25rem] hover:shadow-buttonShadow hover:text-white hover:bg-rose-300">
          <a href={provedProject.linkLive}>Life page</a>
        </button>
        <button className="bg-white px-2 py-1 rounded-lg duration-150 hover:translate-y-[-0.25rem] hover:shadow-buttonShadow hover:text-white hover:bg-rose-300">
          <a href={provedProject.linkRepo}>Repository</a>
        </button>
      </div>
    </div>
  );
};

export default CvPortfolioAbout;
