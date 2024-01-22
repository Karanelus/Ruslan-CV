import { useRuslanContext } from "../../../context/RuslanContext";
import portfolioData from "../Portfolio.data";
import styles from "../Portfolio.styles";
import PortfolioImageCheck from "./PortfolioImageCheck";

const PortfolioImage = () => {
  const { imageProjectRef, portfolioChecking, setPortfolioChecking } =
    useRuslanContext();

  const sectionStyleShortcut = styles.portfolioSection.imageSection;
  const imageSrc =
    process.env.PUBLIC_URL +
    `/img/02_portfolio/project_${portfolioChecking.projectNumber}/img${portfolioChecking.photoNumber}.png`;
  const onClickSetPhoto = (e: React.MouseEvent<HTMLInputElement>) => {
    setPortfolioChecking({
      ...portfolioChecking,
      photoNumber: e.currentTarget.id,
    });
  };

  const checkButtons = portfolioData.checkButtons.map((check) => (
    <PortfolioImageCheck
      key={check}
      id={check}
      onClickSetPhoto={onClickSetPhoto}
    />
  ));

  return (
    <div ref={imageProjectRef} className={sectionStyleShortcut.container}>
      <img src={imageSrc} alt="" className={sectionStyleShortcut.image} />
      <form className={sectionStyleShortcut.imageCheckButtons.container}>
        {checkButtons}
      </form>
    </div>
  );
};

export default PortfolioImage;
