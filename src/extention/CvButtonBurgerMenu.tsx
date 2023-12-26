import { useCvRuslanContext } from "../context/CvRuslanContext";

const CvButtonBurgerMenu = () => {
  const { setIsBurgerMenuOpen } = useCvRuslanContext();

  const onClickBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <div
      onClick={onClickBurgerMenu}
      className={`fixed right-8 top-4 grid aspect-square w-8 cursor-pointer place-items-center rounded-md bg-orange-300 duration-150 active:scale-90 active:bg-orange-400 md:hidden`}
    >
      <img
        src={process.env.PUBLIC_URL + "/img/pluggins/burgerMenu.svg"}
        alt=""
      />
    </div>
  );
};

export default CvButtonBurgerMenu;
