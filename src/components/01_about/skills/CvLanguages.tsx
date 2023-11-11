const CvLanguages = () => {
  return (
    <div className="">
      <h2>Languages</h2>
      <ul className=" list-none flex-col gap-2 grid 2xl:grid-cols-2 grid-cols-1">
        <li className="rounded-lg bg-orange-50 hover:bg-rose-300 p-2 cursor-pointer hover:text-white duration-150 text-center  hover:translate-y-[-0.25rem] hover:shadow-buttonShadow">
          Polish - C1
        </li>
        <li className="rounded-lg bg-orange-50 hover:bg-rose-300 p-2 cursor-pointer hover:text-white duration-150 text-center  hover:translate-y-[-0.25rem] hover:shadow-buttonShadow">
          Belarusian - C2
        </li>
        <li className="rounded-lg bg-orange-50 hover:bg-rose-300 p-2 cursor-pointer hover:text-white duration-150 text-center  hover:translate-y-[-0.25rem] hover:shadow-buttonShadow">
          English - B2
        </li>
        <li className="rounded-lg bg-orange-50 hover:bg-rose-300 p-2 cursor-pointer hover:text-white duration-150 text-center  hover:translate-y-[-0.25rem] hover:shadow-buttonShadow">
          Russian - C2
        </li>
      </ul>
    </div>
  );
};

export default CvLanguages;
