import { useCvRuslanContext } from "../context/CvRuslanContext";
import styles from "./MobileVersionButton.styles";

const ButtonScreenUp = () => {
  const { isMobileScreenDown } = useCvRuslanContext();

  const onClickToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const screenUpStyle = styles.screenUp;
  const buttonActiveUpdate = isMobileScreenDown
    ? screenUpStyle.active
    : screenUpStyle.hidden;

  const buttonStyle = `${screenUpStyle.basic} ${buttonActiveUpdate}`;

  return (
    <div onClick={onClickToTop} className={buttonStyle}>
      <img
        src={process.env.PUBLIC_URL + "/img/pluggins/screenUp.svg"}
        alt="Screen up button"
      />
    </div>
  );
};

export default ButtonScreenUp;
