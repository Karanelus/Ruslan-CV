const CvHeader = () => {
  return (
    <header className=" flex sm:flex-row flex-col w-full items-center md:px-12 py-8 px-8 bg-gradient-to-r from-rose-300 from-10% to-orange-200 to-80% sm:gap-8 gap-4 md:mb-12 mb-8">
      <div className="h-48 lg:h-52 2xl:h-64 overflow-hidden aspect-square rounded-full hover:cursor-pointer ">
        <img
          src="/img/00_header/Ruslan_Karaneuski.png"
          className="aspect-square top-0 right-0 hover:scale-110 duration-300 ease"
          alt=""
        />
      </div>
      <div>
        <h1 className="font-bold sm:text-left text-center">Rusłan Karaniewski</h1>
        <p className="sm:text-left text-center">Frontend developer</p>
      </div>
    </header>
  );
};

export default CvHeader;
