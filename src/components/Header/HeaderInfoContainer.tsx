import styles from "./Header.styles";

type Props = {
  headerTextName: string;
  headerTextTitle: string;
};

const HeaderInfoContainer = ({ headerTextName, headerTextTitle }: Props) => {
  return (
    <div>
      <h1 className={styles.text}>
        <b>{headerTextName}</b>
      </h1>
      <p className={styles.text}>{headerTextTitle}</p>
    </div>
  );
};

export default HeaderInfoContainer;
