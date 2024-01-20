import styles from "./Portfolio.styles";

type Props = {
  onClickArrow: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  alt: string;
};

const PortfolioSectionButton = ({ onClickArrow, value, alt }: Props) => {
  const stylesShortcut = styles.portfolioSection.arrowButton;
  const ifButtonLeft =
    value === "left" ? "-translate-x-1/2" : "translate-x-1/2";
  const buttonStyle = `${stylesShortcut} ${ifButtonLeft}`;

  return (
    <button onClick={onClickArrow} value={value} className={buttonStyle}>
      <img src={process.env.PUBLIC_URL + "/img/pluggins/arrow.svg"} alt={alt} />
    </button>
  );
};

export default PortfolioSectionButton;
