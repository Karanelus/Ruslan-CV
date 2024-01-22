import { useEffect } from "react";
import { useRuslanContext } from "../context/RuslanContext";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import ButtonBurgerMenu from "../mobileVersionButton/ButtonBurgerMenu";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import ButtonScreenUp from "../mobileVersionButton/ButtonScreenUp";
import Footer from "./Footer/Footer";

const Render = () => {
  const { setIsMobileScreenDown } = useRuslanContext();

  useEffect(() => {
    const sizeProver = () => {
      if (window.innerWidth < 840 && window.scrollY > 50) {
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
      <Navigation />
      <Header />
      <ButtonBurgerMenu />
      <main className="flex flex-col items-center justify-start px-4">
        <Routes>
          <Route index path="/Ruslan-CV" element={<About />} />
          <Route path="/karaniewskiportfolio" element={<Portfolio />} />
          <Route path="/karaniewskicontact" element={<Contact />} />
        </Routes>
      </main>
      <ButtonScreenUp />
      <Footer />
    </>
  );
};

export default Render;
