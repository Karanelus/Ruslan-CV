import { useContext, useRef, createContext, ReactNode, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.hook";

type RuslanContextProps = {
  children: ReactNode;
};

export type Portfolio = {
  projectNum: number;
  projectPhoto: string;
};

type RuslanContextContainerProps = {
  PortfolioInfoRef: React.RefObject<HTMLDivElement>;
  navPanelRef: React.RefObject<HTMLElement>;
  imageProjectRef: React.RefObject<HTMLDivElement>;
  isMobileScreenDown: boolean;
  setIsMobileScreenDown: React.Dispatch<React.SetStateAction<boolean>>;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  portfolioChecking: Portfolio;
  setPortfolioChecking: (value: Portfolio) => void;
  userAgent: string;
};

const RuslanContextContainer = createContext({} as RuslanContextContainerProps);

export const useRuslanContext = () => {
  return useContext(RuslanContextContainer);
};

const RuslanContext = ({ children }: RuslanContextProps) => {
  const PortfolioInfoRef = useRef<HTMLDivElement>(null);
  const navPanelRef = useRef<HTMLElement>(null);
  const imageProjectRef = useRef<HTMLDivElement>(null);
  const [isMobileScreenDown, setIsMobileScreenDown] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(true);
  const userAgent = window.navigator.userAgent;
  const [portfolioChecking, setPortfolioChecking] = useLocalStorage<Portfolio>(
    "portfolioChecking",
    {
      projectNum: 1,
      projectPhoto: "1",
    },
  );

  return (
    <RuslanContextContainer.Provider
      value={{
        PortfolioInfoRef,
        navPanelRef,
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
    </RuslanContextContainer.Provider>
  );
};

export default RuslanContext;
