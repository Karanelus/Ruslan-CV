import styles from "./Footer.styles";

const Footer = () => {
  const date = new Date();
  const footerInfo = `©2023-${date.getFullYear()}, Rusłan Karaniewski`;

  return <footer className={styles.footer}>{footerInfo}</footer>;
};

export default Footer;
