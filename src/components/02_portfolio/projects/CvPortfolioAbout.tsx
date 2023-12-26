import { useCvRuslanContext } from "../../../context/CvRuslanContext";

const CvPortfolioAbout = () => {
  const { aboutProjectRef, projectsContainer, portfolioChecking } =
    useCvRuslanContext();

  const provedProject = projectsContainer.find(
    (prj) => prj.id === portfolioChecking.projectNum,
  )!;

  return (
    <div
      ref={aboutProjectRef}
      className="relative flex aspect-project flex-col gap-2 px-4 py-2 duration-200"
    >
      <h3 className="text-left">{provedProject.nameOfProject}</h3>
      <p data-with-indent>{provedProject.about}</p>
      <div className="absolute bottom-0 right-1/2 flex w-max translate-x-1/2 translate-y-1/2 justify-center gap-4">
        <button className="rounded-lg bg-white px-2 py-1 duration-150 hover:translate-y-[-0.25rem] hover:bg-rose-300 hover:text-white hover:shadow-buttonShadow">
          <a href={provedProject.linkLive}>Life page</a>
        </button>
        <button className="rounded-lg bg-white px-2 py-1 duration-150 hover:translate-y-[-0.25rem] hover:bg-rose-300 hover:text-white hover:shadow-buttonShadow">
          <a href={provedProject.linkRepo}>Repository</a>
        </button>
      </div>
    </div>
  );
};

export default CvPortfolioAbout;
