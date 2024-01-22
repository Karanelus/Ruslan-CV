import { useState } from "react";
import { useRuslanContext } from "../../context/RuslanContext";
import PortfolioSectionButton from "./PortfolioSectionButton";
import styles from "./Portfolio.styles";
import portfolioData from "./Portfolio.data";
import PortfolioImage from "./PortfolioImage/PortfolioImage";
import PortfolioInfo from "./PortfolioInfo/PortfolioInfo";

const PortfolioSection = () => {
  const {
    PortfolioInfoRef,
    imageProjectRef,
    portfolioChecking,
    setPortfolioChecking,
  } = useRuslanContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const projectInfo = portfolioData.projects;

  const onClickArrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    const aboutProject = PortfolioInfoRef.current;
    const imageProject = imageProjectRef.current;
    const buttonProve = e.currentTarget?.value;
    if (isClicked === false) {
      setIsClicked(true);
      imageProject?.classList.add("-translate-y-1", "opacity-0");
      aboutProject?.classList.add("-translate-y-1", "opacity-0");
      if (buttonProve === "left") {
        imageProject?.classList.add("delay-200");
        imageProject?.addEventListener(
          "transitionend",
          () => {
            if (portfolioChecking.projectNum === 1) {
              setPortfolioChecking({
                ...portfolioChecking,
                projectNum: projectInfo.length,
              });
            } else {
              setPortfolioChecking({
                ...portfolioChecking,
                projectNum: portfolioChecking.projectNum - 1,
              });
            }
            aboutProject?.classList.remove("-translate-y-1", "opacity-0");
            imageProject?.classList.remove(
              "-translate-y-1",
              "opacity-0",
              "delay-200",
            );
            setIsClicked(false);
          },
          { once: true },
        );
      } else {
        aboutProject?.classList.add("delay-200");
        aboutProject?.addEventListener(
          "transitionend",
          () => {
            if (portfolioChecking.projectNum === projectInfo.length) {
              setPortfolioChecking({ ...portfolioChecking, projectNum: 1 });
            } else {
              setPortfolioChecking({
                ...portfolioChecking,
                projectNum: portfolioChecking.projectNum + 1,
              });
            }
            imageProject?.classList.remove("-translate-y-1", "opacity-0");
            aboutProject?.classList.remove(
              "-translate-y-1",
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

  const PortfolioButtons = portfolioData.arrowButtons.map((button) => (
    <PortfolioSectionButton
      value={button.value}
      alt={button.alt}
      onClickArrow={onClickArrow}
    />
  ));

  const portfolioSectionStyles = styles.portfolioSection;

  return (
    <div className={portfolioSectionStyles.container}>
      <section className={portfolioSectionStyles.infoSplitter}>
        <PortfolioImage />
        <PortfolioInfo />
        {PortfolioButtons}
      </section>
    </div>
  );
};

export default PortfolioSection;
