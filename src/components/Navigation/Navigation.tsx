import { useRuslanContext } from "../../context/RuslanContext";
import styles from "./Navigation.styles";
import { menuOptions } from "./Navigation.data";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
  const { navpanelRef, isBurgerMenuOpen } = useRuslanContext();

  const styleNavigation = `${styles.navigation} ${
    isBurgerMenuOpen ? null : "-translate-y-screenOutY"
  }`;
  const onClickActivateLink = (e: React.MouseEvent<HTMLLIElement>) => {
    const listOfOpened = [...document.querySelectorAll("[data-checked]")];
    listOfOpened.map((element) => element.removeAttribute("data-checked"));

    e.currentTarget.setAttribute("data-checked", "");
  };

  const menuOptionsList = menuOptions.map((option) => (
    <NavigationLink
      key={option.id}
      link={option.url}
      name={option.name}
      onClickActivateLink={onClickActivateLink}
    />
  ));

  return (
    <nav ref={navpanelRef} className={styleNavigation}>
      <ul className={styles.list}>{menuOptionsList}</ul>
    </nav>
  );
};

export default Navigation;
