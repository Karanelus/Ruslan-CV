import { useRuslanContext } from "../../../context/RuslanContext";
import portfolioData from "../Portfolio.data";
import styles from "../Portfolio.styles";
import PortfolioInfoLinkButton from "./PortfolioInfoLinkButton";

const PortfolioInfo = () => {
  const { PortfolioInfoRef, portfolioChecking } = useRuslanContext();

  const projectInfo = portfolioData.projects;
  const showedProject = projectInfo.find(
    (project) => project.id === portfolioChecking.projectNumber,
  )!;
  const sectionStylesShortcut = styles.portfolioSection.projectInfoSection;
  const headerText = showedProject.nameOfProject;
  const aboutProjectText = showedProject.about;
  const linkButtonShortcut = portfolioData.linkButtons;
  const buttonLink = (name: string): string => {
    if (name === linkButtonShortcut.at(0)) {
      return showedProject.linkLive;
    }
    return showedProject.linkRepo;
  };
  const linkButtons = linkButtonShortcut.map((button) => (
    <PortfolioInfoLinkButton
      key={button}
      link={buttonLink(button)}
      name={button}
    />
  ));

  return (
    <div ref={PortfolioInfoRef} className={sectionStylesShortcut.container}>
      <h3 className={sectionStylesShortcut.headerText}>
        <b>{headerText}</b>
      </h3>
      <p data-with-indent>{aboutProjectText}</p>
      <div className={sectionStylesShortcut.linkButtons.container}>
        {linkButtons}
      </div>
    </div>
  );
};

export default PortfolioInfo;
