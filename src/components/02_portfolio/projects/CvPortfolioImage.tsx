import { useCvRuslanContext } from "../../../context/CvRuslanContext";

const CvPortfolioImage = () => {
  const { imageProjectRef, portfolioChecking, setPortfolioChecking } =
    useCvRuslanContext();

  const onClickSetPhoto = (e: React.MouseEvent<HTMLInputElement>) => {
    setPortfolioChecking({
      ...portfolioChecking,
      projectPhoto: Number(e.currentTarget.id),
    });
  };

  return (
    <div
      ref={imageProjectRef}
      className="relative aspect-project px-4 py-2 duration-200"
    >
      <img
        src={
          process.env.PUBLIC_URL +
          `/img/02_portfolio/project_${portfolioChecking.projectNum}/img${portfolioChecking.projectPhoto}.png`
        }
        alt=""
        className=" w-full rounded-lg"
      />
      <form
        action=""
        className="absolute bottom-0 right-1/2 flex w-fit translate-x-1/2 translate-y-1/2 gap-2"
      >
        <label>
          <input
            type="radio"
            id="1"
            name="imageNum"
            checked={portfolioChecking.projectPhoto === 1}
            onClick={onClickSetPhoto}
            className="aspect-square w-4 cursor-pointer appearance-none rounded-full bg-zinc-300 duration-150 before:block before:aspect-square before:w-4 before:scale-0 before:rounded-full before:bg-slate-700 before:duration-150 checked:before:scale-100 hover:-translate-y-1 hover:bg-zinc-500 hover:shadow-buttonShadow hover:before:bg-slate-900"
          />
        </label>
        <label>
          <input
            type="radio"
            id="2"
            name="imageNum"
            checked={portfolioChecking.projectPhoto === 2}
            onClick={onClickSetPhoto}
            className="aspect-square w-4 cursor-pointer appearance-none rounded-full bg-zinc-300 duration-150 before:block before:aspect-square before:w-4 before:scale-0 before:rounded-full before:bg-slate-700 before:duration-150 checked:before:scale-100 hover:-translate-y-1 hover:bg-zinc-500 hover:shadow-buttonShadow hover:before:bg-slate-900"
          />
        </label>
        <label>
          <input
            type="radio"
            id="3"
            name="imageNum"
            checked={portfolioChecking.projectPhoto === 3}
            onClick={onClickSetPhoto}
            className="aspect-square w-4 cursor-pointer appearance-none rounded-full bg-zinc-300 duration-150 before:block before:aspect-square before:w-4 before:scale-0 before:rounded-full before:bg-slate-700 before:duration-150 checked:before:scale-100 hover:-translate-y-1 hover:bg-zinc-500 hover:shadow-buttonShadow hover:before:bg-slate-900"
          />
        </label>
      </form>
    </div>
  );
};

export default CvPortfolioImage;
