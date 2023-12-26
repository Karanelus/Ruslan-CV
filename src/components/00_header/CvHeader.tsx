// import photo from "../../../public/img/00_header/Ruslan_Karaniewski.png";

const CvHeader = () => {
  return (
    <header className="mb-8 flex w-full flex-col items-center gap-4 bg-gradient-to-r from-rose-300 from-10% to-orange-200 to-80% px-8 py-8 sm:flex-row sm:gap-8 md:mb-12 md:px-12">
      <div className="aspect-square h-48 overflow-hidden rounded-full hover:cursor-pointer lg:h-52 2xl:h-64 ">
        <img
          src={process.env.PUBLIC_URL + "/img/00_header/Ruslan_Karaniewski.png"}
          className="ease right-0 top-0 aspect-square duration-300 hover:scale-110"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-center font-bold sm:text-left">
          Rusłan Karaniewski
        </h1>
        <p className="text-center sm:text-left">Frontend developer</p>
      </div>
    </header>
  );
};

export default CvHeader;
