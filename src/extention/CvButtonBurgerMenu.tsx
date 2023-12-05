import { useCvRuslanContext } from "../context/CvRuslanContext";

const CvButtonBurgerMenu = () => {
  const { setIsBurgerMenuOpen } = useCvRuslanContext();

  const onClickBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <div
      onClick={onClickBurgerMenu}
      className={`duration-150 md:hidden cursor-pointer aspect-square grid place-items-center fixed w-8 rounded-md bg-orange-300 top-4 right-8 active:scale-90 active:bg-orange-400`}
    >
      <img src={process.env.PUBLIC_URL + "/img/pluggins/burgerMenu.svg"} alt="" />
    </div>
  );
};

export default CvButtonBurgerMenu;
