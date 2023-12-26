import { useContext, useRef, createContext, ReactNode, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import project from "../projects/projects.json";
import useLocalStorage from "../hooks/useLocalStorage";

type CvRuslanContextProps = {
  children: ReactNode;
};

type CvProjectType = {
  id: number;
  nameOfProject: string;
  about: string;
  img: {
    num_1: string;
    num_2: string;
    num_3: string;
  };
  linkLive: string;
  linkRepo: string;
};

export type CvPotfolio = {
  projectNum: number;
  projectPhoto: number;
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
  projectsContainer: CvProjectType[];
  userAgent: string;
};

const CvRuslanContextContainer = createContext(
  {} as CvRuslanContextContainerProps,
);

export const useCvRuslanContext = () => {
  return useContext(CvRuslanContextContainer);
};

const CvRuslanContext = ({ children }: CvRuslanContextProps) => {
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
      projectPhoto: 1,
    },
  );
  const projectsContainer: CvProjectType[] = project;

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
        projectsContainer,
        userAgent,
      }}
    >
      <BrowserRouter>{children}</BrowserRouter>
    </CvRuslanContextContainer.Provider>
  );
};

export default CvRuslanContext;
