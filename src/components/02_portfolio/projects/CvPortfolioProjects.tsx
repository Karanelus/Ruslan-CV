import { useState } from "react";
import { useCvRuslanContext } from "../../../context/CvRuslanContext";
import CvPortfolioAbout from "./CvPortfolioAbout";
import CvPortfolioImage from "./CvPortfolioImage";

const CvPortfolioProjects = () => {
  const { aboutProjectRef, imageProjectRef, portfolioChecking, setPortfolioChecking, projectsContainer } =
    useCvRuslanContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickArrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    const aboutProject = aboutProjectRef.current;
    const imageProject = imageProjectRef.current;
    const buttonProve = e.currentTarget?.value;
    if (isClicked === false) {
      setIsClicked(true);
      imageProject?.classList.add("translate-y-[-0.25rem]", "opacity-0");
      aboutProject?.classList.add("translate-y-[-0.25rem]", "opacity-0");
      if (buttonProve === "left") {
        imageProject?.classList.add("delay-200");
        imageProject?.addEventListener(
          "transitionend",
          () => {
            if (portfolioChecking.projectNum === 1) {
              setPortfolioChecking({ ...portfolioChecking, projectNum: 4 });
            } else {
              setPortfolioChecking({ ...portfolioChecking, projectNum: portfolioChecking.projectNum - 1 });
            }
            aboutProject?.classList.remove("translate-y-[-0.25rem]", "opacity-0");
            imageProject?.classList.remove("translate-y-[-0.25rem]", "opacity-0", "delay-200");
            setIsClicked(false);
          },
          { once: true }
        );
      } else if (buttonProve === "right") {
        aboutProject?.classList.add("delay-200");
        aboutProject?.addEventListener(
          "transitionend",
          () => {
            if (portfolioChecking.projectNum === projectsContainer.length) {
              setPortfolioChecking({ ...portfolioChecking, projectNum: 1 });
            } else {
              setPortfolioChecking({ ...portfolioChecking, projectNum: portfolioChecking.projectNum + 1 });
            }
            imageProject?.classList.remove("translate-y-[-0.25rem]", "opacity-0");
            aboutProject?.classList.remove("translate-y-[-0.25rem]", "opacity-0", "delay-200");
            setIsClicked(false);
          },
          { once: true }
        );
      }
    } else return;
  };

  return (
    <>
      <h2>My Projects</h2>
      <div className="bg-orange-100 rounded-lg px-4 py-8 flex flex-col items-center">
        <section className="grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 w-full rounded-2xl md:py-4 md:px-8 py-2 px-4 relative">
          <CvPortfolioImage />
          <CvPortfolioAbout />
          <button
            onClick={onClickArrow}
            value="left"
            className="aspect-square grid place-items-center rounded-md bg-orange-200 h-7 absolute top-2/4 translate-y-[-50%] hover:translate-y-[calc(-50%-0.25rem)] translate-x-[-50%] duration-150 hover:shadow-buttonShadow hover:bg-orange-400 active:scale-90"
          >
            <img src="/img/pluggins/arrow.svg" alt="Arrow left" className="rotate-180" />
          </button>
          <button
            onClick={onClickArrow}
            value="right"
            className="aspect-square grid place-items-center rounded-md bg-orange-200 h-7 absolute top-2/4 translate-y-[-50%] hover:translate-y-[calc(-50%-0.25rem)] translate-x-[50%] duration-150 hover:shadow-buttonShadow hover:bg-orange-400 right-0 active:scale-90"
          >
            <img src="/img/pluggins/arrow.svg" alt="Arrow rigth" />
          </button>
        </section>
      </div>
    </>
  );
};

export default CvPortfolioProjects;
