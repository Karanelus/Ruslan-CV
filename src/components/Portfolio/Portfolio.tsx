import styles from "./Portfolio.styles";
import PortfolioSection from "./PortfolioSection";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2>My Projects</h2>
      <PortfolioSection />
    </div>
  );
};

export default Portfolio;
