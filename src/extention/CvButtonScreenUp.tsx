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
        isMobileScreenDown ? "opacity-100" : "pointer-events-none opacity-0"
      } fixed bottom-4 right-8 grid aspect-square w-10 rotate-90 cursor-pointer place-items-center rounded-lg bg-orange-300 active:scale-75 active:bg-orange-400`}
    >
      <img
        src={process.env.PUBLIC_URL + "/img/pluggins/screenUp.svg"}
        alt=""
        className=" w-3/4"
      />
    </div>
  );
};

export default CvButtonScreenUp;
