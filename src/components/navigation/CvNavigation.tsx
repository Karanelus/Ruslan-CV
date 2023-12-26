import { useCvRuslanContext } from "../../context/CvRuslanContext";
import { Link } from "react-router-dom";

const CvNavigation = () => {
  const { navpanelRef, isBurgerMenuOpen } = useCvRuslanContext();

  return (
    <nav
      ref={navpanelRef}
      className={`fixed left-1/2 top-4 z-10 flex h-8 w-burgerMenu -translate-x-1/2 items-center justify-center rounded-lg bg-orange-300 px-6 duration-300 ease-in-out md:fixed md:right-0 md:top-0 md:flex md:w-full md:justify-end md:border-b-2 md:border-orange-200 md:bg-orange-100 md:px-8 md:opacity-0 md:duration-300 md:hover:opacity-100 ${
        isBurgerMenuOpen ? null : " -translate-y-screenOutY"
      }`}
    >
      <ul className=" flex list-none flex-row gap-8">
        <li className="font-bold md:cursor-pointer md:font-bold md:text-gray-500 md:duration-150 md:ease-in-out md:hover:text-gray-950">
          <Link to="/Ruslan-CV">About</Link>
        </li>
        <li className="font-bold md:cursor-pointer md:font-bold md:text-gray-500 md:duration-150 md:ease-in-out md:hover:text-gray-950">
          <Link to="/karaniewskiportfolio">Portfolio</Link>
        </li>
        <li className="font-bold md:cursor-pointer md:font-bold md:text-gray-500 md:duration-150 md:ease-in-out md:hover:text-gray-950">
          <Link to="/karaniewskicontact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CvNavigation;
