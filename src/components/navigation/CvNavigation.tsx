import { useCvRuslanContext } from "../../context/CvRuslanContext";
import { Link } from "react-router-dom";

const CvNavigation = () => {
  const { navpanelRef, isBurgerMenuOpen } = useCvRuslanContext();

  return (
    <nav
      ref={navpanelRef}
      className={`md:flex md:justify-end md:px-8 md:opacity-0 md:fixed md:hover:opacity-100 md:top-0 md:right-0 md:w-full md:duration-300 md:bg-orange-100 md:border-b-2 md:border-orange-200 duration-300 ease-in-out h-8 w-burgerMenu fixed bg-orange-300 flex justify-center items-center top-4 left-1/2 -translate-x-1/2 z-10 px-6 rounded-lg ${
        isBurgerMenuOpen ? null : " -translate-y-screenOutY"
      }`}
    >
      <ul className=" list-none flex flex-row gap-8">
        <li className=" md:cursor-pointer md:ease-in-out md:duration-150 md:font-bold md:text-gray-500 md:hover:text-gray-950 font-bold">
          <Link to="/Ruslan-CV">About</Link>
        </li>
        <li className=" md:cursor-pointer md:ease-in-out md:duration-150 md:font-bold md:text-gray-500 md:hover:text-gray-950 font-bold">
          <Link to="/karaniewskiportfolio">Portfolio</Link>
        </li>
        <li className=" md:cursor-pointer md:ease-in-out md:duration-150 md:font-bold md:text-gray-500 md:hover:text-gray-950 font-bold">
          <Link to="/karaniewskicontact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CvNavigation;
