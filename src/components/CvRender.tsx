import { useEffect } from "react";
import { useCvRuslanContext } from "../context/CvRuslanContext";
import CvButtonBurgerMenu from "../extention/CvButtonBurgerMenu";
import CvButtonScreenUp from "../extention/CvButtonScreenUp";
import CvHeader from "./00_header/CvHeader";
import CvAboutSectionsRender from "./01_about/CvAboutSectionsRender";
import CvPortfolioSectionRender from "./02_portfolio/CvPortfolioSectionRender";
import CvContactSectionRender from "./03_contact/CvContactSectionRender";
import CvFooter from "./04_footer/CvFooter";
import CvNavigation from "./navigation/CvNavigation";
import { Routes, Route } from "react-router-dom";

const CvRender = () => {
  const { setIsMobileScreenDown } = useCvRuslanContext();

  useEffect(() => {
    const sizeProver = () => {
      if (window.innerWidth < 600 && window.scrollY > 50) {
        setIsMobileScreenDown(true);
      } else {
        setIsMobileScreenDown(false);
      }
    };

    sizeProver();
    window.addEventListener("resize", sizeProver);
    window.addEventListener("scroll", sizeProver);
    return () => {
      window.removeEventListener("resize", sizeProver);
      window.removeEventListener("scroll", sizeProver);
    };
  }, [setIsMobileScreenDown]);

  return (
    <>
      <CvNavigation />
      <CvHeader />
      <CvButtonBurgerMenu />
      <main className="flex justify-start flex-col items-center px-4">
        <Routes>
          <Route index path="/Ruslan-CV" element={<CvAboutSectionsRender />} />
          <Route path="/karaniewskiportfolio" element={<CvPortfolioSectionRender />} />
          <Route path="/karaniewskicontact" element={<CvContactSectionRender />} />
        </Routes>
      </main>
      <CvFooter />
      <CvButtonScreenUp />
    </>
  );
};

export default CvRender;
