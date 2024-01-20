import { Link } from "react-router-dom";
import styles from "./Navigation.styles";

type props = {
  name: string;
  link: string;
  key: string;
  onClickActivateLink: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const NavigationLink = ({ name, link, key, onClickActivateLink }: props) => {
  return (
    <li className={styles.link} onClick={onClickActivateLink}>
      <Link key={key} to={link}>
        {name}
      </Link>
    </li>
  );
};

export default NavigationLink;
