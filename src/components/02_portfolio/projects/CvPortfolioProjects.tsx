import { useState } from "react";
import { useCvRuslanContext } from "../../../context/CvRuslanContext";
import CvPortfolioAbout from "./CvPortfolioAbout";
import CvPortfolioImage from "./CvPortfolioImage";

const CvPortfolioProjects = () => {
  const {
    aboutProjectRef,
    imageProjectRef,
    portfolioChecking,
    setPortfolioChecking,
    projectsContainer,
  } = useCvRuslanContext();
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
              setPortfolioChecking({
                ...portfolioChecking,
                projectNum: projectsContainer.length,
              });
            } else {
              setPortfolioChecking({
                ...portfolioChecking,
                projectNum: portfolioChecking.projectNum - 1,
              });
            }
            aboutProject?.classList.remove(
              "translate-y-[-0.25rem]",
              "opacity-0",
            );
            imageProject?.classList.remove(
              "translate-y-[-0.25rem]",
              "opacity-0",
              "delay-200",
            );
            setIsClicked(false);
          },
          { once: true },
        );
      } else if (buttonProve === "right") {
        aboutProject?.classList.add("delay-200");
        aboutProject?.addEventListener(
          "transitionend",
          () => {
            if (portfolioChecking.projectNum === projectsContainer.length) {
              setPortfolioChecking({ ...portfolioChecking, projectNum: 1 });
            } else {
              setPortfolioChecking({
                ...portfolioChecking,
                projectNum: portfolioChecking.projectNum + 1,
              });
            }
            imageProject?.classList.remove(
              "translate-y-[-0.25rem]",
              "opacity-0",
            );
            aboutProject?.classList.remove(
              "translate-y-[-0.25rem]",
              "opacity-0",
              "delay-200",
            );
            setIsClicked(false);
          },
          { once: true },
        );
      }
    } else return;
  };

  return (
    <>
      <h2>My Projects</h2>
      <div className="flex flex-col items-center rounded-lg bg-orange-100 px-4 py-8">
        <section className="relative grid w-full grid-rows-2 rounded-2xl px-4 py-2 sm:grid-cols-2 sm:grid-rows-1 md:px-8 md:py-4">
          <CvPortfolioImage />
          <CvPortfolioAbout />
          <button
            onClick={onClickArrow}
            value="left"
            className="absolute top-2/4 grid aspect-square h-7 translate-x-[-50%] translate-y-[-50%] place-items-center rounded-md bg-orange-200 duration-150 hover:translate-y-[calc(-50%-0.25rem)] hover:bg-orange-400 hover:shadow-buttonShadow active:scale-90"
          >
            <img
              src={process.env.PUBLIC_URL + "/img/pluggins/arrow.svg"}
              alt="Arrow left"
              className="rotate-180"
            />
          </button>
          <button
            onClick={onClickArrow}
            value="right"
            className="absolute right-0 top-2/4 grid aspect-square h-7 translate-x-[50%] translate-y-[-50%] place-items-center rounded-md bg-orange-200 duration-150 hover:translate-y-[calc(-50%-0.25rem)] hover:bg-orange-400 hover:shadow-buttonShadow active:scale-90"
          >
            <img
              src={process.env.PUBLIC_URL + "/img/pluggins/arrow.svg"}
              alt="Arrow rigth"
            />
          </button>
        </section>
      </div>
    </>
  );
};

export default CvPortfolioProjects;
