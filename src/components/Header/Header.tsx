import styles from "./Header.styles";
import { headerInfo } from "./Header.data";
import HeaderImageContainer from "./HeaderImageContainer";
import HeaderInfoContainer from "./HeaderInfoContainer";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderImageContainer
        containerStyle={styles.imageContainer}
        imageStyle={styles.image}
        image={headerInfo.image}
      />
      <HeaderInfoContainer
        headerTextName={headerInfo.headerTextName}
        headerTextTitle={headerInfo.headerTextTitle}
      />
    </header>
  );
};

export default Header;
