import { useCvRuslanContext } from "../../../context/CvRuslanContext";

const CvPortfolioImage = () => {
  const { imageProjectRef, portfolioChecking, setPortfolioChecking } = useCvRuslanContext();

  const onClickSetPhoto = (e: React.MouseEvent<HTMLInputElement>) => {
    setPortfolioChecking({ ...portfolioChecking, projectPhoto: Number(e.currentTarget.id) });
  };

  return (
    <div ref={imageProjectRef} className="duration-200 aspect-project py-2 px-4 relative">
      <img
        src={`/img/02_portfolio/project_${portfolioChecking.projectNum}/img${portfolioChecking.projectPhoto}.png`}
        alt=""
        className=" rounded-lg w-full"
      />
      <form action="" className="absolute w-fit bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 flex gap-2">
        <label>
          <input
            type="radio"
            id="1"
            name="imageNum"
            checked={portfolioChecking.projectPhoto === 1}
            onClick={onClickSetPhoto}
            className="cursor-pointer bg-zinc-300 appearance-none w-4 aspect-square rounded-full checked:before:scale-100 before:duration-150 before:w-4 before:aspect-square before:block before:rounded-full before:scale-0 before:bg-slate-700 duration-150 hover:-translate-y-1 hover:shadow-buttonShadow hover:bg-zinc-500 hover:before:bg-slate-900"
          />
        </label>
        <label>
          <input
            type="radio"
            id="2"
            name="imageNum"
            checked={portfolioChecking.projectPhoto === 2}
            onClick={onClickSetPhoto}
            className="cursor-pointer bg-zinc-300 appearance-none w-4 aspect-square rounded-full checked:before:scale-100 before:duration-150 before:w-4 before:aspect-square before:block before:rounded-full before:scale-0 before:bg-slate-700 duration-150 hover:-translate-y-1 hover:shadow-buttonShadow hover:bg-zinc-500 hover:before:bg-slate-900"
          />
        </label>
        <label>
          <input
            type="radio"
            id="3"
            name="imageNum"
            checked={portfolioChecking.projectPhoto === 3}
            onClick={onClickSetPhoto}
            className="cursor-pointer bg-zinc-300 appearance-none w-4 aspect-square rounded-full checked:before:scale-100 before:duration-150 before:w-4 before:aspect-square before:block before:rounded-full before:scale-0 before:bg-slate-700 duration-150 hover:-translate-y-1 hover:shadow-buttonShadow hover:bg-zinc-500 hover:before:bg-slate-900"
          />
        </label>
      </form>
    </div>
  );
};

export default CvPortfolioImage;
