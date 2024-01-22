import { useRuslanContext } from "../context/RuslanContext";
import styles from "./MobileVersionButton.styles";

const ButtonBurgerMenu = () => {
  const { setIsBurgerMenuOpen } = useRuslanContext();

  const onClickBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <div onClick={onClickBurgerMenu} className={styles.burgerMenu}>
      <img
        src={process.env.PUBLIC_URL + "/img/pluggins/burgerMenu.svg"}
        alt="Burger menu button"
      />
    </div>
  );
};

export default ButtonBurgerMenu;
