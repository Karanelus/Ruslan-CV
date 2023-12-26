const CvLanguages = () => {
  return (
    <div className="">
      <h2>Languages</h2>
      <ul className=" grid list-none grid-cols-1 flex-col gap-2 2xl:grid-cols-2">
        <li className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-rose-300  hover:text-white hover:shadow-buttonShadow">
          Polish - C1
        </li>
        <li className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-rose-300  hover:text-white hover:shadow-buttonShadow">
          Belarusian - C2
        </li>
        <li className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-rose-300  hover:text-white hover:shadow-buttonShadow">
          English - B2
        </li>
        <li className="cursor-pointer rounded-lg bg-orange-50 p-2 text-center duration-150 hover:translate-y-[-0.25rem] hover:bg-rose-300  hover:text-white hover:shadow-buttonShadow">
          Russian - C2
        </li>
      </ul>
    </div>
  );
};

export default CvLanguages;
