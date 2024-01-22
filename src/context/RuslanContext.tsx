import { useContext, useRef, createContext, ReactNode, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.hook";

type CvRuslanContextProps = {
  children: ReactNode;
};

export type CvPotfolio = {
  projectNum: number;
  projectPhoto: string;
};

type CvRuslanContextContainerProps = {
  aboutProjectRef: React.RefObject<HTMLDivElement>;
  navpanelRef: React.RefObject<HTMLElement>;
  imageProjectRef: React.RefObject<HTMLDivElement>;
  isMobileScreenDown: boolean;
  setIsMobileScreenDown: React.Dispatch<React.SetStateAction<boolean>>;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  portfolioChecking: CvPotfolio;
  setPortfolioChecking: (value: CvPotfolio) => void;
  userAgent: string;
};

const CvRuslanContextContainer = createContext(
  {} as CvRuslanContextContainerProps,
);

export const useRuslanContext = () => {
  return useContext(CvRuslanContextContainer);
};

const RuslanContext = ({ children }: CvRuslanContextProps) => {
  const aboutProjectRef = useRef<HTMLDivElement>(null);
  const navpanelRef = useRef<HTMLElement>(null);
  const imageProjectRef = useRef<HTMLDivElement>(null);
  const [isMobileScreenDown, setIsMobileScreenDown] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(true);
  const userAgent = window.navigator.userAgent;
  const [portfolioChecking, setPortfolioChecking] = useLocalStorage<CvPotfolio>(
    "portfolioChecking",
    {
      projectNum: 1,
      projectPhoto: "1",
    },
  );

  return (
    <CvRuslanContextContainer.Provider
      value={{
        aboutProjectRef,
        navpanelRef,
        imageProjectRef,
        isMobileScreenDown,
        setIsMobileScreenDown,
        isBurgerMenuOpen,
        setIsBurgerMenuOpen,
        portfolioChecking,
        setPortfolioChecking,
        userAgent,
      }}
    >
      <BrowserRouter>{children}</BrowserRouter>
    </CvRuslanContextContainer.Provider>
  );
};

export default RuslanContext;
