import { useCvRuslanContext } from "../../../context/CvRuslanContext";
import styles from "../Portfolio.styles";

type Props = {
  onClickSetPhoto: (e: React.MouseEvent<HTMLInputElement>) => void;
  id: string;
};

const PortfolioImageCheck = ({ onClickSetPhoto, id }: Props) => {
  const { portfolioChecking } = useCvRuslanContext();

  const isIdMatches = portfolioChecking.projectPhoto === id;
  const sectionStyleShortcut =
    styles.portfolioSection.imageSection.imageCheckButtons.checkButton;
  const checkStyleNotMatched =
    "hover:-translate-y-1 hover:bg-zinc-500 hover:shadow-buttonShadow hover:before:bg-slate-900";
  const checkStyleMatched =
    "checked:before:scale-100 checked:cursor-default checked:shadow-none checked:before:bg-slate-700 checked:translate-y-0";
  const checkStyle = `${sectionStyleShortcut} ${
    isIdMatches ? checkStyleMatched : checkStyleNotMatched
  }`;

  return (
    <label>
      <input
        type="radio"
        id={id}
        name="imageNum"
        checked={isIdMatches}
        onClick={onClickSetPhoto}
        className={checkStyle}
      />
    </label>
  );
};

export default PortfolioImageCheck;
