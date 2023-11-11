import { useCvRuslanContext } from "../context/CvRuslanContext";

const CvButtonScreenUp = () => {
  const { isMobileScreenDown } = useCvRuslanContext();

  const onClickToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      onClick={onClickToTop}
      className={`duration-150 ${
        isMobileScreenDown ? "opacity-100" : "opacity-0 pointer-events-none"
      } cursor-pointer aspect-square grid place-items-center fixed w-10 rounded-lg rotate-90 bg-orange-300 bottom-4 right-8 active:scale-75 active:bg-orange-400`}
    >
      <img src="/img/pluggins/screenUp.svg" alt="" className=" w-3/4" />
    </div>
  );
};

export default CvButtonScreenUp;
